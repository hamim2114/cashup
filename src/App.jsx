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
import OrderDetails from './components/OrderDetails';
import useAuth from "./hook/useAuth";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

const PrivateRoute = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

function App() {
  const { token } = useAuth();


  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={token ? <Navigate to='/dashboard' /> : <Login />} />
      <Route path="/login" element={token ? <Navigate to='/dashboard' /> : <Login />} />
      <Route path="register" element={token ? <Navigate to='/dashboard' /> : <Register />} />
      <Route path="help" element={<Help />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="product" element={<Product />} />
        <Route path="order-details" element={<OrderDetails />} />
        <Route path="package" element={<Package />} />
        <Route path="dash" element={<Dashboard />} />
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
  );
}

export default App;
