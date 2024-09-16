import { Link } from 'react-router-dom'; 
import './styles/HomePageStyles.css'; 

export default function HomePage() {
  return (
    <div className="homepage">
      <img src="/images/logo.jpeg" alt="Logo" className="homepage-logo" />
      <h2 className="homepage-title">צומת הגומא בע"מ</h2>
      <div className="homepage-buttons">
        <Link to="/about" className="homepage-button">אודות</Link>
        <Link to="/restaurants" className="homepage-button">מסעדות במתחם</Link>
        <Link to="/events" className="homepage-button">אירועים בגומא</Link>
        <Link to="/contact" className="homepage-button">צור קשר</Link>
      </div>
    </div>
  );
}
