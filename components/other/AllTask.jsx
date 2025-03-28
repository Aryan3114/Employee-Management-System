import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="tasklist" className="bg-white p-6 rounded-xl shadow-lg mt-5">
    
      <div className="bg-black text-white py-3 px-6 flex justify-between rounded-lg shadow-md hidden md:flex">
        <h2 className="text-lg font-semibold w-1/5">Emp. Name</h2>
        <h3 className="text-lg font-semibold w-1/5">New Task</h3>
        <h5 className="text-lg font-semibold w-1/5">Active Task</h5>
        <h5 className="text-lg font-semibold w-1/5">Completed Task</h5>
        <h5 className="text-lg font-semibold w-1/5">Failed Task</h5>
      </div>

      <div className="mt-3 space-y-2">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className={`border border-gray-300 py-3 px-6 flex flex-wrap md:flex-nowrap justify-between rounded-lg transition duration-300 hover:shadow-md ${
              idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
            }`}
          >
            <h2 className="text-md font-medium w-full md:w-1/5 text-gray-800">{elem.firstName}</h2>
            <h3 className="text-md font-medium w-full md:w-1/5 text-blue-500">{elem.taskCount.new_task}</h3>
            <h5 className="text-md font-medium w-full md:w-1/5 text-yellow-500">{elem.taskCount.active}</h5>
            <h5 className="text-md font-medium w-full md:w-1/5 text-green-500">{elem.taskCount.completed}</h5>
            <h5 className="text-md font-medium w-full md:w-1/5 text-red-500">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
