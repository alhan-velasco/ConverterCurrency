import React from 'react';
import './Input.css';

function Input({ type, value, onChange, placeholder }) {
  return (
    <input className="input" type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
}

export default Input;
