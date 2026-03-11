import { createContext } from "react";
import useBooks from "../hooks/useBooks";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const { books, loading, error, addBook, deleteBook } =
        useBooks("http://localhost:3000/books");

    return (
        <BooksContext.Provider value={{ books, loading, error, addBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );
}
