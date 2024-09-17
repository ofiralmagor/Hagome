import React from 'react';
import './styles/EventsPageStyles.css';

const imageData = [
    '/eventsImages/event2.jpeg',
    '/eventsImages/event3.jpeg',
    '/eventsImages/event4.jpeg',
    '/eventsImages/event5.jpeg',
    '/eventsImages/event6.jpeg',
    '/eventsImages/event7.jpeg',
    '/eventsImages/event8.jpeg',
    '/eventsImages/event9.jpeg',
    '/eventsImages/event10.jpeg'
];

export default function EventsPage() {
    return (
        <div className="events-page">
            <h2 className="events-h1">אירועים במתחם</h2>
            <p className="events-p1">כמעט בכל שנה אנו מקימים פסטיבלי קיץ ישראלים העשירים בדוכני אוכל, מוזיקה חיה וירידי אומנים מהצפון.</p>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {imageData.map((src, index) => (
                        <div 
                            className={`carousel-item ${index === 0 ? 'active' : ''}`} 
                            key={src}
                        >
                            <img src={src} className="d-block w-100" alt={`Event ${index + 1}`} />
                        </div>
                    ))}
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
            <div className="end-div">
               <p className="events-p2">רוצים להיות חלק מהפסטיבל הבא? </p>
               <p className="events-p3">דברו איתנו: 0558838601</p> 
            </div>
        </div>
    );
}
