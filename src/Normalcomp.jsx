import React, { useCallback, useState } from 'react';

const Normalcomp = () => {
    const [count, setcount] = useState(0)
    const [text, settext] = useState(" ")

   const todo =useCallback(()=>{
console.log("number changed");
setcount((prev)=>prev+1)
   },[])
    return (
        <div className='flex flex-col p-4 gap-4'>
           <span className='text-[20px] font-semibold text-blue-300'>{count}</span>
           <button className='w-[90px] h-[50px] bg-purple-400 text-white font-semibold rounded-lg' onClick={todo}>COUNT</button>
           <input value={text} onChange={(e)=>settext(e.target.value)} className='bg-gray-400 rounded-lg'/>
        </div>
    );
};

export default Normalcomp;