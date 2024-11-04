import './styles/HomePageStyles.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="left-section">
        <h2 className="homepage-title">צומת הגומא בע"מ</h2>
        <p className="homepage-description">
        בין רכס רמים הגבוה לנחלים היפים של הצפון, שוכן צומת הגומא על כביש 90. במקום פועל מתחם מסחרי תוסס המלא בחנויות ועסקים המציעים את מיטב המוצרים והפריטים של תושבי הצפון. המתחם, המעוצב בסגנון מודרני, מתפקד כמרכז אזורי המעניק מענה לכלל יישובי האזור. 
        </p>
      </div>
      <div className="right-section">
        <div className="main-image-group">
          <img src="/homeImages/gomehome1.jpeg" alt="Image 1" className="homepage-image main-image" />
          <img src="/homeImages/gomehome4.jpeg" alt="Image 4" className="homepage-image main-image" />
        </div>
        <div className="image-group">
          <img src="/homeImages/gomehome2.jpeg" alt="Image 2" className="homepage-image smaller-image" />
          <img src="/homeImages/gomehome3.jpeg" alt="Image 3" className="homepage-image smaller-image" />
        </div>
      </div>
    </div>
  );
}
