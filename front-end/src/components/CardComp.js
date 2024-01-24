import React, { useEffect, useRef, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCart, useDispatchCart } from './ContextReducer';

function CardComp(props) {

  //console.log("props received in CardComp: ",props)
  //console.log("prop img received in CardComp: ",props.foodItem.img)

  let dispatch = useDispatchCart()
  let data = useCart() 
  let options = props.options;
  let priceOptions = Object.keys(options) 

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart = async () => {

     let food = []
     for(const item of data) {
      if(item.id === props.foodItem._id) {
        food = item;

        break;
      }
     }
     if(food != []) {
      if(food.size === size) {
        await dispatch({type: 'UPDATE', id: props.foodItem._id, price: finalPrice, qty: qty})
        return
      }
      else if (food.size != size) {
        await dispatch({type:'ADD', 
                    id:props.foodItem._id,
                    name: props.foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size, })
                    return
      //console.log("After clicking on Add to cart: ",data)    
      //console.log("handleAddToCart function called...") 
      }
      return
     }

     await dispatch({type:'ADD', 
                    id:props.foodItem._id,
                    name: props.foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size, })
               
  }

  const priceRef = useRef()
  let finalPrice = qty * parseInt(options[size])

  useEffect(() => {
    setSize(priceRef.current.value)
  },[])

  return (
    <div>
      <div>
        <Card className="mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <Card.Img 
          variant="top" 
          src={props.foodItem.img} 
          className='card-img-top'
          alt= "..."
          style={{height:"120px", objectFit:'fill'}}
          />
          <Card.Body>
            <Card.Title>{props.foodItem.name}</Card.Title>
            {/*<Card.Text>
              Some quick example text.
            </Card.Text>*/}
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                {
                  Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}> {i + 1} </option>
                    )
                  })
                }
              </select>

              <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {
                  priceOptions.map((data) => {
                    return <option key={data} value={data}>{data}</option>
                  })
                }
              </select>

              <div className='d-inline h-100 fs-5'>
              <span>&#8377;</span>{finalPrice}/-
              </div>
            </div>
            <hr/>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default CardComp
