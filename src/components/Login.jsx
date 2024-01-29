import { useEffect, useRef, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { GiEvilEyes } from "react-icons/gi";
import { PiEyeSlashFill } from "react-icons/pi";
import Logo from '../assets/Logo';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const passRef = useRef(null)
    const [seePass, setSeePass] = useState(false)
    const navigate = useNavigate()

    const [userCredential,setUserCredential] = useState({
        username: "",
        password:""
    })

    function handleLogin(){
        navigate("/userpage")
    }
    function handleChange(event){
        const {value,name} = event.target
        setUserCredential(prev=>{
            return {...prev, [name]:value}
        })
    }
    useEffect(()=>{
        if(seePass){
            passRef.current.type = "text"
        }else{
            passRef.current.type = "password"
        }
    })

  return (
    <div className="w-full flex justify-center lg:p-10 p-5 items-center bg-white h-full">
        <fieldset  className="w-full flex flex-col gap-3 p-5 lg:p-10 h-full">
            <legend className='text-xl font-bold border rounded-lg flex justify-center items-center p-1 px-3 text-gray-600'>Login</legend>
            <div className=' text-green-600 flex justify-center'><Logo height={"80px"} width={"80px"}/></div>
            <div className='text-lg flex justify-center items-center text-gray-700 font-bold'>Welcome to Citytrost Monthly Review Platform</div>
            <form className="w-full  lg:p-5 p-2 flex flex-col">
                <div className="w-full px-2  lg:gap-0 gap-3 flex border-t border-r border-green-200 rounded-b-lg rounded-tr-lg p-5">
                    <div className="w-1/12 text-gray-700  flex justify-center items-center text-2xl"><FaUserCircle/></div>
                    <div className='w-full relative group'>
                        <input name="username" onChange={handleChange} value={userCredential.username} id="username" className="peer p-2 placeholder-transparent  border w-full outline-0 rounded-lg indent-3" type="text"  placeholder="User name"/>
                        <label className='absolute -top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-[.7rem] transition-all peer-placeholder-shown:text-sm text-gray-600 bg-white text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-[21px] left-2 peer' htmlFor="username">User name</label>
                    </div>
                </div>
                <div className="w-full flex px-2 p-5 lg:gap-0 gap-3 border-t border-green-200 rounded-b-lg border-l rounded-tl-lg">
                    <div className="w-1/12 text-gray-700 flex justify-center items-center text-2xl"><PiPasswordBold /></div>
                    <div className='w-full relative group'>
                        <input ref={passRef} id="password" onChange={handleChange} value={userCredential.password} name="password" className="peer p-2 placeholder-transparent  border w-full outline-0 rounded-lg indent-3" type="password"  placeholder="Password"/> 
                        <label  className='absolute -top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-[.7rem] bg-white transition-all peer-placeholder-shown:text-sm text-gray-600 left-2 peer-placeholder-shown:text-gray-400  peer-placeholder-shown:left-[21px]' htmlFor="password">Password</label>
                        {
                            userCredential.password === ""?""
                            :
                            <div className='absolute flex justify-center items-center mr-2 right-0 top-1 text-2xl w-[30px] h-[30px] '> 
                                {seePass?
                                    <div onClick={()=>setSeePass(!seePass)} className='cursor-pointer'><GiEvilEyes /></div>
                                :
                                    <div onClick={()=>setSeePass(!seePass)} className='cursor-pointer '><PiEyeSlashFill /></div>
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="w-full p-5 border-b border-t border-green-200 border-r rounded-b-lg rounded-t-lg">
                    <button onClick={handleLogin} className='bg-green-600 hover:bg-white hover:text-green-600 hover:border hover:border-green-600 w-full rounded-lg p-2 text-white'>Login</button>
                </div>
            </form>
        </fieldset>
    </div>
  )
}

export default Login