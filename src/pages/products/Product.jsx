import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

import {
  Box,
  Typography,
  Grid,
  Badge,
  IconButton,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import apiReq from "../../utils/axiosInstance";
import Loader from "../../common/Loader";
import ErrorMsg from "../../common/ErrorMsg";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";


export default function Product() {
  const [items, setItems] = useState([])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['items'],
    queryFn: () => apiReq.get('/api/items',)
  })


  const { data: cartedProducts } = useQuery({
    queryKey: ['carted-products'],
    queryFn: () => apiReq.get('/api/carted-products',)
  })

  useEffect(() => {
    if (data) {
      setItems(data?.data?.filter(item => item.is_available))
    }
  }, [data])
  console.log(items)

  return (
    <Box sx={{ py: 5, px: 2, position: "relative" }}>
      {/* Floating Cart Icon */}
      <Link to="/order-cart">
        <IconButton
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 10,
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: "50%",
            p: 1,
          }}
        >
          <Badge badgeContent={cartedProducts?.data.length} color="primary">
            <TiShoppingCart size={30} />
          </Badge>
        </IconButton>
      </Link>

      <Link to="/dashboard">
        <IconButton
          sx={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 10,
          }}
        >
          <FaArrowLeft size={30} />
        </IconButton>
      </Link>

      {/* Page Title */}
      <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
        Products
      </Typography>

      {/* Product List */}
      <Grid container spacing={2} justifyContent="center">

        {isLoading ? <Loader /> : isError ? <ErrorMsg /> :
          items?.map((product) => (
            <Grid item xs={6} md={4} key={product?.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
