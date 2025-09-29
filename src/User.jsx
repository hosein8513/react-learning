import { useState } from "react";

const User = () => {
    
    const [age,setage]=useState(19)
  
    return (
      <div>
        <h1>User</h1>
        <button onClick={()=> setage((pre)=>pre+1)}>age</button>
        <ul>
            <li>name:hosein</li>
            <li>age:{age}</li>
        </ul>
       
      </div>
    );
};

export default User;