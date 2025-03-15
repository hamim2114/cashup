import { Box, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Mutation for forgot password request
  const forgotPasswordMutation = useMutation({
    mutationFn: (input) => apiReq.post('/forgot-password/', input),
    onSuccess: (res) => {
      toast.success('Password reset link sent to your email.');
      setEmail('');
      navigate('/login'); // Redirect to login page
    },
    onError: (err) => {
      console.error('Forgot Password Error:', err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    forgotPasswordMutation.mutate({ email });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
        Forgot Password
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Enter your email address, and we'll send you a link to reset your password.
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <TextField
          fullWidth
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
          error={!!error}
          helperText={error}
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={forgotPasswordMutation.isPending}
          sx={{ mt: 2 }}
        >
          {forgotPasswordMutation.isPending ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>

      {/* Back to Login Link */}
      <Typography variant="body2" sx={{ mt: 3 }}>
        Remember your password?{' '}
        <Button onClick={() => navigate('/login')} color="primary">
          Login
        </Button>
      </Typography>
    </Box>
  );
};

export default ForgotPassword;