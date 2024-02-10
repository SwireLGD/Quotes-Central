import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./Categories.css";

const CategoriesNav = () => {
  const categories = [
    { title: 'All', id: 'all' },
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Famous People', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
    { title: 'Motivational', id: 'motivational' },
  ];

  return (
    <aside className="mt-3">
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="Category list-group-item border-0'">
            <NavLink
              to={`/quotes/${category.id}`}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesNav;
