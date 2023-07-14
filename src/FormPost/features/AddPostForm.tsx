import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectAllPosts } from './PostSlice'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './PostSlice';
import { TextField } from '@mui/material';
import {Button,Select,FormControl} from '@mui/material';

const AddPostForm = () => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('');
    const [author,setauthor] = useState('');

    const users = useSelector(selectAllPosts);
    const onTitleChanged = (e:any) => setTitle(e.target.value)
    const onContentChanged = (e:any) => setContent(e.target.value)
    const onAuthorChanged = (e:any) => setauthor(e.target.value)

    const usersOptions = users.map((user:any) => (
      <option key={user.id} value={user.id}>
          {user.name}
      </option>
  ))

    const onSavePostClicked =()=>{
        if(title && content ){
             dispatch(
                postAdded(title,content,author)
             )
             setTitle('');
             setContent('');
        }
    }

  return (
    <div>
       <h2>
         Add New Post Form in MAIN
        </h2>
    <form>
        <label htmlFor='postTitle'>Post Title</label>    
        <TextField 
        type='text'
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
        
        <label htmlFor="postAuthor">Author:</label>
                {/* <Select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value="">
                    </option>
                    {usersOptions}
                </Select> */}
    <TextField 
        type='text'
        // id='postTitle'
        name='postTitle'
        id="outlined-basic"
        value={author}
        onChange={onAuthorChanged} />
        <br/>
        <Button type='button'
        variant="contained"
        onClick={onSavePostClicked}
        disabled={title && content ? false : true}
        >Save Post</Button>
      </form>
    </div>
  )
}

export default AddPostForm