import { Link } from "react-router-dom";
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
import useAuth from "../../hook/useAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });

  const { setToken } = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginMutation = useMutation({
    mutationFn: (input) => apiReq.post('/api/login/', input),
    onSuccess: (res) => {
      toast.success("Login successful");
      setToken(res.data.tokens.access);
    },
    onError: (err) => {
      console.log('login err', err)
      if (err) {
        toast.error(err.non_field_errors[0]);
      } else {
        toast.error("An unknown error occurred.");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };




  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="grey.100">
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%", textAlign: "center" }}>
        <Avatar src={authLogo} sx={{ width: 120, height: 100, mx: "auto", mb: 2 }} />
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required

          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            required
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              },
            }}
          />
          <CButton loading={loginMutation.isPending} type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </CButton>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Not registered yet?
        </Typography>
        <Link style={{ color: 'blue' }} to="/register">Register Now</Link>
      </Paper>
    </Box>
  );
}

export default Login;
