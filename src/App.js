import React, { useState, useEffect } from 'react';

import { Products, Navbar, Cart, Checkout, Contact } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data: products } = await commerce.products.list();

    const { data: categoriesData } = await commerce.categories.list();
    const productPerCategory = categoriesData.reduce((acc, category) => {
      return [
        ...acc, {
          ...category,
          productData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id))
        }
      ]
    }, []


    )
    setCategories(productPerCategory);

  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart)
  }
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchCategories();
    fetchCart();

  }, []);


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">

            <Products categories={categories} onAddToCart={handleAddToCart} />

          </Route>
          <Route exact path="/cart">
            <Cart cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;


  
