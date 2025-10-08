import { useEffect, useReducer, } from "react"
const initialuser = {
  data: null,
  loading: true,
  error: null
}

const datareducer = (state, action) => {
  switch (action.type) {
    case "fetch start":
      return { loading: true, data: null, error: null }
    case "fetch success":
      return { loading: false, data: action.payload, error: null }
    case "fetch error":
      return { loading: false, data: null, error: action.payload }
    default:
      return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(datareducer, initialuser)

  useEffect(() => {
    dispatch({ type: "fetch start" })

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetch success", payload: data }))
      .catch(() => dispatch({ type: "fetch error", payload: "error to get data" }))
  }, [])


  if (state.loading) {
    return (
      <div className="h-[100dvh] flex justify-center items-center">
        <div className="w-[35%] h-[35%] flex flex-col justify-center items-center animate-pulse">
          <div className="rounded-full w-16 h-16 bg-indigo-500"></div>
          <p className="text-indigo-500 text-[15px] font-semibold">loading</p>
        </div>
      </div>
    )
  }
  if (state.error) {
    return (
      <div className="h-[100dvh] flex justify-center items-center bg-red-100">
        <div className="w-[35%] h-[35%] flex flex-col justify-center items-center rounded-lg border border-red-500">
          <i className="rounded-full w-16 h-16 bg-red-500 fas fa-exclamation border border-red-500"></i>
          <p className="text-red-500 text-[15px] font-semibold">{state.error}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="w-[100dvw] flex justify-center items-center flex-col gap-4">
      <h1 className="text-indigo-500 text-[35px] font-extrabold">users list</h1>
      <div className="w-[80%] flex flex-wrap gap-4 justify-center items-center">
        {state.data.map((user) => {
          return(
          <div key={user.id} className="w-[250px] h-[200px] rounded-lg shadow shadow-gray-400 ">
            <div className="w-full h-[40%] bg-gradient-to-r from-indigo-500 to-purple-500  flex flex-col rounded-lg p-4">
              <span className="text-white text-[20px] font-semibold">{user.name}</span>
              <span className="text-white text-[15px]">@{user.username}</span>
            </div>
            <div className="w-full h-[60%] flex flex-col gap-4 p-4">
              <span className="text-[15px]"><i className="text-indigo-500 fas fa-envelope mx-1.5"></i>{user.email}</span>
              <span className="text-[15px]"><i className="text-indigo-500 fas fa-phone mx-1.5"></i>{user.phone}</span>
              <span className="text-[15px]"><i className="text-indigo-500 fas fa-globe mx-1.5"></i>{user.website}</span>
            </div>
          </div>)
        })}
      </div>
    </div>

  )
}
export default App;