import { useState } from "react"

const App=()=>{
    const [first,last]=useState("hello world")
    const changetext=()=>{
        last("hello hosein")
    }
    return(
<div>
    <button onClick={changetext}>click</button>
    <span >{first}</span>
</div>
    )



}
export default App