import Form from "next/form";

function Search() {
  return (
    <Form action="/sellgame">
      <div className="w-full max-lg:w-12s0 flex justify-bsetween">
        <input
          name="category"
          placeholder="دنبال چه آگهی هستی؟(ps4،ps5،pc،xbox)"
          className="w-full  focus:outline-0 placeholder:text-sm"
        />
        <button type="sumbit">
          <img src="/svg/search.svg" className="w-s6 pls-2   " />
        </button>
      </div>
    </Form>
  );
}

export default Search;
