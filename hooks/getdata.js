import {
    useEffect,
    useState
} from "react"

export const useGetdata = (url) => {
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        setloading(true)

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("error to get data")
                return res.json()
            })
            .then((data) => {
                setdata(data.slice(0, 12))
                setloading(false)
            })
            .catch((err)=>{
                seterror(err.message)
                setloading(false)
            })
    }, [url])

    return{data,loading,error}
}