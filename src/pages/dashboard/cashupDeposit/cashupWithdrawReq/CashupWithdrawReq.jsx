import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CButton from '../../../../common/CButton'
import apiReq from '../../../../utils/axiosInstance'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const CashupWithdrawReq = ({ cashupBalance }) => {
  const [amount, setAmount] = useState('')

  const queryClient = useQueryClient()

  const navigate = useNavigate()
  console.log(cashupBalance)
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

  const handleRequest = () => {
    if (amount < 100) return toast.error("Minimum withdraw amount 100 BDT")
    mutation.mutate({
      amount: Number(amount)
    })
  }

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
        <Link className='text-blue-500' to='/cashup-withdraw-history'>See Full History</Link>
      </Stack>

      <Typography sx={{ mt: 4 }}>Cashup Balance : <span style={{ color: 'green' }}>{cashupBalance?.data[0]?.cashup_main_balance ?? "0.00"} BDT</span> </Typography>
      <Typography >Daily Profit : <span style={{ color: 'green' }}>{cashupBalance?.data[0]?.daily_profit ?? "0.00"} BDT</span> </Typography>
      <Typography >Monthly Profit : <span style={{ color: 'green' }}>{cashupBalance?.data[0]?.monthly_profit ?? "0.00"} BDT</span> </Typography>

      <Typography variant='body2' sx={{ mt: 2, mb: 1, fontSize: '14px', color: 'gray' }}>minimum withdraw amount 100 BDT</Typography>

      <TextField value={amount} onChange={e => setAmount(e.target.value)} sx={{ mb: 2 }} fullWidth label='Amount' />
      <CButton loading={mutation.isPending} onClick={handleRequest} variant='contained' style={{ width: '100%' }}>
        Request for Withdraw
      </CButton>
    </Box>
  )
}

export default CashupWithdrawReq