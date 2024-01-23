import MiniSideMenu from "./admin_components/MiniSideMenu";

const Admin = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-[10%]  border backdrop-filter backdrop-blur-2xl"></div>
      <div className="w-full flex h-[90%]">
        <div className="w-[15%] border-r bg-white">
          <MiniSideMenu/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Admin;
