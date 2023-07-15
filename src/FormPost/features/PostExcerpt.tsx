import React,{useEffect,useState} from 'react'
import TimeAgo from './users/TimeAgo'
import ReactionButtons from './ReactionButtons'
import PostAuthor from './PostAuthor'

interface Post {
    title: string;
    content: string;
    author: string;
    date: string;
  }


const PostExcerpt = ({ post }: { post: Post }) => {
  return (
    <article>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0,50)}</p>
    <PostAuthor authorname={post.author} />
    <TimeAgo timestamp={post.date} />
    <br />
    <ReactionButtons post={post} />

    {/* <Button 
    variant='contained'
    color='error'
    onClick={()=>setOpen(true)}
    >delete</Button> */}
    {/* {
      open && <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         Are you Sure want to Delete this POST
        </Typography>
       <div style={{display:'flex',justifyContent:'space-around'}}>
          <Button variant='contained' color='success' style={{width:'30%'}}  onClick={()=>
          {
      dispatch(removePost(p.id))
      handleClose()
    }}>YES</Button>
          <Button variant='contained' color='error' style={{width:'30%'}} onClick={handleClose}>NO</Button>
       </div>
      </Box>
    </Modal>
    } */}
    
  </article>
  )
}

export default PostExcerpt