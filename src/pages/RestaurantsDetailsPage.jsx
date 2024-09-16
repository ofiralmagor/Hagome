import { useParams, Link } from 'react-router-dom';
import restaurantsData from '../../data/restaurants.js';
import './styles/RestaurantsDetailsPageStyle.css';

export default function RestaurantDetailsPage() {
  const { id } = useParams();
  const restaurant = restaurantsData.find(r => r.id === id);

  if (!restaurant) {
    return <p>Restaurant not found</p>; 
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
        <p className="restaurant-details-item"><strong>בבעלות:</strong> {restaurant.owner}</p>
        <p className="restaurant-details-item">{restaurant.description}</p>
        <p className="restaurant-details-item"><strong>שעות פתיחה:</strong> {restaurant.activitytime}</p>
        <p className="restaurant-details-item"><strong>ליצירת קשר והזמנת מקום:</strong> {restaurant.phoneNumber}</p>
      </div>
      <Link to="/restaurants" className="back-to-restaurants-link">בחזרה לדף המסעדות</Link>
    </div>
  );
}
