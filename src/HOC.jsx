import { useContext } from "react"
import { Usercontext } from "./Usercontext"

export const HOC = (WrComp) => {
    const New = (props)=>{
        const {permition}=useContext(Usercontext)
        return permition ? <WrComp {...props}/>:null
    }

    return New
}