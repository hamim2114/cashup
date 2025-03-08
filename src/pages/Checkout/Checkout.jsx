import { ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import apiReq from '../../utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import CButton from '../../common/CButton';

const Checkout = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal_code: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate()

  const submitMutation = useMutation({
    mutationFn: (data) => apiReq.post('/api/checkout-details/', data),
    onSuccess: (res) => {
      console.log(res);
      toast.success("Order placed successfully!");
      navigate('/order-history')
      onClose();
    },
    onError: (err) => {
      console.log(err);
      if (err.detail) {
        toast.error(err.detail)
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div>
      <div className="max-w-xl mx-auto bg-white rounded-lg ">

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="postal_code">
              Postal Code
            </label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <CButton
            loading={submitMutation.isPending}
            type="submit"
            variant='contained'
            style={{ width: '100%' }}
          >
            Place Order
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default Checkout;