import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,addby2, inputvalue } from './CounterSlice';



const Counter = () => {
  
    const [inputIncrease, setinputIncrease] = useState(0);
    const dispatch = useDispatch();
    const countNumber = useSelector((state:any)=> state.counter.value);
  
return (
<div>
Counter Redux TOOLKIT APP = {countNumber}
<input 
    value={inputIncrease}
    onChange={(e:any)=>setinputIncrease(e.target.value)}
/>
<button onClick={()=>dispatch(increment())}>Increment add </button>
<button onClick={()=>dispatch(decrement())}>Decrement sub</button>
<button 
onClick={()=>dispatch(addby2())}
>Add by 2</button>
<button onClick={()=>dispatch(inputvalue(Number(inputIncrease || 0)))}>add as Per INPUT</button>
</div>
)
}

export default Counter