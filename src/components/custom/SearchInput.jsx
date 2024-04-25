import React from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ classname, formik }) => {

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search");
    }
  return (
    <div className={`flex flex-col items-center gap-4 ${classname}`}>
      <label className="input input-bordered flex items-center gap-2 w-[50vw] max-sm:w-[90vw]">
        <input 
        name="name"
        id="name"
        type="text" 
        className="grow font-jersey text-xl" 
        placeholder="Search your game"
        onChange={formik?.handleChange}
        value={formik?.values.name}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div>
      <button type="submit" className="btn w-28">Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
