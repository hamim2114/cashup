import { Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import CButton from '../../common/CButton';
import apiReq from '../../utils/axiosInstance';
import { useMutation } from "@tanstack/react-query";

const AddDeposit = ({ method, closeDialog }) => {
  const [errMsg, setErrMsg] = useState({})
  const [formData, setFormData] = useState({
    phone_number: "",
    amount: "",
    method: method,
    transaction_id: "",
  });

  const depositMutation = useMutation({
    mutationFn: (input) => apiReq.post('/buyer_transactions/', input),
    onSuccess: (res) => {
      toast.success(" Successfully send Deposit Request ");
      closeDialog()
    },
    onError: (err) => {
      console.log("deposit Error:", err);
      if (err) {
        setErrMsg(err);
      } else {
        toast.error("An unknown error occurred.");
      }
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    depositMutation.mutate(formData);
  };



  return (
    <Box>
      {
        method == 'Cashup' ?
          <Box>
            <Typography sx={{ textAlign: 'center', mb: 4, fontSize: '25px', color: 'coral' }}>Deposit Via Cashup</Typography>
            <Typography sx={{ border: '1px solid lightgray', textAlign: 'center', p: 2, borderRadius: '8px', bgcolor: 'coral', color: '#fff' }}>Please Contact The Office</Typography>
          </Box>
          :
          <Box>
            <Typography sx={{ textAlign: 'center', mb: 1, fontSize: '18px', color: 'green' }}>Please make {method} send money </Typography>
            <Typography sx={{ textAlign: 'center', border: '1px solid coral', p: 2, bgcolor: '#ffefea', borderRadius: '8px', mb: 4, fontSize: '18px', color: 'coral' }}>
              {method === 'Bkash' ? '01316141148' : method === 'Rocket' ? '013161411484' : method === 'Nagad' ? '01316141148' : ''}
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                type="number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                label={`Enter Your ${method} Number`}
                required
              />
              <TextField
                fullWidth
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                label="Enter Deposit Amount"
                required
              />
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                name="method"
                value={formData.method}
                onChange={handleChange}
                label="Method"
                required
              />
              <TextField
                fullWidth
                name="transaction_id"
                value={formData.transaction_id}
                onChange={handleChange}
                label="Enter Transection ID"
                required
                error={Boolean(errMsg?.transaction_id)}
                helperText={errMsg?.transaction_id}
              />
              <CButton loading={depositMutation.isPending} type='submit' style={{ width: '100%' }} variant="contained">Deposit</CButton>
            </form>
          </Box>
      }
    </Box>
  )
}

export default AddDeposit