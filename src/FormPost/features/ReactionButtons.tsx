import React,{FC} from 'react'
import { reactionAdded } from './PostSlice'
import { useDispatch } from 'react-redux'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

interface reactionProps {
    post:any;
}

type ReactionName = keyof typeof reactionEmoji;

const ReactionButtons:FC<reactionProps> = ({post}) => {
const dispatch = useDispatch();

const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
        <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() =>
                dispatch(reactionAdded({ postId: post.id, reaction: name as ReactionName  }))
            }
        >
            {emoji}  
            <span style={{color:'red'}}>
                {post.reactions[name]}
                </span>
        </button>
    )
})
    

  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons