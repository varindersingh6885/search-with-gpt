import { FormEvent, useState } from "react";

type SearchBarProps = {
  onSubmit: (searchText: string) => void;
};

export const SearchBar = (props: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(searchText);
  };

  return (
    <div className="my-6">
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          className="border w-[50%] p-4 px-6 rounded-l-full outline-none"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="border p-4 px-6 rounded-r-full" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
