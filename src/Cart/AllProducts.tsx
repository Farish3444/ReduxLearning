import React,{useState,useEffect} from 'react'
// import Button from 'react-bootstrap/Button';
import { Card,Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { add } from './store/CartSlice';


const AllProducts = () => {

  let dispatch = useDispatch();
    
    let ProductAPI = 'https://fakestoreapi.com/products';
    const[productArr,setproductArr] = useState([]);

    const getProducts=async()=>{
        await axios.get(ProductAPI)
        .then((res)=>setproductArr(res.data))
    }

    useEffect(()=>{
        getProducts();
    },[]);

    const addTocart =(product:any)=>{
      dispatch(add(product))
    }

  return (
    <div className='row'>
       {
       productArr.map((m:any)=>(
        <div className='col-md-3' style={{marginBottom:'10px'}}>
       <Card style={{width:'18rem'}} key={m.id}>
        <div className='text-center'>
          <Card.Img variant="top" src={m.image} style={{width:'100px',height:'130px'}} />
        </div>
       <Card.Body>
         <Card.Title>{m.title}</Card.Title>
         <Card.Text>
          {m.price}
         </Card.Text>
       </Card.Body>
       <Card.Footer>
         <Button variant="primary"
         onClick={()=>{
          dispatch(add(m))
         }}
         >Add to Card</Button>
       </Card.Footer>
        </Card>
    </div>    
       ))}
    </div>
  )
}

export default AllProducts