import React, { useContext } from 'react';
import { Usercontext } from './Usercontext';

const Useritem = ({user}) => {
    const {deleteuser} = useContext(Usercontext)
    return (
        <div className='flex flex-col justify-center items-center gap-4 bg-orange-200 rounded-lg'>
            <h1 className='text-[25px] font-bold'>{user.name}</h1>
            <span className='text-[20px] text-gray-400'>{user.email}</span>
            <button className='w-[80px] h-[40px] bg-red-600 rounded-lg text-white' onClick={()=>deleteuser(user.id)}>DELETE</button>
        </div>
    );
};

export default Useritem;