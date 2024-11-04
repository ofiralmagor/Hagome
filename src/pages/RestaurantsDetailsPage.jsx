import { useParams, Link } from 'react-router-dom';
import restaurantsData from '../../data/restaurants.js';
import './styles/RestaurantsDetailsPageStyle.css';

export default function RestaurantDetailsPage() {
  const { id } = useParams();
  const restaurant = restaurantsData.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error!</h4>
        <p className="alert-p">המסעדה לא נמצאה.</p>
        <hr />
        <p className="mb-0">אנא בדקו את הקישור או חפשו מסעדה אחרת.</p>
        <Link to="/restaurants" className="back-to-restaurants-link">בחזרה לדף המסעדות</Link>
      </div>
    ); 
  }

  return (
    <div className="restaurant-details-container">
      <img
        src={restaurant.images}
        alt={restaurant.name}
        className="restaurant-details-image"
      />
      <h1 className="restaurant-details-title">{restaurant.name}</h1>
      <div className="restaurant-details-info">
        <p className="restaurant-details-item"><strong>בבעלות:</strong><br></br> {restaurant.owner}</p>
        <p className="restaurant-details-item-d">{restaurant.description}</p>
        <p className="restaurant-details-item"><strong>שעות פתיחה:</strong><br></br> {restaurant.activitytime}</p>
        <p className="restaurant-details-item"><strong>ליצירת קשר והזמנת מקום:</strong><br></br> {restaurant.phoneNumber}</p>
      </div>
      <Link to="/restaurants" className="back-to-restaurants-link">בחזרה לדף המסעדות</Link>
    </div>
  );
}
