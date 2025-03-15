import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import DataTable from '../../common/DataTable';
import { Link, useNavigate } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const CashupProfitWithdrawHistory = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['withdrawal-from-cashup-deposit'],
    queryFn: () => apiReq.get('/withdrawal-from-cashup-deposit/')
  })

  const navigate = useNavigate()


  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      width: 120,
      renderCell: (params) => (
        <Stack height='100%' justifyContent='center'>
          <Typography sx={{ fontSize: '14px' }} >{format(params.row?.date, 'dd-MM-yyyy')}</Typography>
          <Typography sx={{ fontSize: '12px', color: 'gray' }} >{format(params.row?.date, 'hh:mm a')}</Typography>
        </Stack>
      ),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      renderCell: (params) => (
        <Stack gap={1} direction='row' alignItems='center' height='100%'>
          <Typography sx={{ color: 'green' }}>{params.row.amount} ৳</Typography>
        </Stack>
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
            color: params.row.status === 'Approved' ? 'green' : 'gray'
          }}>{params.row.status}</Typography>
          {/* <Typography sx={{ fontSize: '12px', color: params.row.paid ? 'green' : 'gray' }}>{params.row.paid ? 'Paid' : 'Unpaid'}</Typography> */}
        </Stack>
      ),
    },

  ];
  return (
    <Box >
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex  items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <div onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
          </div>

          <h1 className="text-2xl font-bold text-white">Cashup Profit Withdraw History</h1>
        </div>
      </nav>
      <Typography mx={2} mt={2} variant='body2'>Total Withdraw ({data?.data?.length})</Typography>

      <Box mx={2} mt={4}>
        <DataTable
          rows={data?.data ?? []}
          columns={columns}
          rowHeight={70}
          loading={isLoading}
        />
      </Box>
    </Box >
  )
}

export default CashupProfitWithdrawHistory