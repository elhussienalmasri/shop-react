
import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';

export default function Product({ product, onAddToCart }) {

  return (
    <div key={product._id} className="card">
      <img className="p-img" src={product.image.url} alt={product.name} />
      <div className="card-body">
        <div>{product.name}</div >
        <div className="price"> {product.price.formatted_with_symbol}</div>
      </div>
      <div className="card-body">
        <div dangerouslySetInnerHTML={{ __html: product.description }} className='p-info' />
        <button onClick={() => onAddToCart(product.id, 1)} aria-label="Add to Cart" className='p-info' >
          <AddShoppingCart />
        </button>
      </div>
    </div>
  );
}
