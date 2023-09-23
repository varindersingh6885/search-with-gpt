import { FormEvent, useState } from "react";
import IconSearch from "../assets/icon-search.svg";

type SearchBarProps = {
  onSubmit: (searchText?: string) => void;
};

export const SearchBar = (props: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText) {
      props.onSubmit(searchText);
    }
  };

  const handleClearSearchText = () => {
    if (searchText) {
      console.log(searchText);
      setSearchText("");
      props.onSubmit();
    }
  };

  return (
    <div className="mb-6 mt-4">
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="border w-[50%] flex justify-between bg-white rounded-l-full">
          <input
            className=" py-4 px-6  rounded-l-full outline-none w-full"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            title="clear"
            className="bg-white p-2 hover:bg-gray-100 cursor-pointer "
            onClick={handleClearSearchText}
            type="button"
          >
            X
          </button>
        </div>
        <button
          className="border p-4 pr-6 pl-2 rounded-r-full bg-white flex items-center hover:bg-gray-100 cursor-pointer"
          type="submit"
        >
          <img src={IconSearch} className="mr-2" />
          Search
        </button>
      </form>
    </div>
  );
};
