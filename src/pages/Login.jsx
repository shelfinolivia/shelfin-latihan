import { useState } from "react"
import { handleLogin } from "../Api";
import {setTokens} from "../Api"
import { useAuth } from "../context/Auth";

export default function Login({ onLogin }) {
  const { doLogin } = useAuth()
  

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = async () => {
    doLogin(email, password)
    // const apiLogin = await Logins(email,password);
    // console.log(apiLogin)
    // if(apiLogin.status === 200){
    //   onLogin(apiLogin.data.data.acsessToken)
    //   setTokens(apiLogin.data.data.acsessToken)
    // }
  }

  return (
    <div>
      <h1 className="text-center text-5xl p-5">LOGIN</h1>
      <div className="createNote w-[400px] mx-auto m-10">
        <div className='flex flex-col'>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' name='email' className='border-2 border-blue-200 p-2 mb-2' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' name='password' className='border-2 border-blue-200 p-2 mb-2' />

          <button onClick={handleClick} type='submit' className='bg-blue-500 px-5 py-3 text-white mt-4' >Submit</button>
        </div>
      </div>
    </div>
  )
}