import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { removeSelectedProductes, selectedProductes } from '../Redux/Action/ProductAction'
import { Card ,Button} from 'antd';


const { Meta } = Card;

function ProductDetail() {
  const product =useSelector((state)=>state.product)
  const {productID}=useParams()
  console.log(productID)
  console.log("here",product)
  const dispatch=useDispatch()
  useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${productID}`)
    .then((product)=>{
      dispatch(selectedProductes(product.data))
    })
    .catch((err)=>{
      console.log('err',err)
    })
    return ()=>{
      dispatch(removeSelectedProductes())
    }
    // if(productID&&product !=="") fetch
  },[])
  return (
    <div>
      {Object.keys(product).length===0 ?(
        <h2 style={{display:'flex',alignItems:'center',justifyContent:'center',height:'80vh'}}>Loading.....</h2>
      ):(
        <div className='product'> <Card
        className='product_card'
        hoverable
        style={{display:'flex'}}
        cover={<img alt="examdivle" src={product.image} className="product_image"/>}
      >
        <Meta title={product.title} description={product.description} />
        <p style={{marginTop:"30px",fontWeight:'bolder'}}>Price: ${product.price}</p>
        <Button danger>ADD TO CART</Button>

      </Card></div>
      )}
    </div>
  )
}

export default ProductDetail