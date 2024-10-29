import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import PersonalData from './PersonalData';
import ShippingAddresses from './ShippingAddresses';
import AccountSettings from './AccountSettings';
import '../UserDashboard.css'; 

const UserDashboard = ({ userId }) => {
  return (
    <div className="user-dashboard">
      <nav>
        <Link to="order">Order History</Link>
        <Link to="personal-data">Personal Data</Link>
        <Link to="shipping-addresses">Shipping Addresses</Link>
        <Link to="settings">Account Settings</Link>
      </nav>
      <div className="dashboard-content">
        <Routes>
          <Route path="order" element={<OrderHistory userId={userId} />} />
          <Route path="personal-data" element={<PersonalData userId={userId} />} />
          <Route path="shipping-addresses" element={<ShippingAddresses userId={userId} />} />
          <Route path="settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;

