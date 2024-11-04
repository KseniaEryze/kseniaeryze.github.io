import React, { useState } from 'react';
import './css/main.css'
import arrow from './img/Vector (1).png'

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Выберите город');
  
    const options = ['Минск'];
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelect = (value) => {
      setSelectedValue(value);
      setIsOpen(false);
    };
  return (
    
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={handleToggle}>
        {selectedValue}
            <img src={arrow} className="dropdown-arrow"></img> {/* Стрелка */}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
