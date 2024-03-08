import React, { useContext, useState } from "react";
import { HandleSubmitDataContext } from "../../../context/dataSubmitContext";

const CreateBranch = () => {
  const {handleSubmit,handleChange} = HandleSubmitDataContext()

  const [branchData,setBranchData] = useState({})

  return (
    <div className="w-full p-[2rem] ">
      <fieldset className="border w-full h-full rounded-xl bg-white">
        <legend className="ml-3 mb-4 font-bold text-lg">Create Branch</legend>
        <form className="w-full flex flex-col h-full p-4 gap-5">
          <div className="w-full mb-5 rounded-xl bg-green-600 h-[5px]"></div>
          <div className="flex gap-4 ">
            <section className="w-3/5 flex flex-col gap-6">
              <div className="w-full flex justify-between">
                <label htmlFor="branchname">Branch Name</label>
                <input
                  className="w-[60%]"
                  type="text"
                  id="branchname"
                  name="branchName"
                  placeholder="Add Branch Name"
                  value={branchData.branchName}
                  onChange={(event)=>{handleChange(event,setBranchData)}}
                />
              </div>
              <div className="w-full flex justify-between ">
                <label htmlFor="branchcontact">Branch Contact</label>
                <input
                  placeholder="Add contact"
                  className=" w-[60%]"
                  type="text"
                  id="branchcontact"
                  name="branchContact"
                  value={branchData.branchContact}
                  onChange={(event)=>{handleChange(event,setBranchData)}}
                />
              </div>
              <div className="w-full flex justify-between ">
                <label htmlFor="branchemail">Branch Email</label>
                <input
                  className=" w-[60%]"
                  type="text"
                  id="branchemail"
                  name="branchEmail"
                  placeholder="Add Branch Email"
                  value={branchData.branchEmail}
                  onChange={(event)=>{handleChange(event,setBranchData)}}
                />
              </div>
              <div className="w-full flex justify-between ">
                <label htmlFor="branchaddress">Branch Address</label>
                <input
                  className="w-[60%]"
                  type="text"
                  id="branchaddress"
                  name="branchAddress"
                  placeholder="Add Branch Address"
                  value={branchData.branchAddress}
                  onChange={(event)=>{handleChange(event,setBranchData)}}
                />
              </div>
              <div className=" w-ful flex gap-8 ">
                <div className="w-full flex items-center dark:border-slate-600 justify-between border rounded p-1 ">
                  <label htmlFor="resumptiontime">Resumption Time</label>
                  <input
                    className=""
                    type="time"
                    id="resumptiontime"
                    name="resumptionTime"
                    value={branchData.resumptionTime}
                    onChange={(event)=>{handleChange(event,setBranchData)}}
                  />
                </div>
                <div className="w-full flex items-center dark:border-slate-600 justify-between border rounded p-1 ">
                  <label htmlFor="closingtime">Closing Time</label>
                  <input
                    className=""
                    type="time"
                    id="closingtime"
                    name="closingTime"
                    value={branchData.closingTime}
                    onChange={(event)=>{handleChange(event,setBranchData)}}
                  />
                </div>
              </div>
            </section>
            <section className="w-2/5 border flex">
              <div className="flex justify-center gap-3 flex-col items-center w-[60%]">
                <label className="" htmlFor="branchmanager">
                  Choose Branch Manager
                </label>
                <select
                  name="branchManager"
                  className=""
                  id="branchmanager"
                  value={branchData.branchManager}
                  onChange={(event)=>{handleChange(event,setBranchData)}}
                >
                  <option value="">--Choose Manager--</option>
                </select>
              </div>
              <div className="w-[40%] flex gap-4 flex-col justify-center items-center">
                <div className="w-[150px] h-[150px] border rounded-[50%] h-">
                  <img src="" alt="" />
                </div>
                <div className="w-full flex justify-center items-center">
                  <div className="w-full flex justify-center text-slate-700 items-center font-bold">
                    Damilola jibowu
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="w-full border font-bold rounded p-3 flex items-center gap-3">
            <button onClick={(event)=>handleSubmit(event,branchData)} className="btn1">Submit </button>
            <button className="btn2">Cancel</button>
          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateBranch;
