import { Box, Button, TextField, Typography } from '@mui/material'
import useUser from '../../../../hook/useUser'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiReq from '../../../../utils/axiosInstance';
import toast from 'react-hot-toast';
import { useState } from 'react';
import CButton from '../../../../common/CButton';

const CashupOwingBalance = () => {
  const [amount, setAmount] = useState('')
  const [errMsg, setErrMsg] = useState({})

  const queryClient = useQueryClient()

  const { data: cashupBalance } = useQuery({
    queryKey: ['cashupOwingDeposit'],
    queryFn: () => apiReq.get('/api/cashup-owing-deposit/',)
  })



  const mutation = useMutation({
    mutationFn: (input) => apiReq.post('/api/transfer-to-cashup-owing-dps/', input),
    onSuccess: (res) => {
      console.log(res)
      toast.success("Successfully Transfered");
      queryClient.invalidateQueries(['cashupOwingDeposit'])
      setAmount('')
    },
    onError: (err) => {
      console.log(err)
      setErrMsg(err)
      if (err.error) toast.error(err.error)
    },
  });

  const handleInput = (e) => {
    const value = e.target.value;
    if (value > 0) {
      setAmount(value)
    }
  }

  const handleSave = () => {
    if (amount == 0) return setErrMsg({ amount: 'Amount Required' })
    if (amount < 100) return setErrMsg({ amount: 'Minimum amount 100 BDT' })
    mutation.mutate({ amount: Number(amount) })
  }



  return (
    <Box>
      <Typography sx={{ textAlign: 'center', mb: 4, fontSize: '25px', color: 'green' }}>{cashupBalance?.data[0]?.cashup_owing_dps ?? "0.00"} BDT</Typography>
      <Typography sx={{ mb: 1, color: 'coral' }}>Main Owing Balance : <span style={{ fontWeight: 'bold' }}>
        {cashupBalance?.data[0]?.cashup_owing_main_balance ?? 0}</span> BDT</Typography>
      {/* <Typography sx={{ mb: 6, fontSize: '14px', color: '#fff', bgcolor: 'coral', px: 1, borderRadius: '4px', width: 'fit-content' }}>Requested Owing Amount : <span style={{ fontWeight: 'bold' }}>
        {cashupBalance?.data[0]?.requested_cashup_owing_main_balance ?? '0.00'}</span> BDT</Typography> */}
      <Typography sx={{ mb: 1, fontSize: '14px', color: 'gray' }}>minimum amount 100 BDT</Typography>
      <TextField error={Boolean(errMsg.amount)} helperText={errMsg.amount} value={amount} onChange={handleInput} sx={{ mb: 2 }} label="Amount" type='number' fullWidth />
      <CButton loading={mutation.isPending} style={{ width: '100%' }} onClick={handleSave} variant="contained">Transfer from Main Owing Balance</CButton>
    </Box>
  )
}

export default CashupOwingBalance