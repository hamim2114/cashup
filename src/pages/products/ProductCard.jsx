/* eslint-disable react/prop-types */
import { Add, AddCircleOutline, AddShoppingCart, Remove, RemoveCircleOutline } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, IconButton, ListItem, Stack, Typography } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import apiReq from '../../utils/axiosInstance';
import toast from 'react-hot-toast';
import CButton from '../../common/CButton';
import CDialog from '../../common/CDialog';
import AddToCart from './AddToCart';
import useUser from '../../hook/useUser';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
  const [addToCartDialogOpen, setAddToCartDialogOpen] = useState(false)

  const { user } = useUser()

  const { data: cashupBalance } = useQuery({
    queryKey: ['cashupDeposit'],
    queryFn: () => apiReq.get('/api/cashup-deposit/',)
  })
  console.log('cashupBalance', cashupBalance?.data[0]?.cashup_main_balance == "0.00")
  console.log('user', user?.main_balance)

  const handleAddToCart = () => {
    if (!user || !cashupBalance?.data) {
      Swal.fire('User or cashup balance data is not available');
      return;
    }
    const cashupData = cashupBalance.data[0];
    if (user?.main_balance === "0.00"
      //  && cashupData?.cashup_main_balance === "0.00"
    ) {
      Swal.fire('you must have to pay your cash in main balance');
      return;
    }
    setAddToCartDialogOpen(true);
  };

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={product?.item_image}
        alt='No Image'
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product?.name}
        </Typography>
        {
          product?.category &&
          <Typography sx={{ border: '1px solid lightgray', px: 1, borderRadius: '4px', width: 'fit-content' }} variant='body2' color="textSecondary" mb={1}>
            {product?.category}
          </Typography>
        }
        <Typography variant='body2' color="textSecondary" mb={1}>
          {product?.description}
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

        <Button endIcon={<AddShoppingCart />} onClick={handleAddToCart} size='small' variant="contained" fullWidth>Add To Cart</Button>

        <CDialog title='Add to Cart' open={addToCartDialogOpen} onClose={() => setAddToCartDialogOpen(false)} >
          <AddToCart product={product} onClose={() => setAddToCartDialogOpen(false)} />
        </CDialog>

      </CardContent>
    </Card>
  )
}

export default ProductCard