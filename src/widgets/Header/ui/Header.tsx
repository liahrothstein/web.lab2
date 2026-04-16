import './Header.scss';

import { Logo } from '@components/index';

export function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <div className="header">
        <h2>Личная страница — Новиков Дмитрий Алексеевич</h2>
      </div>
    </header>
  );
}
