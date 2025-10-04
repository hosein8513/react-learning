import { useRef, useState } from "react"

const App = () => {
  const [count, setcount] = useState(0)
  let num = useRef(0)
  const handlein = () => {
    num.current += 2
    setcount(num.current +1)
  }
  return (
 <div className="w-[100dvw] h-[100dvh] bg-gradient-to-r from-pink-400 to-blue-400 flex justify-center items-center">
  <div className="w-[40%] h-[60%] border rounded-lg flex flex-col gap-4 justify-center items-center">
    <span className="w-[50%] h-[30%] rounded-lg text-center text-[25px] border">{count}</span>
    <button className="w-1/2 h-3/12 bg-red-500 rounded-xl" onClick={handlein}>increase</button>
  </div>
 </div>
  )

}
export default App