// import { p2e } from "@/utils/replaceNumber";

import { p2e } from "@/src/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
  type,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className=" p-[10px] lg:w-150 flex flex-col justify-center items-csenter  lg:mr-20  mt-10  text-gray-300 border-[#304ffe] border-dashed border dark:text-black  dark:bg-gray-200">
      <p className="dark:text-black">{title}</p>
      {textarea ? (
        <textarea
          className="h-[100px] text-white focus:outline-0 bg-gray-800 dark:text-black  dark:bg-gray-100"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="text-white  focus:outline-0 bg-gray-800 lg:w-140 h-10 dark:text-black  dark:bg-gray-100"
          type={type}
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
