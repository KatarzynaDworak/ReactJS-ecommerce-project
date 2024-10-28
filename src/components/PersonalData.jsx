import React from 'react';
import { useState } from 'react';

const PersonalData = () => {
  const [ personalData, setPersonalData ] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setPersonalData({
      ...personalData, 
      [e.target.name]: e.target.value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Wysyłamy dane do serwera
  }

  return (
    <div>
      <h2>Personal data</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='name'
        value={personalData.name}
        onChange={handleChange}
        placeholder='Name'
        />
        <input 
        type='text'
        name='email'
        value={personalData.email}
        onChange={handleChange}
        placeholder='Email'
        />
        <button>Change</button>
      </form>
    </div>
  )
}

export default PersonalData;