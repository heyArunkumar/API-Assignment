import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import axios from 'axios'
import { useEffect } from 'react'
import { setProductes } from '../Redux/Action/ProductAction'
// import ProductComponent from './ProductComponent'
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom'


const { Meta } = Card;

function productListing() {
  const products = useSelector((state) => state.allProducts.product)
  // const {id,title}=prosucts[0]
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((product) => {
        dispatch(setProductes(product.data))
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])
  console.log("product", products)

  return (
    <div className='Cards'>
      {products && products.map((product) => {
        console.log(product.id)
        return (

          <div >
            <Link to={`/product/${product.id}`}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.image} className="product_img" />}
              >
                <Meta title={product.title} description={product.price} />
                <p>{product.category}</p>
              </Card>
            </Link>
          </div>

        )
      })
      }
    </div>
  )
}

export default productListing
