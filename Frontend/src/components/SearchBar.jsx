const SearchBar = ({ search, setSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-290 bg-slate-800 border border-slate-700 rounded-xl px-7 py-1 outline-none"
      />
    );
  };
  
  export default SearchBar;