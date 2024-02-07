import React, { useState } from "react";

const CreateUser = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    contact:"",
    email: "",
    address: "",
    position: "",
    branch: "",
    image: imageUrl,
  });

  function handleChange(event){
      const {name,value} = event.target
      setUserData((prev)=>{
          return {...prev,[name]:value}
      })
  }
 function handleFormCancellation(event){
  event.preventDefault()
  setUserData({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
    position: "",
    branch: "",
    image: "",
    contact:""
  })
 }

  function handleImageUpload(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className="w-full  flex items-center justify-center p-[2rem]">
      <fieldset className="w-full bg-white border h-full flex flex-col gap-5 rounded-xl">
        <legend className="ml-5 font-bold text-lg">Create User</legend>
        <form className="w-full h-full flex flex-col gap-6 p-4">
          <div className="w-full rounded-xl bg-green-600 h-[5px]"></div>
          <section className="w-full justify-center items-center flex-col gap-4 flex p-4">
            <div className="w-[200px] h-[200px] border border-green-500 p-1 rounded-[50%] overflow-hidden flex justify-center items-center ">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  className="w-full h-full rounded-[50%]"
                  alt="user image"
                />
              ) : (
                ""
              )}
            </div>
            <div className="w-full  flex justify-center items-center gap-3 ">
              <label htmlFor="" className="mb-1">
                Upload Image
              </label>
              <input
                onChange={handleImageUpload}
                type="file"
                accept="image/*"
                className="border rounded"
                value=""
              />
            </div>
          </section>
          <section className="w-full p-5 border justify-center flex rounded">
            <div className="w-full flex  gap-4">
              <label htmlFor="">FirstName </label>
              <input
                type="text"
                placeholder="firstname"
                className="w-[80%] outline-green-400 h-[30px] rounded  border indent-4"
                value={userData.firstname}
                name="firstname"
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex gap-4">
              <label htmlFor="">LastName</label>
              <input
                type="text"
                placeholder="lastname"
                className="w-[80%] outline-green-400 h-[30px] rounded  border indent-4"
                value={userData.lastname}
                name="lastname"
                onChange={handleChange}
              />
            </div>
          </section>
          <section className="w-full flex border rounded flex-col ">
            <div className="w-full flex ">
              <div className="w-full flex gap-4 p-4  items-center">
                <label htmlFor="">DOB</label>
                <input
                  type="date"
                  className="border outline-green-400 h-[30px] rounded"
                  value={userData.dob}
                  name="dob"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-4 p-4 items-center">
                <label htmlFor="">Gender</label>
                <select
                  name="gender"
                  className="border outline-green-400  px-2 h-[30px] rounded"
                  value={userData.gender}
                  onChange={handleChange}
                >
                  <option value="">--Choose Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="w-full flex gap-4 p-4 items-center">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="border w-[85%] outline-green-400  h-[30px] rounded indent-3"
                  placeholder="email"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full flex p-4 gap-4">
              <div className="w-full rounded gap-3 flex">
                <label htmlFor="">Contact</label>
                <input
                  type="tel"
                  className="w-full outline-green-400  indent-3 border"
                  placeholder="Contact"
                  name="contact"
                  value={userData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full rounded gap-3 flex">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="border outline-green-400  indent-3 w-full"
                  placeholder="Address"
                  value={userData.address}
                  onChange={handleChange}
                  name="address"
                />
              </div>
            </div>
            <div className="flex p-4 gap-3">
              <div className="w-full rounded gap-3 flex">
                <label htmlFor="">Branch</label>
                <input
                  type="text"
                  className=" outline-green-400  border w-full indent-3"
                  placeholder="Branch"
                  value={userData.branch}
                  name="branch"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full rounded gap-3 flex">
                <label htmlFor="">Position</label>
                <input
                  type="text"
                  className="border outline-green-400  w-full indent-3"
                  placeholder="Position"
                  name="position"
                  value={userData.position}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>
          <section className="w-full flex gap-4">
            <button className="p-2 bg-green-400 text-green-800 rounded font-bold">
              Submit
            </button>
            <button onClick={handleFormCancellation} className="p-2 bg-red-400 text-red-800 rounded font-bold">
              Cancel
            </button>
          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateUser;
