import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {

    return (
        <div className="Nav">
            <h1 className="title-hover" onClick={() => setCurrentPage('home')}>HAIRVET.NET</h1>
            <ul>
                <li className="hover" onClick={() => setCurrentPage('booking')}>Booking</li>
                {/* <li className="hover"><a href="https://vett-102378.square.site" target="_blank" rel="noreferrer">Booking</a></li> */}
                <li className="hover" onClick={() => setCurrentPage('dates')}>Travel</li>
                <li className="hover" onClick={() => setCurrentPage('about')}>About</li>
                <li className="hover"><a href="https://instagram.com/haircolorvet/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="hover"><a href="mailto:ymtriplett@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
            </ul>
        </div>
    );
}
