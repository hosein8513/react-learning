import { Link, Outlet } from 'react-router';
import { useGetdata } from '../hooks/getdata';

const Users = () => {
  const { data, loading, error } = useGetdata("https://jsonplaceholder.typicode.com/users");
  if (loading) return <div className='w-full flex justify-center items-center p-4'><span className='text-[20px] font-semibold text-indigo-400'>LOADING...</span></div>
  if (error) return <div className='w-full flex justify-center items-center p-4'><span className='text-[20px] font-semibold text-red-600'>ERROR TO GET DATA :{error}</span></div>
  return (
    <div className='w-[750px] p-4 rounded-lg border-0 flex justify-center items-center flex-col'>
      <Outlet/>
      <Link to={"adduser"} className='w-[70px] h-[40px] text-center text-white rounded-lg bg-blue-500'>ADD</Link>
      <h2 className='text-[20px] font-semibold text-indigo-500 p-4'>USERS LIST</h2>
      <ul className='bg-white w-[90%] rounded-lg'>
        {data.map((users) => (
          <li key={users.id} className='p-4 w-[full]'>
            <Link to={`/users/user-details/${users.id}`} className='w-full flex gap-3 relative items-center'>
              <div className='w-[50px] h-[50px] rounded-full bg-indigo-500 text-white flex justify-center items-center'>{users.name.charAt(0)}</div>
              <span className='text-[15px] font-semibold text-indigo-500'>{users.name}</span>
              <div className='absolute right-2 flex items-center gap-1 transition-all duration-150'><i className='text-indigo-400 fas fa-envelope'></i>
              <a className='text-indigo-300 cursor-pointer hover:text-indigo-500'>{users.email}</a>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Users;