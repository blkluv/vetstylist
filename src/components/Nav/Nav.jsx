import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faEnvelope, faPhone } from '@fortawesome/free-regular-svg-icons';

export default function Nav({ currentPage, setCurrentPage }) {
  return (
    <div className="Nav">
      <h1 className="title-hover" onClick={() => setCurrentPage('home')}>
        Hair Vet
      </h1>
      <ul>
        <li className="hover" onClick={() => setCurrentPage('booking')}>
          Booking
        </li>
        {/* <li className="hover"><a href="https://vett-102378.square.site" target="_blank" rel="noreferrer">Booking</a></li> */}
        <li className="hover" onClick={() => setCurrentPage('dates')}>
          Travel
        </li>
        <li className="hover" onClick={() => setCurrentPage('about')}>
          About
        </li>
        <li className="hover">
          <a href="https://instagram.com/hairvetatl" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="hover">
          <a href="mailto:ymtriplett@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="hover">
          <a href="tel:6785224329">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
      </ul>
    </div>
  );
}
