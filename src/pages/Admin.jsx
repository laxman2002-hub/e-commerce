import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { CardActions } from "@mui/material";
import { Rating } from "@mui/material";
import { CardContent } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToCart } from "../feature/cart-slice";
import { fetchAllProducts } from "../feature/products-slice";

export default function Admin() {

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const searchTerm = searchParams.get("searchterm");

  const state = useSelector((state) => state.products);
  const { value: products, loading } = state ?? {};
  const dispatch = useDispatch();

  if (!products?.length) {
    dispatch(fetchAllProducts());
  }

  
  let filteredProducts =
    category && category !== "all" ? products.filter((prod) => prod.category === category) : products;

  filteredProducts = searchTerm
    ? filteredProducts.filter((prod) => prod.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredProducts;


  return(
    <Container sx={{ py: 8 }} maxWidth="lg">
    <h1 align="center">Welcome Admin</h1>
    <Grid container >
      
      {filteredProducts?.map(({ title, id, price, description, rating, image }) => (
        <Grid item key={id} xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", }}>
            <CardMedia
              component="img"
              sx={{
                alignSelf: "center",
                objectFit: "contain",
                  height:"200px",
                  width:"200px",
                  // border:"2px solid black",

              }}
              image={image}
              alt={title}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </Typography>
              <Typography
                color="text.secondary"
                paragraph
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {description}
              </Typography>
              <Typography fontSize="large" paragraph>
                {price}
              </Typography>
              <Rating readOnly precision={0.5} value={rating.rate} />
            </CardContent>
            <CardActions
              sx={{
                alignSelf: "center",
              }}
            >
             
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}