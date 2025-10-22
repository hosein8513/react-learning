import { Children, createContext, useState } from "react"

const initialusers =[
    {id:1,name:"hosein",email:"hossein@.com"},
    {id:2,name:"ali",email:"ali@.com"},
    {id:3,name:"javad",email:"javad@.com"},
    {id:4,name:"masih",email:"masih@.com"},
    {id:5,name:"mohsen",email:"mohsen@.com"},
    {id:6,name:"reza",email:"reza@.com"},
    {id:7,name:"mohamad",email:"mohamad@.com"}
]


export const Usercontext = createContext()

const UsercontextProvider=({children})=>{
    const[users,setusers]=useState(initialusers)
    const adduser = (user)=>{
setusers(...users,user)
    }
    const deleteuser=(id)=>{
        setusers(users.filter((user)=>user.id !== id))
    }

    return(
        <Usercontext.Provider value={{users,setusers,adduser,deleteuser}}>
            {children}
        </Usercontext.Provider>
    )
}



export default UsercontextProvider