import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectAllPosts } from './PostSlice'
import { nanoid,ThunkAction,ThunkDispatch,AnyAction,createAsyncThunk } from '@reduxjs/toolkit'
import { addNewPost } from './PostSlice';
import { TextField } from '@mui/material';
import {Button,Select,FormControl} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';



interface PostBody {
  title: string;
  body: string;
  userId: string;
}

const AddPostForm = () => {
    
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
    // const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('');
    const [author,setauthor] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const canSave = [title, content].every(Boolean) && addRequestStatus === 'idle';

    const users = useSelector(selectAllPosts);
    const onTitleChanged = (e:any) => setTitle(e.target.value)
    const onContentChanged = (e:any) => setContent(e.target.value)
    const onAuthorChanged = (e:any) => setUserId(e.target.value)

    const usersOptions = users.map((user:any) => (
      <option key={user.id} value={user.id}>
          {user.name}
      </option>
  ))


  let postbody: PostBody = {
    title,
    body: content,
    userId,
  };

  const addNewPostin = createAsyncThunk('posts/addNewPost', async (p) => {
    const response = await axios.post(POSTS_URL, postbody)
    return response.data
  });

    const onSavePostClicked = ()=>{
        if(canSave){
          console.log(postbody,'postbody')
          try {
            setAddRequestStatus('pending');
            dispatch(addNewPostin()).unwrap();
            setTitle('');
            setContent('');
            setUserId('');
          } catch(err){
              console.error('Failed to save post',err)
            } finally {
              setAddRequestStatus('idle');
            }
           
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
        <FormControl style={{ width: '100%' }}>  
        <label htmlFor="postAuthor">Author:</label>
                <Select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value="">
                    </option>
                    {usersOptions}
                </Select>
        </FormControl>
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