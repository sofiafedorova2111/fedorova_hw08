import { useEffect, useState } from 'react';

const DeleteBookPage = () => {
    const [deleteId, setDeleteId] = useState("");
    const [books, setBooks] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState("");
    const [deletedBookData, setDeletedBookData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/books/" + deleteId, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then((data) => {
            setDeleteSuccess(data.message);
            setDeletedBookData(data.bookDeleted);
        });
    };

    return (
        <>
            <h3>Delete Books</h3>
            <p>Deleting book #{deleteId}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="selDelete">Select a book to delete:</label>

                <select
                    id="selDelete"
                    onChange={(event) => setDeleteId(event.target.value)}
                >
                    {books.map(book => (
                        <option key={book._id} value={book._id}>
                            {book.title}
                        </option>
                    ))}
                </select>

                <input
                    type="submit"
                    name="btnSubmit"
                    id="btnSubmit"
                    value="Delete Selected Book"
                />
            </form>

            {deleteSuccess && <p>{deleteSuccess}</p>}
        </>
    );
};

export default DeleteBookPage;
