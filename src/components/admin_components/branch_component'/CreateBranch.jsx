import React from "react";

const CreateBranch = () => {
  return (
    <div className="w-full p-[2rem] ">
      <fieldset className="border w-full h-full rounded-xl bg-white">
        <legend className="ml-3  font-bold text-lg">Create Branch</legend>
        <form className="w-full h-full p-4 gap-4">
          <div className="w-full mb-5 rounded-xl bg-green-600 h-[5px]"></div>
          <div className="flex gap-4 ">
            <section className="w-3/5 flex flex-col gap-6">
              <div className="w-full flex justify-between">
                <label htmlFor="branchname">Branch Name</label>
                <input
                  className="outline-green-600  indent-4 w-[60%] rounded border"
                  type="text"
                  id="branchname"
                  name="branchname"
                  placeholder="Add Branch Name"
                />
              </div>
              <div className="w-full flex justify-between ">
                <label htmlFor="branchcontact">Branch Contact</label>
                <input
                  placeholder="Add contact"
                  className="outline-green-600 indent-4 w-[60%] rounded border"
                  type="text"
                  id="branchcontact"
                  name="branchcontact"
                />
              </div>
              <div className="w-full flex justify-between ">
                <label htmlFor="branchemail">Branch Email</label>
                <input
                  className="outline-green-600  indent-4 w-[60%] rounded border"
                  type="text"
                  id="branchemail"
                  name="branchemail"
                  placeholder="Add Branch Email"
                />
              </div>
              <div className="w-full flex justify-between ">
                <label htmlFor="branchaddress">Branch Address</label>
                <input
                  className="outline-green-600  indent-4 w-[60%] rounded border"
                  type="text"
                  id="branchaddress"
                  name="branchadress"
                  placeholder="Add Branch Address"
                />
              </div>
              <div className=" w-ful flex gap-8 ">
                <div className="w-full flex justify-between border rounded p-1 ">
                  <label htmlFor="resumptiontime">Resumption Time</label>
                  <input
                    className="outline-green-600  rounded border"
                    type="time"
                    id="resumptiontime"
                    name="resumptiontime"
                  />
                </div>
                <div className="w-full flex justify-between border rounded p-1 ">
                  <label htmlFor="closingtime">Closing Time</label>
                  <input
                    className="outline-green-600  rounded border"
                    type="time"
                    id="closingtime"
                    name="closingtime"
                  />
                </div>
              </div>
            </section>
            <section className="w-2/5 border flex">
                <div className="flex justify-center gap-3 flex-col items-center w-[60%]">
                  <label className="" htmlFor="branchmanager">Choose Branch Manager</label>
                  <select name="branchmanager" className="border px-2 rounded" id="branchmanager">
                    <option value="">--Choose Manager--</option>
                  </select>
                </div>
                <div className="w-[40%] flex gap-4 flex-col justify-center items-center">
                  <div className="w-[150px] h-[150px] border rounded-[50%] h-">
                    <img src="" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                      <div className="w-full flex justify-center text-slate-700 items-center font-bold">Damilola jibowu</div>
                  </div>
                </div>
            </section>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateBranch;
