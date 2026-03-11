import { useState, useEffect } from "react";
import BookList from "../components/BookList";

const BookListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <>
      <h2>All Books</h2>
      <BookList books={books} />
    </>
  );
};

export default BookListPage;
