export const SearchBar = () => {
  return (
    <div className="my-6">
      <form className="flex justify-center">
        <input
          className="border w-[50%] p-4 px-6 rounded-l-full outline-none"
          placeholder="Search"
        />
        <button className="border p-4 px-6 rounded-r-full">Search</button>
      </form>
    </div>
  );
};
