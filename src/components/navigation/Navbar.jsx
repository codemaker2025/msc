import React from 'react';
import useAuth from '../../hooks/useAuth';

export default function Navbar() {
  const{auth ,globalLogout} = useAuth()
  return (
    <nav className="bg-gray-800 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Brand</div>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#" className="hover:text-yellow-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">Services</a>
          </li>
         {
          auth && (
            <li>
            <a onClick={globalLogout} className="cursor-pointer text-red-500 bg-gray-700 p-4 rounded hover:text-red-300">Logout</a>
          </li>
          )
         }
        </ul>
      </div>
    </nav>
  );
}
