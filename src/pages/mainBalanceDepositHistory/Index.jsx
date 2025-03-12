import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import DataTable from '../../common/DataTable';
import { Link, useNavigate } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { format } from "date-fns";
import { Call } from '@mui/icons-material';

const MainBalanceDepositHistory = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['buyer_transactions'],
    queryFn: () => apiReq.get('/buyer_transactions/')
  })
  console.log(data)
  const navigate = useNavigate()

  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      width: 120,
      renderCell: (params) => (
        <Stack height='100%' justifyContent='center'>
          <Typography sx={{ fontSize: '14px' }}>{format(params.row?.date, 'dd-MM-yyyy')}</Typography>
          <Typography sx={{ fontSize: '12px', color: 'gray' }} >{format(params.row?.date, 'hh:mm a')}</Typography>
        </Stack>
      ),
    },
    {
      field: 'number',
      headerName: 'Number',
      width: 140,
      renderCell: (params) => (
        <Stack gap={.5} justifyContent='center' height='100%'>
          <Typography > {params.row.phone_number}</Typography>
          <Typography sx={{ width: 'fit-content', fontSize: '11px', border: '1px solid purple', px: 1, borderRadius: '4px', color: 'purple' }} > {params.row.method}</Typography >
        </Stack>
      ),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 120,
      renderCell: (params) => (
        <Stack gap={1} direction='row' alignItems='center' height='100%'>
          <Typography sx={{ color: 'green' }}>{params.row.amount} ৳</Typography>
        </Stack>
      ),
    },

    {
      field: 'Transection ID',
      headerName: 'Transection ID',
      width: 120,
      renderCell: (params) => (
        <Stack>
          <Typography sx={{ color: 'gray' }} variant='body' ># {params.row.transaction_id}</Typography >
        </Stack >
      ),
    },
    {
      field: 'status',
      headerName: 'status',
      width: 100,
      renderCell: (params) => (
        <Stack justifyContent='center' height='100%'>
          <Typography sx={{
            fontSize: '13px',
            color: '#fff',
            width: 'fit-content',
            borderRadius: '4px',
            px: 1,
            bgcolor: params.row.verified ? 'green' : 'darkgray'
          }}>{params.row.verified ? 'Verified' : 'Unverified'}</Typography>
        </Stack>
      ),
    },

  ];
  return (
    <Box >
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <div onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
          </div>

          <h1 className="text-2xl font-bold text-white">Main Balance Deposit History</h1>
        </div>
      </nav>
      <Typography mx={2} mt={2} variant='body2'>Total Deposit ({data?.data?.length})</Typography>

      <Box mx={2} mt={4}>
        <DataTable
          rows={data?.data || []}
          columns={columns}
          getRowId={(row) => Math.random()}
          rowHeight={70}
          loading={isLoading}
        />
      </Box>
    </Box >
  )
}

export default MainBalanceDepositHistory