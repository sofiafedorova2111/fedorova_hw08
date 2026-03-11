import { useContext, useState } from "react";
import { BooksContext } from "../context/context";

export default function AddBookPage() {
 
  const { addBook } = useContext(BooksContext);

  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    
    const newBook = {
      title: title,
      author: author
    };

    
    addBook(newBook);

    
    setTitle("");
    setAuthor("");
  }

  return (
    <div>
      <h2>Add a Book</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
