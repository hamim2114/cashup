import { Box, TextField, Typography } from '@mui/material';
import useUser from '../hook/useUser';
import CButton from '../common/CButton';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiReq from '../utils/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MainBalanceWithdraw = () => {
  const [amount, setAmount] = useState('')

  const queryClient = useQueryClient()
  const { user } = useUser();

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (input) => apiReq.post('/withdrawal-from-main-balance/', input),
    onSuccess: (res) => {
      console.log(res)
      toast.success('Withdraw request successfully Send');
      queryClient.invalidateQueries(['user'])
      setAmount('')
      navigate('/main-balance-withdraw-history')
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
      <Typography sx={{ textAlign: 'center', color: 'green', my: 5 }} variant="h4">{user?.main_balance ?? 0.00} BDT</Typography>
      <Typography variant='body2' sx={{ mb: 2, fontSize: '14px', color: 'gray' }}>মিনিমাম উইথড্র পরিমাণ ১০০ টাকা</Typography>

      <TextField value={amount} onChange={e => setAmount(e.target.value)} sx={{ mb: 2 }} fullWidth label='Withdraw Request' />
      <CButton disable={user?.main_balance === '0.00'} loading={mutation.isPending} onClick={handleRequest} variant='contained' style={{ width: '100%' }}>
        Request for Withdraw
      </CButton>
    </Box>
  )
}

export default MainBalanceWithdraw;