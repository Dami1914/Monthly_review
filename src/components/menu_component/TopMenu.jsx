import Logo from "../../assets/Logo";
import { IoChatbubblesSharp } from "react-icons/io5";

const TopMenu = () => {
  return (
    <div className="w-full hidden lg:flex lg:h-[10%] bg-white">
      <div className="w-[14%]  h-full flex justify-start px-3 items-center">
        <div className="text-green-600">
          <Logo height={"50px"} width={"50px"} />
        </div>
      </div>
      <div className="w-[86%] border flex text-slate-600">
        <div className="w-[80%] border h-full"></div>
        <div className="w-[20%] flex text-3xl h-full ">
          <div className="w-1/2">

          </div>
          <div className="w-1/2 flex justify-center items-center">
            <IoChatbubblesSharp className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
