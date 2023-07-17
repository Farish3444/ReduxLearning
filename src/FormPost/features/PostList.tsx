import React,{ useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThunkDispatch,AnyAction } from '@reduxjs/toolkit';
import { selectAllPosts, getPostsStatus,getPostsError, fetchPosts } from './PostSlice';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TimeAgo from './users/TimeAgo';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import PostsExcerpt from './PostExcert';
import { fetchUsers } from './users/UserSlice';

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

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
 
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const orderedPosts = posts.slice().sort((a:any,b:any)=>b.date.localeCompare(a.data))

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    if(postStatus === 'idle'){
      dispatch(fetchUsers());
      dispatch(fetchPosts());
    }
    console.log(orderedPosts,'order order')
  },[postStatus,dispatch])


  // let content;
  // if (postStatus === 'loading') {
  //     content = <p>"Loading..."</p>;
  // } else if (postStatus === 'succeeded') {
  //     const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  //     content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
  // } else if (postStatus === 'failed') {
  //     content = <p>{error}</p>;
  //     alert('error try again')
  // }


   const renderpost = orderedPosts.map((p:any)=>(
     <article key={p.id}>
       <h3>{p.title}</h3>
       <p>{p.body.substring(0,50)}</p>
       <PostAuthor userId={p.userId} />
       <TimeAgo timestamp={p.date} />
       <br />
       <ReactionButtons post={p} />

       <Button 
       variant='contained'
       color='error'
       onClick={()=>setOpen(true)}
       >delete</Button>
     </article>
   ))

  return (
    <div>
     <h1>
       PostList
      </h1>
      {renderpost}
      {/* {content} */}
    </div>
  )
}

export default PostList