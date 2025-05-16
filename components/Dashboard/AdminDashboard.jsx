import React, { useState } from "react";
import { FaUser, FaClock, FaCloudDownloadAlt, FaComments } from "react-icons/fa";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import Widget from "../other/Widget";
import Elements from "../other/Elements";

const AdminDashboard = ({ changeUser }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <div className="flex items-center space-x-3 mb-6">
          <img src="src/1000014936.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-emerald-500" />
          <div>
            <h3 className="text-lg font-semibold">Divya</h3>
            <p className="text-sm text-emerald-400">Online</p>
          </div>
        </div>
        <nav className="space-y-4">
          <button onClick={() => setActiveComponent("dashboard")} className="block text-lg font-medium flex items-center space-x-2 hover:text-emerald-400">🏠 Dashboard</button>
          <button onClick={() => setActiveComponent("createTask")} className="block text-lg font-medium flex items-center space-x-2 hover:text-emerald-400">✏️ Create New Task</button>
          <button onClick={() => setActiveComponent("allTasks")} className="block text-lg font-medium flex items-center space-x-2 hover:text-emerald-400">📋 All Tasks</button>
          <button onClick={() => setActiveComponent("widgets")} className="block text-lg font-medium flex items-center space-x-2 hover:text-emerald-400">📊 Widgets</button>
          <button onClick={() => setActiveComponent("elements")} className="block text-lg font-medium flex items-center space-x-2 hover:text-emerald-400">🏗 Elements</button>
        </nav>
      </aside>

      <div className="flex-1 p-6 overflow-auto">
        <Header changeUser={changeUser} />
        {activeComponent === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard icon={<FaUser className="text-orange-500" />} title="2500" subtitle="Welcome" />
              <StatCard icon={<FaClock className="text-blue-500" />} title="123.50" subtitle="Average Time" />
              <StatCard icon={<FaCloudDownloadAlt className="text-green-500" />} title="1,805" subtitle="Collections" />
              <StatCard icon={<FaComments className="text-pink-500" />} title="54" subtitle="Comments" />
            </div>
          </>
        )}

        {activeComponent === "createTask" && (
          <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
            <CreateTask />
          </div>
        )}

        {activeComponent === "allTasks" && (
          <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">All Tasks</h2>
            <AllTask />
          </div>
        )}

        {activeComponent === "widgets" && (
          <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
            <Widget />
          </div>
        )}

        {activeComponent === "elements" && (
          <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
            <Elements />
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-black">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default AdminDashboard;
