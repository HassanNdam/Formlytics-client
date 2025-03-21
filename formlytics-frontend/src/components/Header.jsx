import React from 'react';  // ← Nécessaire pour utiliser JSX

export default function Header({ userName = "John" }) {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div className="text-xl font-bold text-blue-600">Formlytics</div>
        <div className="text-gray-700">Hello, {userName}</div>
      </header>
    );
  }