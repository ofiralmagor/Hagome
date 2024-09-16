import './styles/AboutPageStyles.css';

export default function AboutPage() {
    return (
        <div className="about-page">
            <h2 className="about-page-title">קצת עלינו..</h2>
            <h3 className="about-page-info">
                בין רכס רמים הגבוה לבין הנחלים היפים בצפון נמצאת צומת הגומא על כביש 90 ובה מתחם מסחרי המלא בחנויות ועסקים אשר מציעים את פרי עמלם של תושבי הצפון.<br />
                המתחם הינו מתחם אזורי המעוצב בסגנון מודרני הפונה ונותן מענה לכלל ישוביי האזור.<br />
                תוכלו למצוא אצלנו מגוון של חנויות ומסעדות לכל המשפחה.
            </h3>
            <div className="about-card-container">
                <div className="about-card">
                    <h3 className="about-card-title">שעות פעילות המתחם</h3>
                    <p className="about-p">תחנת הדלק במתחם פתוחה 24/7. שאר החנויות והמסעדות במתחם פתוחות בשעות משתנות המפורטות בדף המסעדות</p>
                </div>
                <div className="about-card">
                    <h3 className="about-card-title">איך להגיע אלינו?</h3>
                    <p className="about-card-bold">כתובת: צומת הגומא/ כביש 977</p>
                    <p className="about-p">וכדי שתוכלו להנות באמת, תמצאו במתחם כ-60 מקומות חנייה.</p>
                </div>
                <div className="about-card">
                    <h3 className="about-card-title">נגישות</h3>
                    <p className="about-p">אנו פועלים רבות ומנגישים את שירותי המתחם לכל הציבור. במקום תוכלו למצוא חניות ייעודיות, כניסות נגישות ושירותים מותאמים</p>
                </div>
                <div className="about-card">
                    <h3 className="about-card-title">טעינה חשמלית</h3>
                    <p className="about-card-bold">חדש!</p>
                    <p className="about-p">בתחנת הדלק תוכלו למצוא עמדות טעינה חשמליות</p>
                </div>
            </div>
        </div>
    );
}

