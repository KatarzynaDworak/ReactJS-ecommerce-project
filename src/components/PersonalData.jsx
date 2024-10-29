import React, { useState } from 'react';
import { updateUserData } from '../plugins/firebase';

const PersonalData = ({ userId }) => {
  const [personalData, setPersonalData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserData(userId, personalData);
      setMessage("Personal data updated successfully!");
    } catch (error) {
      setMessage("Failed to update personal data.");
    }
  };

  return (
    <div>
      <h2>Personal Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={personalData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={personalData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Save Changes</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PersonalData;
