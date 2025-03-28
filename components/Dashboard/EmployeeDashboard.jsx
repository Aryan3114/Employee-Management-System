import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { FaSearch, FaHome, FaChartBar, FaCog, FaUser, FaSignOutAlt, FaEnvelope, FaWpforms } from "react-icons/fa";



const EmployeeDashboard = ({ changeUser, data }) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');  
    window.location.reload(); 
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between min-h-screen">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Hello👋 {data?.firstName}</h2>
          <ul className="space-y-4">
            {[
              { icon: FaHome, text: "Dashboard" },
              { icon: FaChartBar, text: "Chart" },
              { icon: FaWpforms, text: "Form" },
              { icon: FaEnvelope, text: "Email" },
              { icon: FaUser, text: "Profile" },
              { icon: FaCog, text: "Settings" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-700">
                <item.icon />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Now Sign Out button works correctly */}
        <button 
          onClick={logOutUser} 
          className="p-2 bg-red-500 rounded flex items-center space-x-3 cursor-pointer hover:bg-red-600">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </aside>

      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">Dashboard</h1>
          <div className="relative w-96">
            <input
              type="text"
              className="w-full p-2 pl-10 rounded bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
            <FaSearch className="absolute left-3 top-3 text-gray-600" />
          </div>
        </div>

        {data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <h2 className="text-xl text-black font-bold mb-4">Task Overview</h2>
              <TaskListNumbers data={data} />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <h2 className="text-black text-xl font-bold mb-4">Your Tasks</h2>
              <TaskList data={data} />
            </div>
          </div>
        ) : (
          <p className="text-black text-center text-lg">Loading employee data...</p>
        )}
      </main>
    </div>
  );
};

export default EmployeeDashboard;
