import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">View Books</Link></li>
        <li><Link to="/addbook">Add a Book</Link></li>
        <li><Link to="/deletebook">Delete Book</Link></li>

      </ul>
    </nav>
  );
};

export default Nav;
