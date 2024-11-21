import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('username', username);
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 rounded-md border w-full outline-gray-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 rounded-md border w-full outline-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-orange-500 text-black p-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}

