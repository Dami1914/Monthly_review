import Logo from "../../assets/Logo"


const TopMenu = () => {
  return (
    <div className="w-full hidden lg:flex lg:h-[10%] bg-white">
        <div className="w-[14%]  h-full flex justify-start px-3 items-center">
            <div className="text-green-600"><Logo height={"50px"} width={"50px"}/></div>
        </div>
        <div></div>
    </div>
  )
}

export default TopMenu