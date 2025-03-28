import React from "react";

const FailedTask = ({ data }) => {
  if (!data) return null;
  return (
    <div className="w-[320px] bg-gray-700 text-white rounded-xl shadow-lg p-6 flex-shrink-0">
      
      <div className="flex justify-between items-center text-sm">
        <span className="bg-red-500 px-3 py-1 rounded-md font-semibold">
          {data.category}
        </span>
        <span className="text-gray-300">{data.date}</span>
      </div>

     
      <h2 className="mt-4 text-xl font-bold">{data.title}</h2>
      <p className="text-sm mt-2 opacity-90">{data.description}</p>

      <div className="mt-4">
        <button className="bg-red-600 text-white font-semibold py-2 px-4 w-full rounded-lg cursor-not-allowed">
          ❌ Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;

