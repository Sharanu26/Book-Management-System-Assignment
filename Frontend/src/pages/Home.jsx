import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import toast, { Toaster } from "react-hot-toast";
import ClearFilter from "../components/ClearFilter";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const res = await api.get("/books");

      setBooks(res.data);
    } catch (error) {
      toast.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    try {
      const res = await api.post("/books", book);

      setBooks([...books, res.data]);

      toast.success("Book Added");
    } catch (error) {
      toast.error("Failed to add book");
    }
  };

  const updateBook = async (book) => {
    try {
      await api.put(`/books/${book.id}`, book);

      setBooks(
        books.map((b) => (b.id === book.id ? book : b))
      );

      setEditingBook(null);

      toast.success("Book Updated");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`);

      setBooks(books.filter((book) => book.id !== id));

      toast.success("Book Deleted");
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
    genre === "" ||  book.genre.toLowerCase() === genre.toLowerCase();

    return matchesSearch && matchesGenre;
  });

  return (
    <>
      <Navbar />

      <Toaster />

      <div className="max-w-7xl mx-auto px-5 py-10">
        <BookForm
          addBook={addBook}
          editingBook={editingBook}
          updateBook={updateBook}
        />

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-7">
          <SearchBar search={search} setSearch={setSearch} />

          <GenreFilter genre={genre} setGenre={setGenre} />
          <ClearFilter setGenre={setGenre} setSearch={setSearch} />
        </div>

        {loading ? (
          <Loader />
        ) : filteredBooks.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={setEditingBook}
                onDelete={deleteBook}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
