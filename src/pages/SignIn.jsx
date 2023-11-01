import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {signInStart, signInSuccess, signInFailure} from '../redux/user/UserSlice'


const SignIn = () => {

  const [formData, setFromData] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
     setFromData({
      ...formData,
      [e.target.id]: e.target.value,
     }) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        dispatch(signInStart())
        const res = await fetch('http://localhost/koliling/api/route/login.php', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          }, 
          body: JSON.stringify(formData)
        })
        const data = await res.json()
        if (data.success == false) {
          dispatch(signInFailure(data.message))
          return;
        }
        dispatch(signInSuccess(data))
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.user)
        // document.cookie = data.access_token;

        // navigate('/')
        console.log(data)
    } catch (error) {
      dispatch(signInFailure(data.message))
    }
  }


  return (
    <>
    <div className='max-w-sm mx-auto text-center mt-5'>
      <h1 className='font-bold text-3xl p-3'>Sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-3'> 
        <input type="text" placeholder='Username' id="username" className='border p-2 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id="password" className='border p-2 rounded-lg'onChange={handleChange}/>
        <button className='p-2 border rounded-md font-medium text-lg hover:opacity-95 bg-slate-500 text-white' disabled={loading}>{ loading ? 'Loading...' : 'Log in'}</button>
      </form>
      {error && <span className="text-red-600">{error}</span>}
    </div>
  </>
  )
}

export default SignIn

 