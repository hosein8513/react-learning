import { useEffect, useState } from "react";
import "./user.css"
const User = () => {
    
    const [age,setage]=useState(19)
  useEffect(()=>{
    console.log("wellcome");
    return()=>{
    console.log("hope to see you again")
    }
  },[])
  useEffect(()=>{
    if(age==27){
        console.log("you are overage");
        
    }
  },[age])
    return (
      <div className="userdiv">
        <h1>User</h1>
        <button className="age" onClick={()=> setage((pre)=>pre+1)}>age</button>
        <ul>
            <li>name:hosein</li>
            <li>age:{age}</li>
        </ul>
       
      </div>
    );
};

export default User;