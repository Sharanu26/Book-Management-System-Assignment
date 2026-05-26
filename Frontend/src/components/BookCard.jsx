import { FaEdit, FaTrash } from "react-icons/fa";
import {
  FaMoneyBillWave,
  FaLaptopCode,
  FaBrain,
  FaBookOpen,
} from "react-icons/fa";

// Icon mapping based on genre
const genreIconMap = {
  finance: <FaMoneyBillWave className="text-green-400" />,
  technology: <FaLaptopCode className="text-cyan-400" />,
  selfhelp: <FaBrain className="text-pink-400" />,
  fiction: <FaBookOpen className="text-yellow-400" />,
};

const BookCard = ({ book, onEdit, onDelete }) => {
  const genreKey = (book.genre || "").toLowerCase().replace(/\s/g, "");

  return (
    <div className="bg-slate-800 rounded-2xl p-5 shadow-lg border border-slate-700 hover:scale-105 transition">
      
      {/* Title with icon */}
      <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
        {genreIconMap[genreKey] || <FaBookOpen className="text-gray-400" />}
        {book.title}
      </h2>

      <p className="text-gray-300 mt-2">
        Author: {book.author}
      </p>

      <p className="text-gray-400">
        Genre: {book.genre}
      </p>

      <p className="text-gray-500">
        Year: {book.year}
      </p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => onEdit(book)}
          className="bg-yellow-500 px-4 py-2 rounded-lg"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default BookCard;