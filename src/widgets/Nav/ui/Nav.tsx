import './Nav.scss';

import { navLinks } from '@constants/navLinks';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <h4>Навигация</h4>
      {navLinks.map((link) => (
        <Link key={link.title} to={link.url}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
