import React from "react";
import { useState } from "react";
const CreateMarketer = () => {
    const [marketerData,setMarketerData] = useState({
        marketername:"",
        contact: "",
        dob:"",
        gender:"",
        bankname:"",
        accountnumber:"",
        accountname:"",
        bvn:""
    })
    function handleChange(event){

    }
  return (
    <div className="w-full h-full p-[2rem]">
      <fieldset className="w-full pt bg-white border rounded-xl h-full">
        <legend className="font-bold text-lg mb-5 ml-3">Create Marketer</legend>
        <form className="w-full p-3 gap-10 flex flex-col ">
        <div className="w-full rounded-xl bg-green-600 h-[5px]"></div>
          <section className="w-full flex rounded p-5 border">
            <div className="flex w-[50%] gap-4">
              <label htmlFor="marketername">Marketer Name</label>
              <input
                type="text"
                className="border rounded  outline-green-600 w-[70%] h-[30px]"
                id="marketername"
                name="marketername"
                value={marketerData.marketername}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-[50%] gap-4">
              <label htmlFor="marketercontact">Contact</label>
              <input
                type="tel"
                className="border rounded  outline-green-600 w-[70%] h-[30px]"
                id="marketercontact"
                name="marketercontact"
                value={marketerData.contact}
                onChange={handleChange}
              />
            </div>
          </section>
          <section className="w-full border rounded flex flex-col gap-5 p-5 ">
            <div className="flex gap-5 items-center">
              <div className="flex gap-4 ">
                <label htmlFor="age">DOB</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={marketerData.dob}
                  onChange={handleChange}
                  className="border  outline-green-600 rounded"
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <select
                  name="gender"
                  id="gender"
                  className="border  outline-green-600 rounded px-2"
                  value={marketerData.gender}
                >
                  <option value="">---Select Gender---</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="flex gap-4 w-[70%]">
                <label htmlFor="adrress">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={marketerData.address}
                  className="border  outline-green-600 rounded w-full"
                />
              </div>
            </div>
            <div className="w-full gap-y-4 flex flex-col bg-slate-50 border rounded-md p-4">
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="bankname">Bank Name:</label>
                <input
                  value={marketerData.bankname}
                  onChange={handleChange}
                  className="w-[65%] rounded-md   h-[30px] indent-2 border outline-green-200"
                  type="text"
                  placeholder="Bank Name"
                  id="bankname"
                  name="bankname"
                />
              </div>
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="accountname">Account Name:</label>
                <input
                  value={marketerData.accountname}
                  onChange={handleChange}
                  className="w-[65%] rounded-md   h-[30px] indent-2 border outline-green-200"
                  type="text"
                  placeholder="Account Name"
                  id="accountname"
                  name="accountname"
                />
              </div>
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="accountnumber">Account Number:</label>
                <input
                  value={marketerData.accountnumber}
                  onChange={handleChange}
                  className="w-[65%] rounded-md   h-[30px] indent-2 border outline-green-200"
                  type="number"
                  placeholder="Account Number"
                  id="accountnumber"
                  name="accountnumber"
                />
              </div>
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="bvn">BVN :</label>
                <input
                  value={marketerData.bvn}
                  onChange={handleChange}
                  className="w-[65%] rounded-md  h-[30px] indent-2 border outline-green-200"
                  type="number"
                  placeholder="Bvn Number"
                  id="bvnnumber"
                  name="bvn"
                />
              </div>

            </div>
          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateMarketer;
