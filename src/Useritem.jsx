import { useContext } from "react";
import { Usercontext } from "./Usercontext";

const Useritem = ({user}) => {
    const {deleteuser}=useContext(Usercontext)
    return (
        <div className="bg-orange-200 rounded-lg p-4 ">
            <h1 className="text-[15px] font-bold">{user.name}</h1>
            <span className="text-[12px] text-gray-400 m-6">{user.email}</span>
            <button className="w-[80px] h-[40px] rounded-lg bg-red-600 text-white" onClick={()=>deleteuser(user.id)}>
                DELETE
            </button>
        </div>
    );
};

export default Useritem;