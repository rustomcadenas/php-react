import { Link } from "react-router-dom"
import { useSelector } from "react-redux" 

export default function Header() {
  const { currentUser } = useSelector((state) => state.user)
  console.log(localStorage.getItem('token'))
  console.log(localStorage.getItem('user'))

  return (
    <header  className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-lg flex flex-wrap'>
                <span className='text-slate-500'>Tom</span>
                <span className='text-slate-500'>Cadenas</span>
            </h1>
            </Link>
            <ul className='flex gap-4 text-sm sm:text-base'>
                <Link to="/">
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to="/about">
                <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                
                <Link to="/profile">
                  {currentUser ? (<li className='text-slate-700 hover:underline'>{currentUser.user.username}</li>): (<li className='text-slate-700 hover:underline'>Sign In</li>)}
                </Link>
              </ul>

        </div>
      
        
    </header>
  )
}
