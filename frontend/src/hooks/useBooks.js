import { useEffect, useState } from "react";

const useBooks = (endpoint) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(endpoint);

                if (!response.ok) throw new Error("Network error");

                const result = await response.json();
                setBooks(result);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [endpoint]);

  
    const addBook = (newBook) => {
        setBooks(prev => [...prev, newBook]);
    };

    const deleteBook = (id) => {
        setBooks(prev => prev.filter(book => book.id !== id));
    };

    return { books, loading, error, addBook, deleteBook };
};

export default useBooks;
