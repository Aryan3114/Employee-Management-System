import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="w-[320px] bg-blue-500 text-white rounded-xl shadow-lg p-6 flex-shrink-0">
     
      <div className="flex justify-between items-center text-sm">
        <span className="bg-green-500 px-3 py-1 rounded-md font-semibold">
          {data.category}
        </span>
        <span className="text-gray-300">{data.date}</span>
      </div>

     
      <h2 className="mt-4 text-xl font-bold">{data.title}</h2>
      <p className="text-sm mt-2 opacity-90">{data.description}</p>

    
      <div className="mt-4">
        <button className="bg-green-600 text-white font-semibold py-2 px-4 w-full rounded-lg cursor-not-allowed">
          ✅ Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;

// import React from 'react'

// const CompleteTask = ({data}) => {
//   return (
    
//     <div className="h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5">
//     <div className='flex justify-between items-center'>
//        <h3 className='text-sm bg-green-500 px-3 py-1 rounded'>{data.category}</h3>
//        <h4 className='text-sm'>{data.date}</h4>
//     </div> 
//     <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
//     <p className='text-sm mt-2'>{data.description}</p>
//     <div className='mt-2 '>
//         <button className='w-full'>Completed</button>
//     </div>
//       </div>
//   )
// }

// export default CompleteTask
