import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';
import CButton from '../../common/CButton';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { current_password: '', new_password: '', confirm_password: '' };

    if (!formData.current_password) {
      newErrors.current_password = 'Current password is required.';
      isValid = false;
    }

    if (!formData.new_password) {
      newErrors.new_password = 'New password is required.';
      isValid = false;
    } else if (formData.new_password.length < 6) {
      newErrors.new_password = 'New password must be at least 6 characters long.';
      isValid = false;
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = 'Confirm password is required.';
      isValid = false;
    } else if (formData.new_password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Mutation for password change
  const passwordChangeMutation = useMutation({
    mutationFn: (input) => apiReq.post('/change-password/', input),
    onSuccess: (res) => {
      toast.success('Password changed successfully.');
      setFormData({ current_password: '', new_password: '', confirm_password: '' });
      // navigate('/profile'); // Redirect to profile or another page
    },
    onError: (err) => {
      console.error('Password Change Error:', err);
      if (err.response?.data?.current_password) {
        setErrors((prev) => ({ ...prev, current_password: err.response.data.current_password[0] }));
      } else {
        toast.error(err.response?.data?.message || 'An error occurred while changing the password.');
      }
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    passwordChangeMutation.mutate({
      current_password: formData.current_password,
      new_password: formData.new_password,
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on input change
  };

  return (
    <Box >


      <form onSubmit={handleSubmit}>
        {/* Current Password Field */}
        <TextField
          fullWidth
          type="number"
          name="current_password"
          label="Current Password"
          value={formData.current_password}
          onChange={handleChange}
          sx={{ mb: 2 }}
          error={!!errors.current_password}
          helperText={errors.current_password}
          required
        />

        {/* New Password Field */}
        <TextField
          fullWidth
          type="number"
          name="new_password"
          label="New Password"
          value={formData.new_password}
          onChange={handleChange}
          sx={{ mb: 2 }}
          error={!!errors.new_password}
          helperText={errors.new_password}
          required
        />

        {/* Confirm Password Field */}
        <TextField
          fullWidth
          type="number"
          name="confirm_password"
          label="Confirm New Password"
          value={formData.confirm_password}
          onChange={handleChange}
          sx={{ mb: 2 }}
          error={!!errors.confirm_password}
          helperText={errors.confirm_password}
          required
        />

        {/* Submit Button */}
        <CButton
          type="submit"
          variant="contained"
          fullWidth
          loading={passwordChangeMutation.isPending}
          sx={{ mt: 2 }}
        >
          Change Password
        </CButton>
      </form>
    </Box>
  );
};

export default ChangePassword;