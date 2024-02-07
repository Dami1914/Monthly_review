import React from "react";

const CreateMarket = () => {
  return (
    <div className="w-full  h-full p-[2rem]">
      <fieldset className="border h-full bg-white rounded-xl">
        <legend className=" font-bold ml-4 text-lg">Create Market</legend>
        <form className="w-full p-3 flex flex-col gap-4 mt-7">
          <div className="w-full rounded-xl bg-green-600 h-[5px]"></div>
          <section className="w-full flex flex-col gap-8 bg-white justify-between p-4 rounded border">
            <div className="flex gap-4">
              <label htmlFor="">Market Name</label>
              <input type="text" className="border rounded   outline-green-600 " id="marketname" name="marketname" value={""} />
            </div>
            <div className="flex  gap-4">
            <label htmlFor="marketer">Head Marketer</label>
            <select name="marketer" id="marketer" className="border outline-green-600  rounded px-2">
                <option value="">--Choose Marketer--</option>
              </select>
            </div>
            <div className="flex  gap-4">
              <label htmlFor="">Contact</label>
              <input type="tel" className="border rounded  outline-green-600 " id="contact" name="contact" value={""} />
            </div>
            <div className="flex gap-4">
              <label htmlFor="branch">Branch</label>
              <select name="branch" id="branch" className="border  outline-green-600 flex gap-3 rounded">
                <option value="">---Choose Branch---</option>
                <option value="Mushin">Mushin</option>
                <option value="Ilasamaja">Ilasamja</option>
                <option value="Ilasamaja">Ladipo</option>
              </select>
            </div>
          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateMarket;
