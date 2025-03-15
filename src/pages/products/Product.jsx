import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaArrowLeft, FaBars, FaSearch } from "react-icons/fa";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Box,
  Grid,
  InputBase,
  Menu,
  MenuItem,
  ListItem,
  Collapse,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import apiReq from "../../utils/axiosInstance";
import Loader from "../../common/Loader";
import ErrorMsg from "../../common/ErrorMsg";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { ArrowBackIos } from "@mui/icons-material";
import Slider from "./Slider";

export default function Product() {
  const [items, setItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // For menu
  const [searchQuery, setSearchQuery] = useState(""); // For search
  const [showSearchBox, setShowSearchBox] = useState(false); // To toggle search box
  const open = Boolean(anchorEl);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: () => apiReq.get("/api/items"),
  });

  const { data: cartedProducts } = useQuery({
    queryKey: ["carted-products"],
    queryFn: () => apiReq.get("/api/carted-products"),
  });

  useEffect(() => {
    if (data) {
      setItems(data?.data?.filter((item) => item.is_available));
    }
  }, [data]);

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toggle search box
  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Example product categories
  const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Toys",
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <ListItem sx={{ bgcolor: "primary.main", py: 2 }}>
        <Link to="/dashboard">
          <ArrowBackIos sx={{ color: "#fff" }} />
        </Link>
        <Typography sx={{ ml: 2, fontSize: "14px", color: "#fff" }}>
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:  +88 01316141148
        </Typography>
      </ListItem>

      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: "white", color: "black", boxShadow: 0 }}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <FaBars style={{ color: 'gray' }} size={24} />
          </IconButton>

          {/* Menu */}
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            {categories.map((category) => (
              <MenuItem key={category} onClick={handleMenuClose}>
                {category}
              </MenuItem>
            ))}
          </Menu>

          {/* Logo in the Middle */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="https://lh3.googleusercontent.com/proxy/mA3WGYIwxfKyBntYlKpQwEGF3ZfHgIJi_bjk9WaxwgOuAAcX5PQT2oNgg2AEjwAzPPTlq5JEm7Vx2N4AEt3EcD8Qx5qwiXH8BwgzxdY5kiJ80xUiGOJ5yDbyJKTrJA" // Replace with your logo path
              alt="Logo"
              style={{ height: 25 }} // Adjust height as needed
            />
          </Box>

          {/* Search Icon */}
          <IconButton color="inherit" onClick={toggleSearchBox} sx={{ ml: 2 }}>
            <FaSearch style={{ color: 'gray' }} size={24} />
          </IconButton>

          {/* Search Box (Conditional Rendering) */}


          {/* Cart Icon */}
          <Link to="/order-cart">
            <IconButton color="inherit" sx={{ ml: 2 }}>
              <Badge badgeContent={cartedProducts?.data.length} color="primary">
                <TiShoppingCart style={{ color: 'gray' }} size={30} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
        <Collapse in={showSearchBox}>
          <InputBase
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{ flexGrow: 1, bgcolor: "#f5f5f5", borderRadius: 1, px: 2, py: 1, mx: 2 }}
            autoFocus // Automatically focus on the search box when it appears
          />
        </Collapse>
      </AppBar>

      <Slider />

      {/* Page Content */}
      <Typography variant="h5" align="center" mt={2} mb={3}>
        All Products
      </Typography>

      {/* Product List */}
      <Grid container spacing={2} px={2} justifyContent="center">
        {isLoading ? (
          <Loader />
        ) : filteredItems?.length === 0 ? (
          <Typography variant="body2" mt={4} textAlign="center">
            No Products Found
          </Typography>
        ) : isError ? (
          <ErrorMsg />
        ) : (
          filteredItems.map((product) => (
            <Grid item xs={6} md={4} key={product?.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}