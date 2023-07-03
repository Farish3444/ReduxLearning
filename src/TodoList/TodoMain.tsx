import React,{ useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { listinput } from './TodoFunctions';



const TodoMain = () => {
  
    const [todoinput, settodoinput] = useState('');
    const dispatch = useDispatch();
    const todoData = useSelector((state:any)=>state.todostore.data);   

    useEffect(() => {
        console.log(todoData);
        settodoinput(''); // Check the updated value in the console
      }, [todoData]);


    return (
    <div>TodoMain
        <input 
        value={todoinput}
        onChange={(e)=>{settodoinput(e.target.value)}}
        />
        <button onClick={()=>{
            dispatch(listinput(String(todoinput || '')))
            settodoinput('');
            }}>list</button>
        {todoData}
        {/* <div>{todoData && todoData.length > 0 ? todoData : ''}</div> */}
    </div>
  )
}

export default TodoMain