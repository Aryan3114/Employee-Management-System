import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="w-[320px] bg-green-500 text-white rounded-xl shadow-lg p-6 flex-shrink-0">
    
      <div className="flex justify-between items-center text-sm">
        <span className="bg-blue-500 px-3 py-1 rounded-md font-semibold">
          {data.category}
        </span>
        <span className="text-gray-200">{data.date}</span>
      </div>

     
      <h2 className="mt-4 text-xl font-bold">{data.title}</h2>
      <p className="text-sm mt-2 opacity-90">{data.description}</p>

     
      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition">
          🚀 Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;


