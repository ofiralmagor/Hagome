import './styles/EventsPageStyles.css';

export default function EventsPage() {
    return (
        <div classname="events-page">
            <h2 className="events-h1">אירועים במתחם</h2>
            <p className="events-p1">כמעט בכל שנה אנו מקימים פסטיבלי קיץ ישראלים העשירים בדוכני אוכל, מוזיקה חיה וירידי אומנים מהצפון.</p>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/eventsImages/event2.jpeg" className="d-block w-100" alt="Event 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event3.jpeg" className="d-block w-100" alt="Event 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event4.jpeg" className="d-block w-100" alt="Event 3"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event5.jpeg" className="d-block w-100" alt="Event 4"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event6.jpeg" className="d-block w-100" alt="Event 5"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event7.jpeg" className="d-block w-100" alt="Event 6"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event8.jpeg" className="d-block w-100" alt="Event 7"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event9.jpeg" className="d-block w-100" alt="Event 8"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/eventsImages/event10.jpeg" className="d-block w-100" alt="Event 9"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p className="events-p2">רוצים להיות חלק מהפסטיבל הבא? </p>
            <p className="events-p3">דברו איתנו: 0558838601</p>
        </div>
    );
}

