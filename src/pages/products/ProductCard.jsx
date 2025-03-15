/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Chip,
  Stack,
  Divider,
  Badge
} from '@mui/material';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  Info,
  LocalOffer,
  Verified,
  Visibility
} from '@mui/icons-material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiReq from '../../utils/axiosInstance';
import toast from 'react-hot-toast';
import CButton from '../../common/CButton';
import CDialog from '../../common/CDialog';
import AddToCart from './AddToCart';
import useUser from '../../hook/useUser';
import Swal from 'sweetalert2';
import ProductDetails from './ProductDetails';

const ProductCard = ({ product }) => {
  const [addToCartDialogOpen, setAddToCartDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { user } = useUser();

  // Calculate discount percentage
  const calculateDiscount = () => {
    const regularPrice = parseFloat(product?.price || 0);
    const discountPrice = parseFloat(product?.discount_price || 0);
    if (regularPrice && discountPrice && regularPrice > discountPrice) {
      return Math.round(((regularPrice - discountPrice) / regularPrice) * 100);
    }
    return 0;
  };

  const discountPercentage = calculateDiscount();

  // Fetch cashup balance data
  const { data: cashupBalance } = useQuery({
    queryKey: ['cashupDeposit'],
    queryFn: () => apiReq.get('/api/cashup-deposit/')
  });

  const handleAddToCart = () => {
    if (!user || !cashupBalance?.data) {
      Swal.fire('User or cashup balance data is not available');
      return;
    }

    if (user?.main_balance === "0.00") {
      Swal.fire('You must have to pay your cash in main balance');
      return;
    }

    setAddToCartDialogOpen(true);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Add logic to save to favorites
  };

  const openDetails = () => {
    setDetailsDialogOpen(true);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >

      {/* Favorite button */}
      {/* <IconButton
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          zIndex: 1,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)'
          },
          width: 36,
          height: 36
        }}
        onClick={toggleFavorite}
      >
        {isFavorite ? (
          <Favorite fontSize="small" sx={{ color: '#e91e63' }} />
        ) : (
          <FavoriteBorder fontSize="small" sx={{ color: '#757575' }} />
        )}
      </IconButton> */}

      {/* Product image */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          onClick={openDetails}
          component="img"
          height={180}
          image={product?.item_image || 'https://via.placeholder.com/300x180?text=No+Image'}
          alt={product?.name || 'Product'}
          sx={{
            cursor: 'pointer',
            objectFit: 'contain',
            backgroundColor: '#f5f5f5',
          }}
        />
        <Info
          onClick={openDetails}
          sx={{
            position: 'absolute',
            top: 1,
            left: 1,
            color: 'primary.main'
          }}
        >
          View Details
        </Info>
      </Box>

      {/* Product content */}
      <Box
        sx={{
          p: 1,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Product category */}
        {product?.category && (
          <Chip
            label={product.category}
            size="small"
            sx={{
              alignSelf: 'flex-start',
              mb: 1,
              bgcolor: '#e0f2f1',
              color: '#00695c',
              fontSize: '0.7rem'
            }}
          />
        )}

        {/* Product title */}
        <Typography
          sx={{
            fontSize: '0.9rem',
            lineHeight: 1.3,
            mb: 1.5
          }}
        >
          {product?.name || 'Product Name'}
        </Typography>

        <Box >
          {/* Price section */}
          <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="primary"
            >
              ৳{product?.discount_price || '0'}
            </Typography>
            {parseFloat(product?.price) > parseFloat(product?.discount_price) && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: 'line-through' }}
              >
                ৳{product?.price || '0'}
              </Typography>
            )}
          </Stack>

          {/* Member price */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1.5,
              p: 0.75,
              bgcolor: '#ede7f6',
              borderRadius: 1
            }}
          >
            <Verified fontSize="small" sx={{ color: '#5e35b1', mr: 0.5, fontSize: '0.85rem' }} />
            <Typography variant="caption" fontWeight="medium" color="#5e35b1">
              Member Price: ৳{product?.members_price || '0'}
            </Typography>
          </Box>

          {/* Add to cart button */}
          <Button
            size='small'
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCart />}
            onClick={handleAddToCart}
            sx={{
              bgcolor: 'rgb(33, 54, 68)',
              '&:hover': {
                bgcolor: 'rgb(23, 44, 58)'
              },
              borderRadius: 1.5,
              py: 1
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>

      {/*Add to Dialogs */}
      <CDialog
        title="Add to Cart"
        open={addToCartDialogOpen}
        onClose={() => setAddToCartDialogOpen(false)}
      >
        <AddToCart product={product} onClose={() => setAddToCartDialogOpen(false)} />
      </CDialog>

      {/* product details */}
      <CDialog
        title='Product Details'
        fullScreen
        open={detailsDialogOpen}
        onClose={() => setDetailsDialogOpen(false)}
      >
        <ProductDetails product={product} />
      </CDialog>
    </Card>
  );
};

export default ProductCard;