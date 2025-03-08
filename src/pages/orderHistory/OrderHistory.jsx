import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import DataTable from '../../common/DataTable';
import { Link } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const OrderHistory = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['buyer-purchases'],
    queryFn: () => apiReq.get('/api/confirmed-products/')
  })

  console.log(data)

  const columns = [
    {
      field: 'Items',
      headerName: 'Item Details',
      width: 170,
      renderCell: (params) => (
        <Stack gap={1} direction='row' alignItems='center' height='100%'>
          <img style={{ width: '60px', height: 50, objectFit: 'cover' }} src={params.row.item_image} alt="" />
          <Box>
            <Typography>{params.row.item.name}</Typography>
            <Typography sx={{ color: 'coral', fontSize: '14px' }}>x{params.row.quantity}</Typography>
          </Box>
        </Stack>
      ),
    },
    {
      field: 'TotalPrice',
      headerName: 'Total Price',
      width: 100,
      renderCell: (params) => (
        <Stack gap={1} direction='row' alignItems='center' height='100%'>
          <Typography>{params.row.total_price} ৳</Typography>
        </Stack>
      ),
    },
    {
      field: 'confirmed',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Stack justifyContent='center' height='100%'>
          <Typography sx={{ fontSize: '13px', color: params.row.confirmed ? 'purple' : 'gray' }}>{params.row.confirmed ? 'Confirmed' : 'Pending'}</Typography>
          {/* <Typography sx={{ fontSize: '12px', color: params.row.paid ? 'green' : 'gray' }}>{params.row.paid ? 'Paid' : 'Unpaid'}</Typography> */}
        </Stack>
      ),
    },

  ];
  return (
    <Box >
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/profile">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>

          <h1 className="text-2xl font-bold text-white">Order History</h1>
        </div>
      </nav>
      <Typography mx={2} mt={2} variant='body2'>Total Order ({data?.data?.length})</Typography>

      <Box mx={2} mt={4}>
        <DataTable
          rows={data?.data ?? []}
          columns={columns}
          rowHeight={70}
          loading={isLoading}
          noRowsLabel='No Order Found'
        />
      </Box>
    </Box >
  )
}

export default OrderHistory