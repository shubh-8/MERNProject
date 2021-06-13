import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    // console.log(product._id);
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`product/${product._id}`} style={{ textDecoration: 'none' }}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`product/${product._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            <Rating
                                value={product.rating}
                                text={`${product.rating} reviews`}
                            />
                        </div>
                    </Card.Text>
                    <Card.Text as='h3'>
                        <div className='my-3'>
                            &#8377;{product.price}
                        </div>
                    </Card.Text>
                </Link>
            </Card.Body>
        </Card>
    )
}

Rating.defaultProps = { color: '#f8e825' }

Rating.PropTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Product
