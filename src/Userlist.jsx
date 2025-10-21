import { useContext } from "react";
import { Usercontext } from "./Usercontext";
import Useritem from "./Useritem";

const Userlist = () => {
    const {users}=useContext(Usercontext)
    return (
        <div className="bg-white ">
            <h1 className="text-[20px] font-semibold">
                USERS LIST
            </h1>
            <ul className="border border-gray-300 grid grid-cols-4 gap-4 p-4">
                {users.map((user)=>(
                    <li key={user.id} className="p-4">
                        <Useritem user={user}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Userlist;