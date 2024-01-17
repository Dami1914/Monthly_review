import Login from '../components/Login'
import Loginillustrator from '../assets/svgs/Loginillustrator'




const Loginpage = () => {
  return (
    <div className="lg:flex items-center w-full h-full justify-center">
        <Login/>
        <div className="w-full lg:flex hidden justify-center items-center h-full bg-gradient-to-r from-white to-green-500">
            <div className='w-full flex justify-center items-center h-full'>
              <Loginillustrator/>
            </div>
        </div>
    </div>
  )
}

export default Loginpage