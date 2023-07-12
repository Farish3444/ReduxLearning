import React,{FC} from 'react';
import { useSelector } from 'react-redux';
import { selectAllusers } from './users/UserSlice';

interface userIdProps{
   userId:string;
}

const PostAuthor:FC<userIdProps> = ({ userId }) => {
  
  const users = useSelector(selectAllusers);

  const author = users.find((u:any) =>u.id === userId)

  return (
  <span>by {author ? author.name : 'unknow Author'}</span>
  )
}

export default PostAuthor