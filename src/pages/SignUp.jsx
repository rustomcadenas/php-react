import { useState } from "react";
import { Link } from "react-router-dom";

 

export default function SignUp() {
  
  const [formData, setFromData] = useState({})
  const handleChange = (e) => {
    setFromData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData) 
  }

 
  return (
    <>
    <div className="p-3 max-w-sm sm:max-w-md  mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="border p-2 rounded-lg" id="username" onChange={handleChange}/>
        <input type="text" placeholder="Email" className="border p-2 rounded-lg" id="email" onChange={handleChange}/>
        <input type="password" placeholder="Password" className="border p-2 rounded-lg" id="password" onChange={handleChange}/>
        <button className="bg-slate-700 text-white p-3  rounded-lg uppercase disabled:opacity-80 hover:opacity-95">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
   
    </>
  )
}
