import React, { useContext, useState } from 'react';
import { Usercontext } from './Usercontext';
import Useritem from './Useritem';
import Adduser from './Adduser';
import RP from './RP';

const Userlist = () => {
    const { users } = useContext(Usercontext)
    const [show, setshow] = useState(false)
    return (
        <div className='p-4  bg-gray-200 rounded-lg'>
            <RP render={() => (
                <button className='w-[90px] h-[50px] bg-blue-500 font-semibold text-white rounded-lg m-4' onClick={() => setshow(true)}>ADD USER</button>
            )} />
            {show && <Adduser setshow={setshow} />}
            <ul className='p-4 border rounded-lg grid grid-cols-4 gap-4'>
                {users.map((user) => (
                    <li key={user.id}>
                        <Useritem user={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Userlist;