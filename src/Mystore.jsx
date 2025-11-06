import { useDispatch, useSelector } from 'react-redux';
import { Buyapple, Buyorange } from './redux/fruit/fruitaction';
import { Buysandwich } from './redux/food/foodaction';

const Mystore = () => {
    const {apple,orange} = useSelector((state)=>state.fruit)
    const {sandwich} = useSelector((state)=>state.food)
    const dispatch = useDispatch()
    return (
        <div className='bg-red-500 w-full flex flex-col justify-center items-center gap-4'>
          <div className='flex gap-4'>
             <h1 className='text-[20px] text-white font-semibold'>apples: {apple}</h1>
           <h1 className='text-[20px] font-semibold ring-offset-white'>oranges: {orange} </h1>
           <h1 className='text-[20px] font-semibold ring-offset-white'>sandwichies: {sandwich} </h1>
          </div>
           <div className=' flex gap-4 '>
            <button className='w-[95px] h-[45px] rounded-lg text-white bg-blue-500' onClick={()=>dispatch(Buyapple())}>buyapple</button>
            <button className='w-[95px] h-[45px] rounded-lg text-white bg-orange-500' onClick={()=>dispatch(Buyorange())}>buyorange</button>
            <button className='w-[95px] h-[45px] rounded-lg text-white bg-purple-500' onClick={()=>dispatch(Buysandwich())}>buysandwich</button>
           </div>
        </div>
    );
};




export default  Mystore;