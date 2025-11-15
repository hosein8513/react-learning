import React, { useState } from 'react';
import Date from './Date';
import { useDispatch, useSelector } from 'react-redux';
import { getweatherinfo } from '../redux/weather/action';

const Weather = () => {
    const {loading,data,error} = useSelector(state=>state)
    const dispatch = useDispatch()
     const [back,setback] = useState('warm')
     const handlegetweather=(e)=>{
e.preventDefault()
dispatch(getweatherinfo("tehran"))
     }
    return (
        <div className={`flex flex-col items-center  bg-cover inset-0 w-full h-screen ${back}`}>
<div className="w-full flex flex-col justify-center items-center gap-4 ">
 <form onSubmit={handlegetweather}>
     <input type="text" className="border-b bg-white/40 w-[400px] h-[100px] rounded-lg text-green-900 text-[25px] font-semibold text-center" placeholder="Name of City or Country"/>
 </form>
  <div className=" w-full flex flex-col justify-center items-center">
   <Date/>
  </div>
</div>
 {loading?(
    <div className='w-full flex flex-col justify-center items-center gap-4 '>
        <div className='w-[30px] h-[30px] rounded-full bg-blue-400 animate-pulse'></div>
        <span className='text-blue-300 text-[20px]'>Loading</span>
    </div> 
 ):data.main?(
    <div> 
     <div className="w-5/12 h-[200px] rounded-lg bg-white/55 text-green-900 text-center text-[60px]">{Math.round(data.main.temp)}°C</div>
<span className='text-center text-[48px] text-white text flex justify-center items-center'>{data.weather[0].main}</span>
</div>
 ):error?(
    <span className='text-[20px]'>Check Your Input</span>
 ):(
    <span className='text-[20px]'>Enter Your Input</span>
 )
 
 
 
 
 }
    </div>
    );
};

export default Weather;