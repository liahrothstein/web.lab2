import './Footer.scss';

import { footerLinks } from '@constants/footerLinks';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <h4>Навигация</h4>
      {footerLinks.map((link) => (
        <Link target="_blank" to={link.url} key={link.title}>
          {link.title}
        </Link>
      ))}
    </footer>
  );
}
