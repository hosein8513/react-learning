import React from 'react';

const Counter = ({count,setcount}) => {
    console.log("counter rerendered");
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <span className='text-[20px] text-gray-400'>{count}</span>
<button className='w-[90px] h-[50px] bg-red-500 rounded-lg text-white font-semibold'onClick={()=>setcount(count +1)}>COUNT</button>
        </div>
     );
};

export default Counter;