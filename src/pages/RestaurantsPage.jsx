import RestaurantCard from '../components/RestaurantsCard.jsx';
import restaurantsData from '../../data/restaurants.js';
import './styles/RestaurantsPageStyle.css';

export default function RestaurantsPage() {
    return (
      <div>
        <h2 className="page-title">מסעדות המתחם</h2>
        <div className="restaurants-container">
          {restaurantsData.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    );
  }
