import { useState } from "react";

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>Author:
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>

      <label>Genre:
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
