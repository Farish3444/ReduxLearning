import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { remove } from './store/CartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const ProductCart = useSelector((state:any)=>state.cart)

  const cards =  
    ProductCart.map((m:any)=>(
     
     <div className='col-md-12' style={{marginBottom:'10px'}}>
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
      <button onClick={()=>{
        dispatch(remove(m.id))
      }}>Remove Item</button>
    </Card.Footer>
     </Card>
 </div>    
    ))


  return (
   <div className='row'>
   {cards}
   </div>
  )
}

export default Cart