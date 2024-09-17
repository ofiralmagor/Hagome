import { Link, Outlet } from 'react-router-dom';
import './styles/Layout.css'; 

const NavLinks = () => {
  const links = [
    { to: '/', text: 'דף הבית' },
    { to: '/restaurants', text: 'מסעדות במתחם' },
    { to: '/about', text: 'אודות' },
    { to: '/events', text: 'אירועים בגומא' },
    { to: '/contact', text: 'צור קשר' },
  ];

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

const Layout = () => {
  return (
    <div>
      <header className="app-header">
        <nav className="nav-container">
          <img src="/images/logo.jpeg" alt="Logo" className="logo" />
          <NavLinks />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

