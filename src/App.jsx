import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from './pages/register/Register';
import Package from './components/Package';
import Cashout from './components/Cashout';
import Deposit from './pages/deposit/Deposit';
import Refer from './components/Refer';
import Trx from './components/Trx';
import Profile from './pages/profile/Profile';
import Help from './components/Help';
import Task from './components/Task';
import AdminDash from './components/AdminDash';
import UpdateStatus from './components/UpdateStatus';
import UpdateWithdraw from './components/UpdateWithdraw';
import Product from './pages/products/Product';
import useAuth from "./hook/useAuth";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { Container } from "@mui/material";
import OrderCart from "./pages/orderCart/OrderCart";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import CashupWithdrawHistory from "./pages/cashupWithdrawHistory/Index";
import CompoundingWithdrawHistory from "./pages/compoundingWithdrawHistory/Index";
import MainBalanceWithdrawHistory from "./pages/mainBalanceWithdrawHistory/Index";
import MainBalanceDepositHistory from "./pages/mainBalanceDepositHistory/Index";
import MainOwingBalanceDepositHistory from "./pages/mainOwingBalanceDepositHistory/Index";
import CashupProfitHistory from "./pages/cashupProfitHistory/Index";
import CashupOwingProfitHistory from "./pages/cashupOwingProfitHistory/Index";

const PrivateRoute = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

function App() {
  const { token } = useAuth();


  return (
    <Container maxWidth='sm' sx={{ px: 0 }} >
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={token ? <Navigate to='/dashboard' /> : <Login />} />
        <Route path="/login" element={token ? <Navigate to='/dashboard' /> : <Login />} />
        <Route path="register" element={token ? <Navigate to='/dashboard' /> : <Register />} />
        <Route path="help" element={<Help />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="product" element={<Product />} />
          <Route path="order-cart" element={<OrderCart />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="main-balance-deposit-history" element={<MainBalanceDepositHistory />} />
          <Route path="main-owing-balance-deposit-history" element={<MainOwingBalanceDepositHistory />} />
          <Route path="cashup-withdraw-history" element={<CashupWithdrawHistory />} />
          <Route path="cashup-profit-history" element={<CashupProfitHistory />} />
          <Route path="cashup-owing-profit-history" element={<CashupOwingProfitHistory />} />
          <Route path="compounding-withdraw-history" element={<CompoundingWithdrawHistory />} />
          <Route path="main-balance-withdraw-history" element={<MainBalanceWithdrawHistory />} />
          <Route path="package" element={<Package />} />
          <Route path="cashout" element={<Cashout />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="refer" element={<Refer />} />
          <Route path="history" element={<Trx />} />
          <Route path="profile" element={<Profile />} />
          <Route path="task" element={<Task />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin_dashboard" element={<AdminDash />} />
          <Route path="update_status/:pk" element={<UpdateStatus />} />
          <Route path="update_withdraw_status/:pk" element={<UpdateWithdraw />} />
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Container>
  );
}

export default App;
