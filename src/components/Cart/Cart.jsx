import React from 'react';
import MessageBox from '../MessageBox'
import { Link } from 'react-router-dom'
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
 
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {!cart.line_items.length ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <div>
            <div className='container'>
              {cart.line_items.map((item) => (
                <div key={item.product}>
                  <div className="card">
                    <div>
                      <img
                        src={item.image.url}
                        alt={item.name}
                        className="cardImg"
                      ></img>
                    </div>
                    <div className="cardContent">
                      <h5>  {item.name} </h5>
                      <h5> {item.line_total.formatted_with_symbol}</h5>
                    </div>
                    <div>
                      <div className='cardAction'>
                        <div className='button'>
                          <button type='button' size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} >-</button>
                          <h5>{item.quantity}</h5>
                          <button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button className='delete'
                          type="button"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

              ))}
            </div>

            <div className="col-2">
              <div className="card card-cont">

                <div>
                  <h2>
                    subtotal:{cart.subtotal.formatted_with_symbol}
                  </h2>
                </div>
                <div className='button'>
                  <button
                    type="button"
                    component={Link} to="/checkout"
                    className="primary block"

                  >
                    <Link to="/checkout">
                      to Checkout
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={handleEmptyCart}
                    className="primary block"

                  >
                    empty cart
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}
      </div>

    </div>

  )
}

export default Cart

