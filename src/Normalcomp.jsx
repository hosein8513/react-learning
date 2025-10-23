import React, { useMemo, useState } from 'react';

const Normalcomp = () => {
    const [count, setcount] = useState(0)
    const [text, settext] = useState(" ")

    const heavy = useMemo(() => {
        let total = 0
        for (let i = 0; i < 1e8; i++) {
            total += i
        }
        console.log("heavy proccess started...");
        return total + count

    }, [count])
    return (
        <div className='flex flex-col p-4 gap-4'>
           <span className='text-[20px] font-semibold text-blue-300'>{heavy}</span>
           <button className='w-[90px] h-[50px] bg-purple-400 text-white font-semibold rounded-lg' onClick={()=>{setcount((prev)=>prev +1)}}>COUNT</button>
           <input value={text} onChange={(e)=>settext(e.target.value)} className='bg-gray-400 rounded-lg'/>
        </div>
    );
};

export default Normalcomp;