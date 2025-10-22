import React from 'react';
import { createPortal } from 'react-dom';
import { HOC } from './HOC';

const Adduser = ({setshow}) => {
    return createPortal((
        <div className='fixed bg-black/50 inset-0 flex justify-center items-center'>
            <form className='p-4 bg-white rounded-lg'>
                <div className='p-4 flex justify-between items-center'>
                    <button className='fas fa-xmark' onClick={()=>setshow(false)}></button>
                    <h2 className='text-[20px]'>ADD USER</h2>
                </div>
                <form>
                    <div className='p-4 flex flex-col'>
                        <label>name:</label>
                        <input type="text"  className='h-[30px] rounded-lg bg-gray-200 border'/>
                    </div>
                    <div className='p-4 flex flex-col'>
                        <label>email:</label>
                        <input type="email" className='h-[30px] rounded-lg bg-gray-200 border'/>
                    </div>
                    <button className='w-[90px] h-[50px] rounded-lg bg-green-600 text-white font-semibold'>ADD</button>
                </form>
            </form>
            
        </div>
    ),document.getElementById("modal-root"))
};

export default HOC(Adduser);