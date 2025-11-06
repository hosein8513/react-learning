import { Buyapple, Buyorange } from './redux/fruit/fruitaction';
import { connect } from 'react-redux';

const Mystore = ({apple,orange,buyapple,buyorange}) => {
    return (
        <div className='bg-red-500 w-full flex flex-col justify-center items-center gap-4'>
          <div className='flex gap-4'>
             <h1 className='text-[20px] text-white font-semibold'>apples: {apple}</h1>
           <h1 className='text-[20px] font-semibold ring-offset-white'>oranges: {orange} </h1>
          </div>
           <div className=' flex gap-4 '>
            <button className='w-[85px] h-[45px] rounded-lg text-white bg-blue-500' onClick={buyapple}>buyapple</button>
            <button className='w-[85px] h-[45px] rounded-lg text-white bg-orange-500' onClick={buyorange}>buyorange</button>
           </div>
        </div>
    );
};


const statetoprops = state=>{
    return {
        apple:state.apple,  
        orange:state.orange
    }
}

const statetodispatch = dispatch=>{
    return {
        buyapple:()=> dispatch(Buyapple()) ,
        buyorange:()=> dispatch(Buyorange())
    }
}

export default connect(statetoprops,statetodispatch)( Mystore);