import React, { memo } from 'react';

const Childcomp = () => {
    console.log("child rerendered");
    
    return (
        <div className='w-full flex flex-col gap-4 p-4'>
            <h1 className='text-[30px] font-bold'>WELLCOME TO MY APP</h1>
            <span className='text-[20px]'>you will see meny things here</span>
        </div>
    );
};

export default memo(Childcomp);