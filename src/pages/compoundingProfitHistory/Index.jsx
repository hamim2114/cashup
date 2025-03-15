import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import DataTable from '../../common/DataTable';
import { Link, useNavigate } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const CompoundingProfitHistory = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cashup-profit-history'],
    queryFn: () => apiReq.get('/compounding-profit-history/')
  })


  const navigate = useNavigate()

  const columns = [
    {
      field: 'Info',
      headerName: 'Info',
      width: 160,
      renderCell: (params) => (
        <Stack height='100%' justifyContent={'center'}>
          <Typography sx={{ fontSize: '14px' }} >
            {format(params.row?.change_timestamp, 'dd-MM-yyyy')}
            <span style={{ fontSize: '12px', color: 'gray', marginLeft: '5px' }}>{format(params.row?.change_timestamp, 'hh:mm a')}</span>
          </Typography>
          <Typography sx={{ fontSize: '10px', border: '1px solid lightgray', px: 1, width: 'fit-content', borderRadius: '4px', color: 'green' }}>{params.row.field_name}</Typography>
        </Stack>
      ),
    },
    {
      field: 'New Amount',
      headerName: 'New Amount',
      width: 130,
      renderCell: (params) => (
        <Stack gap={1} direction='row' alignItems='center' height='100%'>
          <Typography sx={{ color: 'purple' }}>{params.row.new_value} <span className='text-gray-600'>৳</span></Typography>
        </Stack>
      ),
    },
    {
      field: 'Previous Amount',
      headerName: 'Previous Amount',
      width: 150,
      renderCell: (params) => (
        <Stack gap={1} direction='row' alignItems='center' height='100%'>
          <Typography >{params.row.previous_value} <span className='text-gray-600'>৳</span></Typography>
        </Stack>
      ),
    },


  ];
  return (
    <Box >
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <div onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
          </div>

          <h1 className="text-2xl font-bold text-white">Compounding Profit History</h1>
        </div>
      </nav>
      {/* <Typography mx={2} mt={2} variant='body2'>Total Profit ({data?.data?.length})</Typography> */}

      <Box mx={2} mt={4}>
        <DataTable
          rows={data?.data ?? []}
          columns={columns}
          rowHeight={70}
          loading={isLoading}
          getRowId={(row) => Math.random()}
        />
      </Box>
    </Box >
  )
}

export default CompoundingProfitHistory