import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Badge,
  IconButton,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import apiReq from "../../utils/axiosInstance";
import Loader from "../../common/Loader";
import ErrorMsg from "../../common/ErrorMsg";

// Dummy product data (can be replaced with API data)
const products = [
  {
    id: 1,
    name: "Shoes",
    category: "Sports",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 80,
    originalPrice: 100,
    memberPrice: 30,
  },
  {
    id: 2,
    name: "Shoes",
    category: "Sports",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 80,
    originalPrice: 100,
    memberPrice: 30,
  },
  {
    id: 3,
    name: "Shoes",
    category: "Sports",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 80,
    originalPrice: 100,
    memberPrice: 30,
  },
  {
    id: 4,
    name: "Shoes",
    category: "Sports",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 80,
    originalPrice: 100,
    memberPrice: 30,
  },
];

export default function Product() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => apiReq.get('/api/items',)
  })
  console.log(data)
  return (
    <Box sx={{ py: 5, px: 2, position: "relative" }}>
      {/* Floating Cart Icon */}
      <Link to="/order-details">
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
          <Badge badgeContent={1} color="secondary">
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
          data?.data?.map((product) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={product?.id}>
              <Link to={`/product/${product?.id}`} style={{ textDecoration: "none" }}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={product?.item_image}
                    alt={product?.item_image}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {product?.name}
                    </Typography>
                    <Typography color="textSecondary" mb={1}>
                      Category: {product?.category}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography color="green" fontWeight="bold">
                        ${product?.price}
                      </Typography>
                      <Typography color="textSecondary" sx={{ textDecoration: "line-through" }}>
                        ${product?.discount_rate}
                      </Typography>
                    </Box>
                    <Typography color="textSecondary" fontSize={14} mb={2}>
                      Member: ${product.members_price}
                    </Typography>
                    <Button variant="contained" fullWidth>
                      Add To Cart
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
