import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  
  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>

          {product.discount > 0 ? (
            <p className="card-text">
              Price: ₹<del>{product.price}</del>{' '}
              <span className="ms-2 fw-bold">₹{product.discountedPrice}</span>
            </p>
          ) : (
            
            <p className="card-text">Price: ₹{product.price}</p>
          )}

          <Link to={`/dashboard/${product.id}`} className="btn btn-secondary mb-3">View More</Link>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Card