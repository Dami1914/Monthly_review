import React from 'react'

const Login = () => {
  return (
    <div className="w-full flex justify-center p-10 items-center bg-white h-full">
        <fieldset  className="w-full flex flex-col gap-10 p-10 h-full">
            <legend>Login page</legend>
            <div>Welcome to Citytrost Monthly Review Platform</div>
            <form className="w-full  p-10 flex flex-col">
                <div className="w-full flex border-t border-r rounded-b-lg rounded-tr-lg p-5">
                    <div className="w-1/12">f</div>
                    <div className='w-full relative group'>
                        <input name="username" id="username" className="peer p-2 placeholder-transparent  border w-full outline-0 rounded-lg indent-3" type="text"  placeholder="User name"/>
                        <label className='absolute -top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-[.7rem] transition-all peer-placeholder-shown:text-sm text-gray-600 bg-white text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-[21px] left-2 peer' htmlFor="username">User name</label>
                    </div>
                </div>
                <div className="w-full flex p-5 border-t rounded-b-lg border-l rounded-tl-lg">
                    <div className="w-1/12">f</div>
                    <div className='w-full relative group'>
                        <input id="password" name="password" className="peer p-2 placeholder-transparent  border w-full outline-0 rounded-lg indent-3" type="password"  placeholder="Password"/> 
                        <label  className='absolute -top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-[.7rem] bg-white transition-all peer-placeholder-shown:text-sm text-gray-600 left-2 peer-placeholder-shown:text-gray-400  peer-placeholder-shown:left-[21px]' htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="w-full p-5 border-b border-t border-r rounded-b-lg rounded-t-lg">
                    <button className='bg-green-600 w-full rounded-lg p-2 text-white'>Login</button>
                </div>
            </form>
        </fieldset>
    </div>
  )
}

export default Login