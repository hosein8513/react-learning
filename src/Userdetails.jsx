import {  } from "react";
import { Link, useLocation } from "react-router";

const Userdetails = () => {
const {state:users}=useLocation()





    if(!users)
        return(
    <div className="flex justify-center flex-col items-center bg-red-100 text-red-600 m-8 gap-4">
        error
        <Link to={"/users"} className="w-[80px] h-[40px] rounded-lg text-white bg-gray-400 flex justify-center items-center">BACK TO USERS</Link>
    </div>    
        )


        const avatar = users.name.split(' ')
        .map(part=> part[0])
        .join('')
        .toUpperCase()

    return (
        <div className="fixed z-10 bg-black/50 top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="w-[40%] h-[70%] bg-white rounded-lg z-20 flex flex-col justify-center items-center p-4 gap-4">
                <div className="flex gap-4 p-4 border-b w-full h-[30%]">
                    <div className="w-[100px] h-[100px] rounded-full bg-indigo-500 text-white flex justify-center items-center text-[25px] font-semibold">
                        {avatar}
                    </div>
                    <div className="flex flex-col p-4 gap-3">
                        <h1 className="text-[30px] font-bold">{users.name}</h1>
                        <h5 className="text-[15px] text-gray-400">{users.job}</h5>
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-center items-center border-b gap-3">
                    <h2 className="text-[25px] font-semibold">Peronal Information</h2>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">username:</span>
                            <span>{users.username}</span>
                        </div>
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">email:</span>
                            <span>{users.email}</span>
                        </div>
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">phone:</span>
                            <span>{users.phone}</span>
                        </div>
                    </div>
                </div>
                <Link to={"/users"} className="flex justify-center items-center w-[80px] h-[40px] rounded-lg bg-red-600 text-white">BACK</Link>
            </div>
        </div>
    );
};

export default Userdetails;