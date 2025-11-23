function RadioButton({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className=" mt-5 w-full ">
      <p className="lg:mr-20">دسته بندی </p>
      <div className="flex mt-2 bg-rsed-400 text-xs justify-center items-center gap-3 lg:gap-8">
        <div className="bg-[#4c67ff] rounded-xl  p-1 lg:p-3 ">
          <label htmlFor="ps5">PS5</label>
          <input
            className=""
            type="radio"
            value="ps5"
            name="category"
            id="ps5"
            checked={category === "ps5"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3 ">
          <label htmlFor="xbox">Xbox</label>
          <input
            type="radio"
            value="xbox"
            name="category"
            id="xbox"
            checked={category === "xbox"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3">
          <label htmlFor="ps4">PS4</label>
          <input
            type="radio"
            value="ps4"
            name="category"
            id="ps4"
            checked={category === "ps4"}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-[#4c67ff] rounded-xl p-1 lg:p-3">
          <label htmlFor="pc">PC</label>
          <input
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
