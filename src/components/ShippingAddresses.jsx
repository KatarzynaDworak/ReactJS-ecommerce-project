import React, { useState, useEffect } from 'react';
import { addShippingAddress, getShippingAddresses } from '../plugins/firebase';

const ShippingAddresses = ({ userId }) => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const addressesList = await getShippingAddresses(userId);
        setAddresses(addressesList);
      } catch (error) {
        setMessage("Failed to load addresses.");
      }
    };

    if (userId) fetchAddresses();
  }, [userId]);

  const handleAddAddress = async () => {
    try {
      await addShippingAddress(userId, { address: newAddress });
      setAddresses([...addresses, { address: newAddress }]);
      setMessage("Address added successfully!");
      setNewAddress("");
    } catch (error) {
      setMessage("Failed to add address.");
    }
  };

  return (
    <div>
      <h2>Your Shipping Addresses</h2>
      <ul>
        {addresses.map((addr, index) => (
          <li key={index}>{addr.address}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        placeholder="Add new address"
      />
      <button onClick={handleAddAddress}>Add Address</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ShippingAddresses;

 