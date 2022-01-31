
import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import Product from './Product/Product'

const Products = ({ categories, onAddToCart }) => {

  if (!categories.length) return <div>loading...</div>
  return (
    <div id='products'>

      {categories.map((category, index) => {
        return (
          <div className="row center" style={{
            backgroundImage:
              index % 2 === 0 ? "linear-gradient(#eee , #333 30%, #eee 100%)" : ""
          }} >
            <Container >
              <Typography variant="h3" component='h2'>
                {category.name}
              </Typography>
              <Grid container spacing={4}>
                {category.productData.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid >
            </Container>
          </div>
        )
      })}


    </div>
  );


};

export default Products;