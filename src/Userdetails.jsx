import { Link } from "react-router";

const Userdetails = () => {
    return (
        <div className="fixed z-10 bg-black/50 top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="w-[40%] h-[85%] bg-white rounded-lg z-20 flex flex-col justify-center items-center p-4 gap-4">
                <div className="flex gap-4 p-4 border-b w-full h-[40%]">
                    <div className="w-[100px] h-[100px] rounded-full bg-indigo-500 text-white flex justify-center items-center text-[25px] font-semibold">
                        HK
                    </div>
                    <div className="flex flex-col p-4 gap-3">
                        <h1 className="text-[30px] font-bold">Hosein Kazemi</h1>
                        <h5 className="text-[15px] text-gray-400">Frontend Developer</h5>
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-center items-center border-b gap-3">
                    <h2 className="text-[25px] font-semibold">Peronal Information</h2>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">name:</span>
                            <span>HOSEIN</span>
                        </div>
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">lastname:</span>
                            <span>KAZEMI</span>
                        </div>
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">email:</span>
                            <span>kazmyh279@gmail.com</span>
                        </div>
                        <div className="flex space-x-7 p-4">
                            <span className="text-gray-400">phone:</span>
                            <span>09909302575</span>
                        </div>
                    </div>
                </div>
                <Link to={"/users"} className="flex justify-center items-center w-[80px] h-[40px] rounded-lg bg-red-600 text-white">BACK</Link>
            </div>
        </div>
    );
};

export default Userdetails;