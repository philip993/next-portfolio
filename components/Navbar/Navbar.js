import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTrue, setActiveFalse } from './NavbarActions';

const Navbar = () => {
  const { isActive } = useSelector((state) => state.NavbarReducer);
  const dispach = useDispatch();

  const linkActive = () => {
    dispach(setActiveTrue());
  };

  const linkInactive = () => {
    dispach(setActiveFalse());
  };

  return (
    <div>
      <ul>
        <li>
          <Link
            href="/"
            onChange={isActive === true ? linkActive : linkInactive}
          >
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onChange={isActive ? linkActive : linkInactive}> About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a onChange={isActive ? linkActive : linkInactive}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a onChange={isActive ? linkActive : linkInactive}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
