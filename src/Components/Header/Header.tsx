import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className='bg-primary d-flex justify-content-between container-fluid'>
      <h1 className='text-light'>Quotes Central</h1>
      <nav>
        <ul className='list-group d-flex flex-row'>
          <li className='navItem list-group-item bg-primary text-light border-0'>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Quotes</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary border-0'>
            <NavLink to="/new-quote" className={({ isActive }) => isActive ? 'active' : undefined}>Submit new quote</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;