import { useContext } from "react";
import { BooksContext } from "../context/context";

const BookList = () => {
  const { books, loading, error, deleteBook } = useContext(BooksContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title} — {book.author}
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
