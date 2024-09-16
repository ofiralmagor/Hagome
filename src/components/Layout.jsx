import { Link, Outlet } from 'react-router-dom';
import './styles/Layout.css'; 

const Layout = () => {
  return (
    <div>
      <header className="app-header">
        <nav className="nav-container">
          <img src="/images/logo.jpeg" alt="Logo" className="logo" />
          <ul className="nav-links">
            <li><Link to="/">דף הבית</Link></li>
            <li><Link to="/restaurants">מסעדות במתחם</Link></li>
            <li><Link to="/about">אודות</Link></li>
            <li><Link to="/events">אירועים בגומא</Link></li>
            <li><Link to="/contact">צור קשר</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
