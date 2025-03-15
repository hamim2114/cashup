import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CButton from '../../../../common/CButton'
import apiReq from '../../../../utils/axiosInstance'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const ProfitWithdraw = ({ cashupBalance }) => {
  const [amount, setAmount] = useState('')

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (input) => apiReq.post('/withdrawal-from-cashup-deposit/', input),
    onSuccess: (res) => {
      console.log(res)
      toast.success('Withdraw request successfully Send');
      queryClient.invalidateQueries(['cashupDeposit'])
      setAmount('')
      navigate('/cashup-withdraw-history')
    },
    onError: (err) => {
      console.log(err)
    },
  });

  const allBalance = cashupBalance?.data[0];
  const totalBalance = Number(allBalance?.daily_profit) + Number(allBalance?.monthly_profit);

  const handleRequest = () => {

    if (amount < 100) {
      return toast.error("Minimum withdraw amount is 100 BDT");
    }

    if (amount > totalBalance) {
      return toast.error("You can't withdraw more than your total balance");
    }

    mutation.mutate({ amount: Number(amount) });
  };

  return (
    <Box>
      <Typography
        sx={{ textAlign: 'center', fontSize: '25px', color: 'purple' }}
      >
        WithDraw : {' '}
        <span style={{ textAlign: 'center', fontSize: '25px', color: 'green' }}>
          {cashupBalance?.data[0]?.withdraw} BDT
        </span>
      </Typography>

      <Stack direction='row' justifyContent='center' mt={1}>
        <Link className='text-blue-500' to='/cashup-profit-withdraw-history'>See Full History</Link>
      </Stack>

      <Typography sx={{ mt: 4 }}>Cashup Balance : <span style={{ color: 'purple' }}>{allBalance?.cashup_main_balance ?? "0.00"} BDT</span> </Typography>
      <Typography >Daily Profit : <span style={{ color: 'green' }}>{allBalance?.daily_profit ?? "0.00"} BDT</span> </Typography>
      <Typography >Monthly Profit : <span style={{ color: 'green' }}>{allBalance?.monthly_profit ?? "0.00"} BDT</span> </Typography>

      <Typography variant='body2' sx={{ mt: 2, mb: 1, border: '1px solid lightgray', borderRadius: '50px', px: 2, width: 'fit-content', py: 1, mx: 'auto', color: 'gray', fontSize: '14px' }}>Total withdrawable amount <span style={{ color: 'green' }}>{totalBalance} BDT</span> </Typography>

      <Typography variant='body2' sx={{ mt: 2, mb: 1, fontSize: '14px', color: 'gray' }}>minimum withdraw amount 100 BDT</Typography>


      <TextField type='number' value={amount} onChange={e => setAmount(e.target.value)} sx={{ mb: 2 }} fullWidth label='Amount' />
      <CButton loading={mutation.isPending} onClick={handleRequest} variant='contained' style={{ width: '100%' }}>
        Request for Withdraw
      </CButton>
    </Box>
  )
}

export default ProfitWithdraw