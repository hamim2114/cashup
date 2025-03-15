import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import useUser from '../hook/useUser';
import CButton from '../common/CButton';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiReq from '../utils/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MainBalanceWithdraw = () => {
  const [payload, setPayload] = useState({
    amount: '',
    phone_number: '',
    method: ''
  });

  const [errors, setErrors] = useState({
    phone_number: '',
    amount: '',
    method: ''
  });

  const queryClient = useQueryClient();
  const { user } = useUser();
  const navigate = useNavigate();

  // Validate Bangladeshi phone number
  const validatePhoneNumber = (phone) => {
    const regex = /^0\d{10}$/;
    return regex.test(phone);
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { phone_number: '', amount: '', method: '' };

    if (!payload.phone_number) {
      newErrors.phone_number = 'Phone number is required.';
      isValid = false;
    } else if (!validatePhoneNumber(payload.phone_number)) {
      newErrors.phone_number = 'Phone number not Correct.';
      isValid = false;
    }

    if (!payload.amount) {
      newErrors.amount = 'Amount is required.';
      isValid = false;
    } else if (payload.amount < 100) {
      newErrors.amount = 'Minimum withdraw amount is 100 BDT.';
      isValid = false;
    }

    if (!payload.method) {
      newErrors.method = 'Payment method is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Mutation for withdrawal request
  const mutation = useMutation({
    mutationFn: (input) => apiReq.post('/withdrawal-from-main-balance/', input),
    onSuccess: (res) => {
      toast.success('Withdraw request successfully sent.');
      queryClient.invalidateQueries(['user']);
      setPayload({ amount: '', phone_number: '', method: '' });
      navigate('/main-balance-withdraw-history');
    },
    onError: (err) => {
      console.error('Withdraw Error:', err);
      toast.error(err.response?.data?.message || 'An error occurred while processing your request.');
    },
  });

  // Handle withdrawal request
  const handleRequest = () => {
    if (!validateForm()) return; // Stop if validation fails

    mutation.mutate({
      amount: Number(payload.amount),
      phone_number: payload.phone_number,
      method: payload.method
    });
  };

  return (
    <Box>
      <Typography sx={{ textAlign: 'center', color: 'green', my: 5 }} variant="h4">
        {user?.main_balance ?? 0.00} BDT
      </Typography>
      <Typography variant='body2' sx={{ mb: 2, fontSize: '14px', color: 'gray' }}>
        Minimum withdraw amount is 100 BDT.
      </Typography>

      {/* Payment Method Dropdown */}
      <FormControl fullWidth error={!!errors.method}>
        <InputLabel>Select Payment Method</InputLabel>
        <Select
          value={payload.method}
          onChange={(e) => setPayload({ ...payload, method: e.target.value })}
          label='Select Payment Method'
          sx={{ mb: 2 }}
        >
          <MenuItem value='bKash'>bKash</MenuItem>
          <MenuItem value='Nagad'>Nagad</MenuItem>
          <MenuItem value='Rocket'>Rocket</MenuItem>
        </Select>
        {errors.method && <Typography variant="body2" color="error">{errors.method}</Typography>}
      </FormControl>

      {/* Phone Number Input */}
      <TextField
        type='text'
        name='phone_number'
        value={payload.phone_number}
        onChange={(e) => setPayload({ ...payload, phone_number: e.target.value })}
        sx={{ mb: 2 }}
        fullWidth
        label='Phone Number'
        error={!!errors.phone_number}
        helperText={errors.phone_number}
      />

      {/* Amount Input */}
      <TextField
        type='number'
        name='amount'
        value={payload.amount}
        onChange={(e) => setPayload({ ...payload, amount: e.target.value })}
        sx={{ mb: 2 }}
        fullWidth
        label='Amount'
        error={!!errors.amount}
        helperText={errors.amount}
      />

      {/* Submit Button */}
      <CButton
        disabled={user?.main_balance === '0.00' || mutation.isPending}
        loading={mutation.isPending}
        onClick={handleRequest}
        variant='contained'
        style={{ width: '100%' }}
      >
        Request for Withdraw
      </CButton>
    </Box>
  );
};

export default MainBalanceWithdraw;