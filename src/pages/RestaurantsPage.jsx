import RestaurantCard from '../components/RestaurantsCard.jsx';
import restaurantsData from '../../data/restaurants.js';
import './styles/RestaurantsPageStyle.css';

export default function RestaurantsPage() {
    return (
      <div className="rest-page">
        <h2 className="page-title">מסעדות המתחם</h2>
        <p className="page-intro">
          צומת הגומא מציעה חוויית אוכל ייחודית המשלבת בין טעמים מקומיים לתוצרת איכותית של תושבי הצפון. 
          במתחם תוכלו למצוא מגוון מסעדות ובתי קפה שמספקים מענה לכל טעם והעדפה, החל ממטבח ישראלי מסורתי 
          ועד מנות בין-לאומיות ומודרניות. בין אם אתם מחפשים ארוחה משפחתית, עצירה מהירה לדרך, או מקום 
          להירגע עם כוס קפה טוב, המסעדות בצומת הגומא הן הבחירה המושלמת.
        </p>
        <div className="restaurants-container">
          {restaurantsData.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    );
}
