import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CButton from '../../../../common/CButton'
import apiReq from '../../../../utils/axiosInstance'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const CompoundingWithdraw = ({ cashupBalance }) => {
  const [amount, setAmount] = useState('')


  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (input) => apiReq.post('/withdrawal-from-compounding-profit/', input),
    onSuccess: (res) => {
      toast.success('Withdraw request successfully Send');
      navigate('/compounding-withdraw-history')
    },
    onError: (err) => {
      console.log(err)
    },
  });


  const allBalance = cashupBalance?.data[0];
  const totalBalance = Number(allBalance?.compounding_profit) + Number(allBalance?.daily_compounding_profit) + Number(allBalance?.monthly_compounding_profit);


  const handleRequest = () => {
    if (amount < 100) {
      return toast.error("Minimum withdraw amount is 100 BDT");
    }

    // if (amount > totalBalance) {
    //   return toast.error("You can't withdraw more than your total balance");
    // }
    mutation.mutate({
      amount: Number(amount)
    })
  }


  return (
    <Box>
      <Typography
        sx={{ textAlign: 'center', mb: 1, fontSize: '25px', color: 'purple' }}
      >
        Compounding WithDraw : {' '}
      </Typography>
      <Typography style={{ textAlign: 'center', fontSize: '25px', color: 'green' }}>
        {cashupBalance?.data[0]?.compounding_withdraw} BDT
      </Typography>

      <Stack direction='row' justifyContent='center' mt={1}>
        <Link className='text-blue-500' to='/compounding-withdraw-history'>See Full History</Link>
      </Stack>
      <Typography sx={{ mt: 4 }}>Compounding Profit : <span style={{ color: 'green' }}>{allBalance?.compounding_profit ?? "0.00"} BDT</span> </Typography>
      <Typography >Daily Compounding Profit : <span style={{ color: 'green' }}>{allBalance?.daily_compounding_profit ?? "0.00"} BDT</span> </Typography>
      <Typography >Monthly Compounding Profit : <span style={{ color: 'green' }}>{allBalance?.monthly_compounding_profit ?? "0.00"} BDT</span> </Typography>

      {/* <Typography variant='body2' sx={{ mt: 2, mb: 1, border: '1px solid lightgray', borderRadius: '50px', px: 2, width: 'fit-content', py: 1, mx: 'auto', color: 'gray', fontSize: '14px' }}>Total withdrawable amount <span style={{ color: 'green' }}>{totalBalance} BDT</span> </Typography> */}

      <Typography variant='body2' sx={{ mt: 2, mb: 1, fontSize: '14px', color: 'gray' }}>minimum withdraw amount 100 BDT</Typography>


      <TextField type='number' value={amount} onChange={e => setAmount(e.target.value)} sx={{ mb: 2 }} fullWidth label='Amount' />
      <CButton loading={mutation.isPending} onClick={handleRequest} variant='contained' style={{ width: '100%' }}>
        Request for Withdraw
      </CButton>
    </Box>
  )
}

export default CompoundingWithdraw