import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="w-[320px] bg-red-500 text-white rounded-xl shadow-lg p-6 flex-shrink-0">
    
      <div className="flex justify-between items-center text-sm">
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-md font-semibold">
          {data.category}
        </span>
        <span className="text-gray-200">{data.date}</span>
      </div>

      <h2 className="mt-4 text-xl font-bold">{data.title}</h2>
      <p className="text-sm mt-2 opacity-90">{data.description}</p>

      
      <div className="flex justify-between mt-5">
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
          ✅ Complete
        </button>
        <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-lg text-sm transition">
          ❌ Fail
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;

