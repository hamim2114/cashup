import { Avatar, Box, Button, DialogActions, FormControl, FormControlLabel, FormLabel, ListItem, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import CButton from '../../common/CButton'
import useUser from '../../hook/useUser'
import apiReq from '../../utils/axiosInstance'

const EditProfile = ({ onClose }) => {
  const [file, setFile] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    date_of_birth: "",
    // gender: "",
    address: "",
    // buyer_image: null,
  })

  const { user } = useUser()
  console.log(user)

  const queryClient = useQueryClient();

  const editProfileMutation = useMutation({
    mutationFn: (input) => apiReq.put('/update-profile/', input),
    onSuccess: (res) => {
      console.log(res)
      toast.success("Profile Updated Successfully");
      onClose()
      queryClient.invalidateQueries('user');
    },
    onError: (err) => {
      console.log(" Edit Profile Error:", err);
      if (err.response.data.non_field_errors) {
        toast.error(err.response.data.non_field_errors[0]);
      }
      // if (err.response?.data) {
      //   setErrorMessages(err.response.data);
      // } else {
      //   toast.error("An unknown error occurred.");
      // }
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    editProfileMutation.mutate(formData);
  }

  useEffect(() => {
    setFormData({
      name: user?.name,
      phone_number: user?.phone_number ?? '',
      date_of_birth: user?.date_of_birth ?? '',
      // gender: user?.gender ?? '',
      address: user?.address ?? '',
      buyer_image: user?.buyer_image ?? null,
    })
  }, [user])


  return (
    <Stack spacing={2}>
      <Avatar src={file ? URL.createObjectURL(file) : ''} sx={{ width: '60px', height: '60px', mr: 2 }} />
      <input style={{ marginBottom: '10px' }} onChange={(e) => setFile(e.target.files[0])} type="file" name="" id="" />
      <form className='flex flex-col gap-5' onSubmit={handleUpdate}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phone_number"
          value={formData.phone_number}
          // value={formData.first_name}
          onChange={handleChange}
          required
        />
        {/* <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
            <FormControlLabel value="M" control={<Radio />} label="Male" />
            <FormControlLabel value="F" control={<Radio />} label="Female" />
            <FormControlLabel value="O" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl> */}
        <TextField
          fullWidth
          label="Date of Birth"
          name="date_of_birth"
          type='date'
          InputLabelProps={{ shrink: true }}
          value={formData.date_of_birth}
          onChange={handleChange}
          required
        // error={!!errorMessages.date_of_birth}
        // helperText={errorMessages.date_of_birth?.[0] || ""}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        // error={!!errorMessages.date_of_birth}
        // helperText={errorMessages.date_of_birth?.[0] || ""}
        />

        <CButton type='submit' loading={editProfileMutation.isPending} variant="contained" color="primary">Update</CButton>
      </form>

    </Stack>
  )
}

export default EditProfile