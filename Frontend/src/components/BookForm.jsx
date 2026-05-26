import { useState, useEffect } from "react";

const initialState = {
  title: "",
  author: "",
  genre: "",
  year: "",
};

const BookForm = ({ addBook, editingBook, updateBook }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBook) {
      updateBook(formData);
    } else {
      addBook(formData);
    }

    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-8"
    >
      <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Enter book title"
        required
        value={formData.title}
        onChange={(e) => {
          const value = e.target.value;

          // allow letters, numbers, spaces, basic punctuation
          if (/^[a-zA-Z.\s:.,'-]*$/.test(value)) {
            setFormData({ ...formData, title: value });
          }
        }}
        className="bg-slate-900 p-3 rounded-xl"
      />

      <input
        type="text"
        placeholder="Enter author name"
        required
        value={formData.author}
        onChange={(e) => {
          const value = e.target.value;

          // allow only letters, spaces, dots
          if (/^[a-zA-Z.\s]*$/.test(value)) {
            setFormData({ ...formData, author: value });
          }
        }}
        className="bg-slate-900 p-3 rounded-xl"
      />

      <select
        required
        value={formData.genre}
        onChange={(e) =>
          setFormData({ ...formData, genre: e.target.value })
        }
        className="bg-slate-900 p-3 rounded-xl w-full text-gray"
        >
        <option value="">Select Genre</option>
        <option value="finance">Finance</option>
        <option value="technology">Technology</option>
        <option value="selfhelp">Self Help</option>
        <option value="fiction">Fiction</option>
      </select>

      <div className="relative">
      <input
        type="number"
        placeholder="Enter publication year"
        required
        value={formData.year}
        onChange={(e) =>
          setFormData({ ...formData, year: e.target.value })
        }
        min="1000"
        max="9999"
        className="bg-slate-900 p-3 rounded-xl w-full pr-10 text-gray"
      />
      </div>
      </div>                                                                                                                                         

      <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-semibold">
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
};
  
export default BookForm;                        