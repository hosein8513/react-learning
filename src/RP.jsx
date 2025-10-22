import React, { useContext } from 'react';
import { Usercontext } from './Usercontext';

const RP = ({render}) => {
    const {permition}=useContext(Usercontext)
    return (
        <div>
            {permition && render()}
        </div>
    );
};

export default RP;