const ClearFilter = ({ setGenre, setSearch }) => {
    const handleClear = () => {
      setGenre("");
      setSearch("");
    };
  
    return (
      <button
        onClick={handleClear}
        className="bg-slate-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl transition"
      >
        Clear Filters
      </button>
    );
  };
  
  export default ClearFilter;