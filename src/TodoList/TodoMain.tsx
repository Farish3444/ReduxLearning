import React,{ useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { listinput, listremove } from './TodoFunctions';



const TodoMain = () => {
  
    const [todoinput, settodoinput] = useState('');
    const dispatch = useDispatch();
    const todoData = useSelector((state:{todostore:{data:string[]}})=>state.todostore.data);   

    useEffect(() => {
        console.log(todoData);
        settodoinput(''); // Check the updated value in the console
      }, [todoData]);


    return (
    <div>
TodoMain
        <input 
        value={todoinput}
        onChange={(e)=>{settodoinput(e.target.value)}}
        />
        <button onClick={()=>{
            dispatch(listinput(todoinput))
            settodoinput('');
            }}>list</button>
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