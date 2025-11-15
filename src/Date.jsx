import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';


const day = [
    
    "یکشمبه",
    "دوشنبه",
    "سه شنبه",
    "چهار شنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه"
]

const mounth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
]




const Datem = () => {
    const [date,setdate] = useState('')
    const [time,settime] = useState('')
    useEffect(()=>{
        let m = moment()        
        let finaldate = `${day[m.day()]} ${m.jDate()} ${mounth[m.jMonth()]} ${m.jYear()}`
        setdate(finaldate)
        settime(m.format("HH:mm"))
    },[])
    return (
        <div className='flex flex-col justify-center items-center'>
            <span className="text-[48px] text-green-900 text-center">{date}</span>
            <span className="text-[45px] text-green-700 text-center">{time}</span>
        </div>
    );
};

export default Datem;   