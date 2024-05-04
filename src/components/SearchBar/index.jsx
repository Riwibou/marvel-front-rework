const SearchBar = ({ setName, setCounter, setSkip }) => {
  return (
    <div className="relative">
    <input
      className="w-full pl-4 pr-10 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
      type="text"
      placeholder="Search a Hero or Comic ..."
      onChange={(event) => {
        setName(event.target.value);
        setCounter(1);
        setSkip(0);
      }}
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
  );
};

export default SearchBar;
