/* eslint-disable react/prop-types */
import { Add, AddCircleOutline, Remove, RemoveCircleOutline } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, IconButton, ListItem, Stack, Typography } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import apiReq from '../../utils/axiosInstance';
import toast from 'react-hot-toast';
import CButton from '../../common/CButton';
import useUser from '../../hook/useUser';

const AddToCart = ({ product, onClose }) => {
  const [productData, setProductData] = useState({
    item: product.id,
    quantity: 1,
    confirmed: false
  })

  const { user } = useUser()

  const queryClient = useQueryClient()

  const handleQuantity = (type) => {
    if (type === 'add') {
      setProductData({ ...productData, quantity: productData.quantity + 1 })
    } else {
      if (productData.quantity > 1) {
        setProductData({ ...productData, quantity: productData.quantity - 1 })
      }
    }
  }

  const addToCartMutation = useMutation({
    mutationFn: (input) => apiReq.post('/purchase/', input),
    onSuccess: (res) => {
      queryClient.invalidateQueries(['carted-products'])
      toast.success(" Added to cart successfully");
      onClose()
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleAddToCart = () => {
    addToCartMutation.mutate(productData);
  }

  return (
    <Card sx={{ boxShadow: 0, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={product?.item_image}
        alt={'No Image'}
      />
      <Box >
        <Typography variant="h6" fontWeight="bold">
          {product?.name}
        </Typography>
        <Typography color="textSecondary" mb={1}>
          Category: {product?.category}
        </Typography>
        <Stack mb={2} direction='row' justifyContent='space-between'>
          <Box flex={1} display="flex" alignItems="center" gap={1}>
            <Typography color="green" fontWeight="bold">
              ৳ {product?.price}
            </Typography>
            <Typography color="textSecondary" sx={{ textDecoration: "line-through" }}>
              ৳ {product?.discount_rate}
            </Typography>
          </Box>
          {
            user?.membership_status ?
              <Box sx={{ border: '1px solid purple', p: 1, borderRadius: '8px', width: 'fit-content' }} flex={1}>
                <Typography sx={{ fontSize: '12px', color: 'purple', lineHeight: '13px', mb: 1 }}>Congratulation! you got membership price.</Typography>
                <Typography sx={{ color: 'purple' }} fontSize={14}>
                  Member: ৳ {product.members_price}
                </Typography>
              </Box> :
              <Typography sx={{ color: 'purple', fontWeight: 600 }} fontSize={14}>
                Member: ৳ {product.members_price}
              </Typography>
          }
        </Stack>
        <Stack direction='row' alignItems={'center'} gap={2}>
          <Stack direction='row' alignItems={'center'} gap={1}>
            <IconButton onClick={() => handleQuantity('remove')} sx={{ width: '20px', height: '20px' }}>
              <RemoveCircleOutline />
            </IconButton>
            <Typography>{productData.quantity}</Typography>
            <IconButton onClick={() => handleQuantity('add')} sx={{ width: '20px', height: '20px' }}>
              <AddCircleOutline />
            </IconButton>
          </Stack>
          <CButton loading={addToCartMutation.isPending} onClick={handleAddToCart} size='small' variant="contained" fullWidth>Add</CButton>
        </Stack>
      </Box >
    </Card >
  )
}

export default AddToCart