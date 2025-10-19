import React from 'react';
import { Link } from 'react-router';

const Adduser = () => {
    return (
        <div className='fixed min-w-screen top-0 left-0 h-full bg-black/40 flex justify-center items-center z-10'>
            <div className='bg-white w-[40%] h-[60%] rounded-lg p-4 flex flex-col justify-center items-center gap-4 overflow-hidden z-20'>
                <h2 className='text-center text-[20px] font-semibold'>ADD USER</h2>
                <form className='p-4 border-b'>
                    <div className='flex flex-col gap-3 p-4'>
                        <label>name</label>
                        <input type="text" className='w-[80%] rounded-lg bg-gray-400' />
                        <label>email</label>
                        <input type="email" className='w-[80%] rounded-lg bg-gray-400' />
                    </div>
                    <button className='w-[80px] h-[40px] rounded-lg bg-blue-500 text-white'>add user</button>
                </form>
                <Link to={"users"} className='w-[80px] h-[40px] rounded-lg bg-gray-600 text-center text-white'>CANCEL</Link>
            </div>
        </div>
    );
};

export default Adduser;