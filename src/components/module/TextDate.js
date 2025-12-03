import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
function TextDate({ profileData, setProfileData }) {
  const { constructionDate } = profileData;
  const changHandler = (e) => {
    const deta = new Date(e);
    setProfileData({ ...profileData, constructionDate: deta });
  };
  return (
    <div className="w-full lg:mr-35 mt-5  dark:text-black">
      <p>تاریخ ساخت:</p>
      <DatePicker
        className="purple  "
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={changHandler}
        value={constructionDate}
      />
    </div>
  );
}

export default TextDate;
