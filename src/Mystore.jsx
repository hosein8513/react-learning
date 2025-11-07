import { useDispatch, useSelector } from 'react-redux';
import { Buyapple, Buyorange } from './redux/fruit/fruitaction';
import { Buysandwich } from './redux/food/foodaction';
import { useState } from 'react';

const Mystore = () => {
  const [itemcount, setitemcount] = useState({
    apple: 1,
    orange: 1,
    sandwich: 1
  })


  const { apple, orange } = useSelector((state) => state.fruit)
  const { sandwich } = useSelector((state) => state.food)
  const dispatch = useDispatch()
  return (
    <div className='bg-red-500 w-full flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-4'>
        <h1 className='text-[20px] text-white font-semibold'>apples: {apple}</h1>
        <h1 className='text-[20px] font-semibold ring-offset-white'>oranges: {orange} </h1>
        <h1 className='text-[20px] font-semibold ring-offset-white'>sandwichies: {sandwich} </h1>
      </div>
      <div className=' flex gap-4 '>
        <div className='flex gap-2'>
          <button className='w-[95px] h-[45px] rounded-lg text-white bg-blue-500' onClick={() => dispatch(Buyapple(itemcount.apple))}>buyapple ({itemcount.apple})</button>
          <input type="number" className='w-[85px] rounded-lg bg-white' value={itemcount.apple} onChange={(e)=>setitemcount({...itemcount,apple:e.target.value})}/>
        </div>
        <div className='flex gap-2'>
          <button className='w-[95px] h-[45px] rounded-lg text-white bg-orange-500' onClick={() => dispatch(Buyorange(itemcount.orange))}>buyorange ({itemcount.orange})</button>
          <input type="number" className='w-[85px] rounded-lg bg-white' value={itemcount.orange} onChange={(e)=>setitemcount({...itemcount,orange:e.target.value})}/>

        </div>
        <div className='flex gap-2'>
          <button className='w-[95px] h-[45px] rounded-lg text-white bg-purple-500' onClick={() => dispatch(Buysandwich(itemcount.sandwich))}>buysandwich ({itemcount.sandwich})</button>
          <input type="number" className='w-[85px] rounded-lg bg-white' value={itemcount.sandwich} onChange={(e)=>setitemcount({...itemcount,sandwich:e.target.value})}/>

        </div>
      </div>
    </div>
  );
};




export default Mystore;