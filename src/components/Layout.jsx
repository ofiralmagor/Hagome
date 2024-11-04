import { Link, Outlet } from 'react-router-dom';
import './styles/Layout.css';

const NavLinks = ({ closeNavbar }) => {
  const links = [
    { to: '/', text: 'דף הבית' },
    { to: '/restaurants', text: 'מסעדות' },
    { to: '/about', text: 'אודות' },
    { to: '/events', text: 'פסטיבלים' },
    { to: '/contact', text: 'צור קשר' },
  ];

  return (
    <ul className="navbar-nav">
      {links.map((link, index) => (
        <li className="nav-item" key={index}>
          <Link to={link.to} className="nav-link" onClick={closeNavbar}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Layout = () => {
  const closeNavbar = () => {
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler && window.innerWidth < 992) {
      toggler.click();
    }
  };

  return (
    <div className="body1">
      <header className="app-header">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand-logo">
            <img src="/images/logo.jpeg" alt="Logo" className="navbar-logo" />
          </Link>
          <Link to="/" className="navbar-brand">
            <h1>צומת הגומא בע"מ</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavLinks closeNavbar={closeNavbar} />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
