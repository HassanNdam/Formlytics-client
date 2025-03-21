import React from 'react'; 
import Image from '../assets/Logo.png';

export default function Header({ userName = "Kevin Glass" }) {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div className="text-xl font-bold text-blue-600">  <img src={Image} alt="Logo" className="h-10 w-auto" /> </div>
        <div className="text-gray-700">Hello, {userName}</div>
      </header>
    );
  }