import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Withdraw from './components/withdraw';
import Login from './auth/login';
import Signup from './auth/signup';
import Product from './components/products';
import RechargeForm from './components/recharge/rechargeForm'
import QckPaymentLink from './components/recharge/quickPaymentLink'
import Payment from './components/recharge/payment'
import ReferralPage from './components/referralPage';

// Import the AuthProvider from your authentication context file
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes  */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Private Routes  */}
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/user-profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/withdraw' element={<PrivateRoute><Withdraw /></PrivateRoute>} />
          <Route path='/product' element={<PrivateRoute><Product /></PrivateRoute>} />
          <Route path='/recharge-form' element={<PrivateRoute><RechargeForm /></PrivateRoute>} />
          <Route path='/quickpayment-link' element={<PrivateRoute><QckPaymentLink /></PrivateRoute>} />
          <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
          <Route path='/referallink' element={<PrivateRoute><ReferralPage /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
