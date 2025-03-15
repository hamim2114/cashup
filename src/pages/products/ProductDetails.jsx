import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  Card,
  CardMedia,
  Chip,
  Divider,
  Tabs,
  Tab,
  IconButton,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CDialog from '../../common/CDialog';
import AddToCart from './AddToCart';
import useUser from '../../hook/useUser';
import Swal from 'sweetalert2';

const ProductDetails = ({ product }) => {
  const [addToCartDialogOpen, setAddToCartDialogOpen] = useState(false);

  const { user } = useUser();

  const handleAddToCart = () => {

    if (user?.main_balance === "0.00") {
      alert('You must have to pay your cash in main balance');
      return;
    }

    setAddToCartDialogOpen(true);
  };
  // Format currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Calculate discount percentage
  const discountPercentage = () => {
    const regularPrice = parseFloat(product.price);
    const discountPrice = parseFloat(product.discount_price);
    return Math.round(((regularPrice - discountPrice) / regularPrice) * 100);
  };

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      {/* Navigation Bar */}

      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.item_image}
        alt={product.name}
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: 400,
          objectFit: 'contain',
          bgcolor: 'white',
          py: 2
        }}
      />

      {/* Product Info */}
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 2, mb: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {product?.name}
              </Typography>
              {product?.is_available ? (
                <Chip
                  icon={<CheckCircleIcon />}
                  label="In Stock"
                  size="small"
                  sx={{ bgcolor: '#4caf50', color: 'white' }}
                />
              ) : (
                <Chip
                  label="Out of Stock"
                  size="small"
                  sx={{ bgcolor: '#f44336', color: 'white' }}
                />
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              <Typography variant="h5" color="primary" fontWeight="bold">
                {formatPrice(product?.discount_price)}
              </Typography>
              <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                {formatPrice(product?.price)}
              </Typography>
            </Box>

            <Box sx={{ bgcolor: '#e3f2fd', p: 1.5, borderRadius: 1, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <VerifiedUserIcon fontSize="small" color="primary" />
                <Typography variant="body2" fontWeight="medium" color="primary">
                  Member Price: {formatPrice(product?.members_price)}
                </Typography>
              </Box>
            </Box>


          </Box>
        </Paper>

        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line', mt: 6 }}>
          {product?.description}
        </Typography>
      </Container>

      {/* Floating Action Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'white',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          p: 2
        }}
      >
        <Container maxWidth="md">
          <Button
            onClick={handleAddToCart}
            variant="contained"
            fullWidth
            size="large"
            startIcon={<ShoppingCartIcon />}
            sx={{
              bgcolor: 'rgb(33,54,68)',
              '&:hover': { bgcolor: 'rgb(23,44,58)' },
              py: 1.5
            }}
          >
            Add to Cart
          </Button>
        </Container>
      </Box>

      {/*Add to Dialogs */}
      <CDialog
        title="Add to Cart"
        open={addToCartDialogOpen}
        onClose={() => setAddToCartDialogOpen(false)}
      >
        <AddToCart product={product} onClose={() => setAddToCartDialogOpen(false)} />
      </CDialog>
    </Box>
  );
};

export default ProductDetails;