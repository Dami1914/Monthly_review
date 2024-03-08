import Logo from "../../assets/Logo";
import { IoChatbubblesSharp, IoMoon, IoSunny } from "react-icons/io5";
import { HandleLayoutDesign } from "../../context/layoutDesignContext";
import { useEffect, useRef } from "react";

const TopMenu = () => {
  const { handleModeChange, mode } = HandleLayoutDesign();
  const modeRef = useRef({});
  const sunRef = useRef({})
  const moonRef = useRef({})
  useEffect(() => {
    if (mode) {
      modeRef.current.classList.add("changeModeStyle");
      sunRef.current.classList.add('changeSun')
      moonRef.current.classList.add('changeMoon')
    } else {
      modeRef.current.classList.remove("changeModeStyle");
      moonRef.current.classList.remove('changeMoon')
      sunRef.current.classList.remove('changeSun')
    }
  });
  return (
    <div className="w-full hidden lg:flex lg:h-[10%] ">
      <div className="w-[18%] bg-white  dark:bg-darkmode-2 dark:border-x-0 border-x rounded-tr-3xl p-2  h-full flex justify-start px-3 items-center">
        <div className="w-full h-full flex items-center">
          <div className=" w-[74%]">
            <Logo height={"50px"} width={"50px"} />
          </div>
        </div>
      </div>
      <div className="w-[86%]  flex text-slate-600">
        <div className="w-[80%]  h-full"></div>
        <div className="w-[20%] flex text-3xl h-full ">
          <div className="w-1/3 py-1 flex items-center h-full">
            <div className="w-full relative h-1/2 flex dark:bg-darkmode-2 dark:border-slate-600 items-center border rounded-xl py-1 overflow-hidden drop-shadow-sm bg-white">
              <div
                id="modeContainer"
                ref={modeRef}
                className="w-full relative  transform translate-x-0 flex dark:text-slate-400 h-full items-center"
              >
                <div
                  onClick={handleModeChange}
                  ref={moonRef} id="moon" className="flex  opacity-0 absolute  justify-center transform translate-x-14 items-center cursor-pointer"
                >
                  <IoMoon />
                </div>
                <div
                  id="sun"
                  ref={sunRef}
                  onClick={handleModeChange}
                  className="flex absolute text-orange-400 opacity-1 justify-center items-center  cursor-pointer"
                >
                  <IoSunny />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <IoChatbubblesSharp className="cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
