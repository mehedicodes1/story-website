import { NavLink } from "react-router-dom";

const NavBar = () => {
  return <nav className="flex justify-between pr-8 pl-8 bg-blue-950 items-center">
      <h1 className="text-2xl my-5">MS Storis</h1>
      <ul className="flex gap-4">
        <li>
          <NavLink className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'} to="/story">Story</NavLink>
        </li>
      </ul>
  </nav>;
};

export default NavBar;
