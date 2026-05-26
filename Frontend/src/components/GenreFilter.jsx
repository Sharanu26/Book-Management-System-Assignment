const GenreFilter = ({ genre, setGenre }) => {
    return (
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="bg-slate-700 hover:bg-gray-600 border border-slate-700 rounded-xl px-8  py-0"
      >
        <option value="">All Genres</option>
        <option value="Finance">Finance</option>
        <option value="Self Help">Self Help</option>
        <option value="Fiction">Fiction</option>
        <option value="Technology">Technology</option>
      </select>
    );
  };
  
  export default GenreFilter;

