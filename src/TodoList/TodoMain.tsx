import React,{ useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { listinput, listremove } from './TodoFunctions';



const TodoMain = () => {
  
    const [todoinput, settodoinput] = useState('');
    const dispatch = useDispatch();
    const todoData = useSelector((state:{todostore:{data:string[]}})=>state.todostore.data); 
    const [validate,setvalidate] = useState(false);  

    let totaltodo = todoData.length


    return (
    <div>
TodoMain - {totaltodo}
        <input 
        value={todoinput}
        onChange={(e)=>{settodoinput(e.target.value)}}
        />
        <button style={{'backgroundColor':'red',color:'white'}} onClick={()=>{
            if(todoinput){
                setvalidate(false)
                dispatch(listinput(todoinput))
                settodoinput('');
            }else{
                setvalidate(true);
            }
            }}>list the Items in local branch</button>
            {validate && <p style={{color:'red'}}>Enter any value</p>}
        {todoData.map((todo,index)=>(
            <ul>
                <li key={index}>{todo}</li>
                <button onClick={()=>{dispatch(listremove(todo))}}>delete</button>
            </ul>
        ))}
    </div>
  )
}

export default TodoMain