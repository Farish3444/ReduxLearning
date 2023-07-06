import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './PostSlice';

const PostList = () => {

  const posts = useSelector(selectAllPosts);

  console.log(posts)

  const renderpost = posts.map((p:any)=>(
    <article key={p.id}>
      <h3>{p.title}</h3>
      {/* <p>{p.content.substring(0,100)}</p> */}
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