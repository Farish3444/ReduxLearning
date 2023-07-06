import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectAllPosts } from './PostSlice'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './PostSlice';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';

const AddPostForm = () => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllPosts);
    const onTitleChanged = (e:any) => setTitle(e.target.value)
    const onContentChanged = (e:any) => setContent(e.target.value)
    const onAuthorChanged = (e:any) => setUserId(e.target.value)


    const onSavePostClicked =()=>{
        if(title && content){
             dispatch(
                postAdded({
                    id:nanoid(),
                    title,
                    content
                })
             )
             setTitle('');
             setContent('');
        }
    }

  return (
    <div>
       <h2>
         Add New Post Form
        </h2>
    <form>
        <label htmlFor='postTitle'>Post Title</label>    
        <TextField 
        type='text'
        // name='postTitle'
        value={title}
        style={{width:'100%'}}
        id="outlined-basic"
        onChange={onTitleChanged}
        />
         <label htmlFor='postContent'>Post Content</label>
         <TextField 
        type='text'
        // id='postTitle'
        name='postTitle'
        id="outlined-basic"
        value={content}
        onChange={onContentChanged} />
        <br />
        <Button type='button'
        variant="contained"
        onClick={onSavePostClicked}
        >Save Post</Button>
      </form>
    </div>
  )
}

export default AddPostForm