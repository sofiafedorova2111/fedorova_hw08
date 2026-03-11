import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import AddBookPage from "./pages/AddBookPage";
import DeleteBookPage from "./pages/DeleteBookPage";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
        <Route path="/deletebook" element={<DeleteBookPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
