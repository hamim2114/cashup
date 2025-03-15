import { Box, Button, TextField, Typography } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useState } from 'react';
import apiReq from '../utils/axiosInstance';
import CButton from '../common/CButton';
import { useNavigate } from 'react-router-dom';
import useUser from '../hook/useUser';

const MainOwingBalanceReq = () => {
  const [amount, setAmount] = useState('')
  const [errMsg, setErrMsg] = useState({})


  const { user } = useUser()

  const { data: cashupBalance } = useQuery({
    queryKey: ['cashupOwingDeposit'],
    queryFn: () => apiReq.get('/api/cashup-owing-deposit/',)
  })



  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (input) => apiReq.post('/api/transfer-to-cashup-owing-deposit/', input),
    onSuccess: (res) => {
      toast.success(res.data.message);
      setAmount('')
      navigate('/main-owing-balance-deposit-history')
    },
    onError: (err) => {
      console.log(err)
      setErrMsg(err)
      if (err.error) toast.error(err.error)
    },
  });

  const handleInput = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAmount(value)
    }
  }

  const handleSave = () => {
    if (amount == 0) return setErrMsg({ amount: 'Amount Required' })
    if (amount < 100) return setErrMsg({ amount: 'Minimum amount 100 BDT' })
    mutation.mutate({ amount: Number(amount), verified: false })
  }



  return (
    <Box>
      <Typography sx={{ textAlign: 'center', fontSize: '20px' }}>Main Balance</Typography>
      <Typography sx={{ textAlign: 'center', mb: 2, fontSize: '20px', color: 'green' }}>
        {user?.main_balance ?? "0.00"} BDT</Typography>
      <Typography sx={{ textAlign: 'center', fontSize: '20px' }}>Owing Balance</Typography>
      <Typography sx={{ textAlign: 'center', mb: 4, fontSize: '20px', color: 'coral' }}>
        {cashupBalance?.data[0]?.cashup_owing_main_balance ?? "0.00"} BDT</Typography>
      <Typography sx={{ mb: 2, fontSize: '14px', color: '#fff', bgcolor: 'coral', px: 1, borderRadius: '4px', width: 'fit-content' }}>Requested Owing Amount : <span style={{ fontWeight: 'bold' }}>
        {cashupBalance?.data[0]?.requested_cashup_owing_main_balance ?? '0.00'}</span> BDT</Typography>
      <Typography sx={{ mb: 1, fontSize: '14px', color: 'gray' }}>minimum amount 100 BDT</Typography>
      <TextField error={Boolean(errMsg.amount)} helperText={errMsg.amount} value={amount} onChange={handleInput} sx={{ mb: 2 }} label="Amount" type='number' fullWidth />
      {
        user?.main_balance > 0 &&
        <Typography sx={{ mb: 2, fontSize: '14px', color: 'red', }}>You can"t  take any kinds of owing if you have main balance</Typography>
      }
      <CButton disable={user?.main_balance > 0} loading={mutation.isPending} style={{ width: '100%' }} onClick={handleSave} variant="contained">Make Request</CButton>
    </Box>
  )
}

export default MainOwingBalanceReq