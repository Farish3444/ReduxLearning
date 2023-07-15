import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './PostSlice';
import { Button } from '@mui/material';
import { removePost } from './PostSlice';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TimeAgo from './users/TimeAgo';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import PostExcerpt from './PostExcerpt';
import { getPostsStatus,getPostsError } from '../../APIcalls/ApiSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus)
  const errorStatus = useSelector(getPostsError)

  

  let content;
  if(postStatus === 'loading'){
    content= <h1>Loading</h1>
  } else if(postStatus === 'succeeded'){
    const orderedPosts = posts.slice().sort((a:any,b:any)=>b.date.localeCompare(a.data))
    content = orderedPosts.map((post:any) => <PostExcerpt post={post} key={post.id} /> )
  } else if (postStatus === 'failed'){
    content = <p>{errorStatus}</p>;
  }

  return (
    <div>
     <h1>
       PostList
      </h1>
     {content}
    </div>
  )
}

export default PostList