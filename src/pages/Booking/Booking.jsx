import './Booking.css';

export default function Booking() {
    return (
        <div className="Booking">
            <div className="booking-info">
                <div className="texas-booking">
                    <h3>Atlanta</h3>
                    <button className="button-54"><a href="https://vett-102378.square.site" target="_blank" rel="noreferrer">Click To Book</a></button>
                </div>
                <div className="cali-booking">
                    <h3>Salon</h3>
                    <div className="mare">
                        <h5>My Salon Suite</h5>
                        <div className="contact-icons">
                            <li><a href="https://www.mysalonsuite.com/lawrenceville/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a></li>
                            <li id="mare-ig"><a href="https://www.instagram.com/mss_lawrenceville" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="sms:6785224329"><i className="fa-solid fa-comment"></i></a></li>
                            <li><a href="tel:6782429897"><i className="fa-solid fa-phone"></i></a></li>
                            <li><a href="mailto:ymtriplett@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
                        </div>
                        <li className="mare-address hover"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.9979493679443!2d-84.0208236!3d33.9668922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5bdd4673b0e67%3A0x40f948737fb09ad4!2sSalon%20%23106%2C%20860%20Duluth%20Hwy%20Suite%20152%2C%20Lawrenceville%2C%20GA%2030043!5e0!3m2!1sen!2sus!4v1688232214341!5m2!1sen!2sus" target="_blank" rel="noreferrer">
                            860 Duluth Hwy. Suite 152<br/>
                            Lawrenceville Georgia 30043
                        </a></li>
                </div>
                </div>
            </div>
        </div>
    );

    }