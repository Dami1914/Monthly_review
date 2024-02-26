import Logo from "../../assets/Logo";
import { IoChatbubblesSharp, IoMoon, IoSunny } from "react-icons/io5";
import { HandleLayoutDesign } from "../../context/layoutDesignContext";
import { useEffect, useRef } from "react";

const TopMenu = () => {
  const { handleModeChange, mode } = HandleLayoutDesign();
  const modeRef = useRef({});
  useEffect(() => {
    if (mode) {
      modeRef.current.classList.add("changeModeStyle");
    } else {
      modeRef.current.classList.remove("changeModeStyle");
    }
  });
  return (
    <div className="w-full hidden lg:flex lg:h-[10%] ">
      <div className="w-[18%] bg-green-600 border-x rounded-tr-3xl p-2  h-full flex justify-start px-3 items-center">
        <div className="w-full justify-center h-full flex items-center">
          <div className="text-white w-[74%]">
            <Logo height={"50px"} width={"50px"} />
          </div>
        </div>
      </div>
      <div className="w-[86%]  flex text-slate-600">
        <div className="w-[80%]  h-full"></div>
        <div className="w-[20%] flex text-3xl h-full ">
          <div className="w-1/3 py-1 flex items-center h-full">
            <div className="w-full relative h-1/2 flex items-center border rounded-xl py-1 overflow-hidden drop-shadow-sm bg-white">
              <div
                ref={modeRef}
                className="absolute left-4 flex justify-center items-center"
              >
                <div
                  onClick={handleModeChange}
                  className="flex absolute opacity-0 justify-center items-center cursor-pointer"
                >
                  <IoMoon />
                </div>
                <div
                  onClick={handleModeChange}
                  className="flex absolute justify-center items-center  cursor-pointer"
                >
                  <IoSunny />
                </div>
              </div>
            </div>
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
