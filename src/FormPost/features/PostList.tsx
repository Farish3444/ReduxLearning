import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './PostSlice';
import { Button } from '@mui/material';
import { removePost } from './PostSlice';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


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
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderpost = posts.map((p:any)=>(
    <article key={p.id}>
      <h3>{p.title}</h3>
      <Button 
      variant='contained'
      color='error'
      onClick={()=>setOpen(true)}
      >delete</Button>
      {
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
      }
      
    </article>
  ))

  return (
    <div>
     <h1>
       PostList
      </h1>
      {renderpost}
    </div>
  )
}

export default PostList