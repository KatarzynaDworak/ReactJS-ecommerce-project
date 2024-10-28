import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import PersonalData from './PersonalData';
import ShippingAddresses from './ShippingAddresses';
import AccountSettings from './AccountSettings';

const UserDashboard = () => {
  return (
    <Router>
      <div className="user-dashboard">
        <nav>
          <link to="order">Order History</link>
          <link to="personal-data">Personal Data</link>
          <link to="shipping-adresses">Shipping Adresses</link>
          <link to="settings">Acount Settings</link>
        </nav>
        <div className="dashboard-content">
          <Routes>
            <Route path='order' element={<OrderHistory />} />
            <Route path='personal-data' element={<PersonalData />} />
            <Route path='shipping-adresses' element={<ShippingAddresses />} />
            <Route path='settings' element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default UserDashboard;