import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/ContactPageStyles.css';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <h2 className="contact-title">דברו איתנו!</h2>
            <h4 className="company-name">צומת הגומא בע"מ</h4>
            <div className="contact-card-container">
                <div className="contact-card">
                    <i className="bi bi-telephone-fill icon-large"></i>
                    <p className="contact-card-text">יוני אלמגור - 0545438826</p>
                </div>
                <div className="contact-card">
                    <i className="bi bi-envelope-at-fill icon-large"></i>
                    <p className="contact-card-text">ofir1108@gmail.com</p>
                </div>
                <div className="contact-card">
                    <i className="bi bi-geo-alt-fill icon-large"></i>
                    <p className="contact-card-text">צומת הגומא/כביש 977</p>
                </div>
                <div className="contact-card">
                    <i class="bi bi-facebook icon-large"></i>
                    <p className="contact-card-text">צומת הגומא בפייסבוק</p>
                </div>
            </div>
        </div>
    );
}