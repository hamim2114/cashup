import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  TextField, Button, Radio, FormControl, FormControlLabel,
  FormLabel, RadioGroup, Paper, Typography, Box, Avatar,
  IconButton
} from "@mui/material";
import authLogo from "../../assets/logo.png";
import apiReq from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import CButton from "../../common/CButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    phone_number: "",
    name: "",
    date_of_birth: "",
    gender: "M",
    password: "",
    confirm_password: "",
    referral_code: ""
  });
  const [errorMessages, setErrorMessages] = useState({}); // Store error messages

  const navigate = useNavigate();

  const regMutation = useMutation({
    mutationFn: (input) => apiReq.post('/api/register/', input),
    onSuccess: (res) => {
      console.log(res);
      toast.success("Registration Successful");
      setErrorMessages({});
      setFormData({
        phone_number: "",
        name: "",
        date_of_birth: "",
        password: "",
        confirm_password: "",
        referral_code: ""
      });
      navigate('/login');
    },
    onError: (err) => {
      console.log("Register Error:", err);
      setErrorMessages(err);
      if (err) {
        toast.error(err.non_field_errors[0]);
      } else {
        toast.error("An unknown error occurred.");
      }
    },
  });

  const validatePhoneNumber = (phone) => {
    const regex = /^0\d{10}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone_number") {
      if (!validatePhoneNumber(value)) {
        setErrorMessages((prev) => ({ ...prev, phone_number: ["Please type valid Phone number"] }));
      } else {
        setErrorMessages((prev) => ({ ...prev, phone_number: "" }));
      }
    }
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phone_number)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (formData.password !== formData.confirm_password) {
      setErrorMessages((prev) => ({ ...prev, confirm_password: "Passwords do not match" }));
      return;
    }
    if (formData.password.length < 6) {
      setErrorMessages((prev) => ({ ...prev, password: ["Password must be at least 6 characters long"] }));
      return;
    }
    regMutation.mutate(formData);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="grey.100">
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%", textAlign: "center" }}>
        <Avatar src={authLogo} sx={{ width: 250, borderRadius: 0, height: 100, mx: "auto", mb: 6 }} />

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="number"
            margin="normal"
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            error={!!errorMessages.phone_number}
            helperText={errorMessages.phone_number?.[0] || ""}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={!!errorMessages.name}
            helperText={errorMessages.name?.[0] || ""}
          />

          <TextField
            fullWidth
            margin="normal"
            type="date"
            label="Date of Birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true
              },
              htmlInput: {
                max: "2007-12-31"
              }
            }}
            required
            error={!!errorMessages.date_of_birth}
            helperText={errorMessages.date_of_birth?.[0] || ""}
          />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
              <FormControlLabel value="O" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            margin="normal"
            type='number'
            label="Pin Code"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            error={!!errorMessages.password}
            helperText={errorMessages.password?.[0] || ""}
          />
          <TextField
            fullWidth
            margin="normal"
            type='number'
            label="Confirm Pin Code"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
            error={!!errorMessages.confirm_password}
            helperText={errorMessages.confirm_password || ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Have Refer Code?"
            name="referral_code"
            value={formData.referral_code}
            onChange={handleChange}
            error={!!errorMessages.referral_code}
            helperText={errorMessages.referral_code?.[0] || ""}
          />

          <CButton loading={regMutation.isPending} type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register Account
          </CButton>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Have an account?
        </Typography>
        <Link style={{ color: 'blue' }} to="/login">Login Now</Link>
      </Paper>
    </Box>
  );
}

export default Register;