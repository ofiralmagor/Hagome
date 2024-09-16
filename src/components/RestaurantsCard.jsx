import { Link } from 'react-router-dom';
import './styles/RestaurantsCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurants/${restaurant.id}`}
      className="restaurant-card"
      style={{ backgroundImage: `url(${restaurant.images})` }}
    />
  );
};

export default RestaurantCard;