
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import BarcodeGenerator from '../screens/BarcodeGenerator'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded product-cart'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} className='product-img' variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text className='product-price' as='h5'>${product.price}</Card.Text>
      </Card.Body>
      <BarcodeGenerator barcode={product.barcode} />

    </Card>
  )
}

export default Product
