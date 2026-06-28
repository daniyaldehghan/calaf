function RadioButton({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className=" mt-6  lg:w-150 lg:mr-20 border-[#304ffe] border-dashed border  dark:bg-gray-200">
      <p className="lg:mr-2 dark:text-black">دسته بندی </p>
      <div className="flex mt-2 bg-rsed-400 max-md:grid px-2 max-md:grid-cols-2  text-xs lg:mb-5 justify-center items-center gap-2 mb-2  lg:gap-8">
        <div className="bg-[#4c67ff] rounded-xl    p-1 lg:p-3 flex justify-center  gap-2 ">
          <label htmlFor="all">همه پلتفرم ها</label>
          <input
            className=" accent-amber-500"
            type="radio"
            value="all"
            name="category"
            id="all"
            checked={category === "all"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl  p-1 lg:p-3 flex justify-center  gap-2 ">
          <label htmlFor="ps5">PS5</label>
          <input
            className=" accent-amber-500"
            type="radio"
            value="ps5"
            name="category"
            id="ps5"
            checked={category === "ps5"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3  flex justify-center  gap-2 ">
          <label htmlFor="xbox">Xbox</label>
          <input
            className=" accent-amber-500"
            type="radio"
            value="xbox"
            name="category"
            id="xbox"
            checked={category === "xbox"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3 flex justify-center  gap-2">
          <label className="" htmlFor="ps4">
            PS4
          </label>
          <input
            className=" accent-amber-500"
            type="radio"
            value="ps4"
            name="category"
            id="ps4"
            checked={category === "ps4"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3 flex justify-center  gap-2">
          <label className="lg:text-sm" htmlFor="pc">
            PC
          </label>
          <input
            className=" accent-amber-500"
            type="radio"
            value="pc"
            name="category"
            id="pc"
            checked={category === "pc"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
