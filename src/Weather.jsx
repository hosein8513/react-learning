import React, { useEffect, useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
import Datem from './Date';
import { Request } from '../redux/weather/action';

const Weather = () => {
   const { loading, data, error } = useSelector(state => state)
   const dispatch = useDispatch()
   const [back, setback] = useState('warm')
   const [query,setquery] = useState('')
   const handlegetweather = (e) => {
      e.preventDefault()
      dispatch(Request(query))
      setquery('')
   }
useEffect(()=>{
   if(!data.main){
      return
   }
   let temp = data.main.temp
   if(temp < 12){
      setback("cold")
   }else if (temp < 23){
      setback("warm")
   }else{
      setback("hot")
   }
},[data])

   return (
      <div className={`flex flex-col items-center  bg-cover inset-0 w-full h-screen ${back}`}>
         <div className="w-full flex flex-col justify-center items-center gap-4 ">
            <form onSubmit={handlegetweather}>
               <input type="text" className="border-b bg-white/40 w-[400px] h-[100px] rounded-lg text-green-900 text-[25px] font-semibold text-center" placeholder={data.name || "Name of City or Country"} value={query} onChange={e=>setquery(e.target.value)}/>
            </form>
            <div className=" w-full flex flex-col justify-center items-center">
               <Datem />
            </div>
         </div>
         {loading ? (
            <div className='w-full flex flex-col justify-center items-center gap-4 '>
               <div className='w-[30px] h-[30px] rounded-full bg-blue-400 animate-pulse'></div>
               <span className='text-blue-300 text-[20px]'>Loading</span>
            </div>
         ) : data.main ? (
            <div className='w-full flex justify-center items-center flex-col'>
               <div className="w-3/12 h-[200px] rounded-lg bg-white/55 text-green-900 text-center text-[60px]">{Math.round(data.main.temp)}°C</div>
               <span className='text-center text-[48px] text-white text flex justify-center items-center'>{data.weather[0].main}</span>
            </div>
         ) : error ? (
            <span className='text-[20px]'>Check Your Input</span>
         ) : (
            <span className='text-[20px]'>Enter Your Input</span>
         )




         }
      </div>
   );
};

export default Weather;