import React,{FC} from 'react';
import { useSelector } from 'react-redux';
// import { selectAllusers } from './users/UserSlice';

interface userIdProps{
  authorname:string;
}

const PostAuthor:FC<userIdProps> = ({ authorname }) => {
  
  // const users = useSelector(selectAllusers);

  
  //  const author = users.find((u:any) =>u.id === userId)
  // const author = users.map((m:any)=>m.author);
  


  return (
  <span>by {authorname ? authorname : 'unknow Author'}</span>
  )
}

export default PostAuthor