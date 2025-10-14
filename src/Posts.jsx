import { useGetdata } from "../hooks/getdata";

const Posts = () => {
  const { data, loading, error } = useGetdata("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <div className='w-full flex justify-center items-center p-4'><span className='text-[20px] font-semibold text-indigo-400'>LOADING...</span></div>
  if (error) return <div className='w-full flex justify-center items-center p-4'><span className='text-[20px] font-semibold text-red-600'>ERROR TO GET DATA :{error}</span></div>
  return (
    <div>
      <h2 className="text-[20px] font-semibold text-indigo-500">RECENT POSTS</h2>
      <div className="grid grid-cols-2 gap-6">
        {data.map((post) => (
          <div key={post.id} className="bg-white border rounded-lg flex flex-col gap-4">
            <div className="w-full h-[12px] bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg"></div>
            <span className="text-[18px] font-semibold">{post.title}</span>
            <p className="text-[15px] text-gray-400">{post.body}</p>
            <div className="flex space-x-[300px] justify-center items-center p-4">
              <div className="w-[70px] h-[35px] bg-orange-300 rounded-lg text-orange-700 flex justify-center items-center text-[15px]">post #{post.id}</div>
              <button className="w-[100px] h-[45px] bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg cursor-pointer hover:opacity-85">More...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Posts;