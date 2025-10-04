import { useEffect, useRef } from "react"

const App = () => {
  const inputref = useRef(null)
  useEffect(()=>{
    inputref.current.focus()
  },[])
  return (
    <div>
      <input type="text" ref={inputref}/>
    </div>
  )

}
export default App