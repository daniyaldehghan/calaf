import React from "react";

function Workradio({ profileData, setProfileData }) {
  const { story } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className="p-[10px] lg:w-150  flex flex-col w-50 justify-center items-csenter  lg:mr-20  mt-10  text-gray-300 border-[#304ffe] border-dashed border ">
      <p className=" dark:text-black">وضعیت</p>
      <div className="flex mt-2 bg-rsed-400 text-xs justify-center items-center gap-3 lg:gap-8">
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3 flex justify-center items-center gap-2 ">
          <label className="lg:text-sm " htmlFor="نو">
            نو
          </label>
          <input
            className="  accent-indigo-900   lg:size-4"
            type="checkbox"
            value="نو"
            name="story"
            id="نو"
            checked={story === "نو"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3 flex justify-center items-center gap-2 ">
          <label className="lg:text-sm" htmlFor="درحد نو">
            درحدنو
          </label>
          <input
            className="  accent-indigo-900   lg:size-4 "
            type="checkbox"
            value="درحدنو"
            name="story"
            id="درحدنو"
            checked={story === "درحدنو"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3 flex justify-center items-center gap-2 ">
          <label className="lg:text-sm" htmlFor="کارکرده">
            کارکرده
          </label>
          <input
            className="  accent-indigo-900   lg:size-4"
            type="checkbox"
            value="کارکرده"
            name="story"
            id="کارکرده"
            checked={story === "کارکرده"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Workradio;
