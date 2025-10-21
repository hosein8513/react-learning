import { useNavigate } from "react-router";

const Notfound = () => {
    const navigate = useNavigate()
    const handlenavigate =()=>{
        navigate("/users")
    }
    const handlenavigate2=()=>{
        navigate("/posts")
    }
    return (
        <div className="w-full flex flex-col justify-center items-center p-4 gap-4 h-[400px]">
            <div className="w-full flex flex-col justify-center items-center gap-4 border-b">
                <span className="text-[45px] text-gray-900">404 PAGE</span>
                <span className="text-[25px] text-gray-700">we are sorry your page not found</span>
            </div>
            <div className="w-full flex justify-center items-center gap-4">
                <button className="w-[100px] h-[50px] rounded-lg text-white bg-indigo-500" onClick={handlenavigate}>
                    BACK TO USERS
                </button>
                <button className="w-[100px] h-[50px] rounded-lg text-white bg-yellow-500" onClick={handlenavigate2}>BACK TO POSTS</button>
            </div>
        </div>
    );
};

export default Notfound;