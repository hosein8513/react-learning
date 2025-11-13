import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getusers} from '../redux/user/useraction';

const Usercomp = () => {
     const {loading,data,error} = useSelector(state=>state)
  const dispatch = useDispatch()

  const handlegetusers = ()=>{
   dispatch(getusers())

  }
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className=' p-4 w-full flex justify-center items-center'>
                <button className='w-[90px] h-[45px] rounded-lg bg-orange-500 text-white font-semibold cursor-pointer' onClick={handlegetusers}>GetUsers</button>
            </div>
            {
                loading?(<div className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className='w-[30px] h-[30px] rounded-full bg-gray-800 animate-pulse'></div>
                    <span className='text-[20px] text-gray-800'>Loading</span>
                </div>)
                :data.length>0?(
                    <ul className='w-full'>
                        {data.map(user=>(
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                ):error?(
                    <span className='w-full text-[30px] font-semibold text-center'>Error:{error.message}</span>
                ):(
                    <span className='text-[20px]'>Click Button</span>
                )
            }
        </div>
    );
};

export default Usercomp;