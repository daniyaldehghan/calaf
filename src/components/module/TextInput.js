// import { p2e } from "@/utils/replaceNumber";

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
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className=" p-[10px] lg:w-300  lg:mr-20  mt-10  text-gray-300 border-[#304ffe] border-dashed border">
      <p>{title}</p>
      {textarea ? (
        <textarea
          className="h-[100px] text-white focus:outline-0 bg-gray-800"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="text-white  focus:outline-0 bg-gray-800 "
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
