// LeftSidebar.js
import '../App.css';
import React from 'react';
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
const LeftSidebar = () => {
    return (
        <div className="flex-none w-64 min-h-screen rounded-tr-lg bg-zinc-400">
            <img className=" rounded-tr-lg" src={logo} alt="" srcset="" />
        <nav className="flex-1 my-2">
        <ul className="space-y-2">
          <li>
              <Link to="/PatientTable" className=" btn block mx-2 rounded-lg py-2 px-4    hover:bg-gray-700 hover:text-slate-300 active:bg-gray-700 active:text-slate-300">Patient Table</Link>
          </li>
          <li>
            <Link to="/PatientForm" className="block mx-2 rounded-lg py-2 px-4 hover:bg-gray-700 hover:text-slate-300">Add Patient</Link>
          </li>
          <li>
            <a className="block mx-2 rounded-lg py-2 px-4  text-left hover:bg-gray-700 hover:text-slate-300">
            User Online
            </a>
          </li>
          <li>
            <a className="block mx-2 rounded-lg py-2 px-4  text-left hover:bg-gray-700 hover:text-slate-300">Changes</a>
          </li>
        </ul>
      </nav>
      <div className=" my-2 p-4  h-80 overflow-hidden">
          <h3 className="text-2xl text-center text-gray-600 font-semibold">Users Online</h3>
          <ul className="my-users mt-2 h-full overflow-y-scroll">
            <li className="text-lg font-semibold py-1 text-slate-600">User 1</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 2</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 1</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 2</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 1</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 2</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
            <li className="text-lg font-semibold py-1 text-slate-600">User 3</li>
 
          </ul>
        </div>

        </div>
    );
}

export default LeftSidebar;
