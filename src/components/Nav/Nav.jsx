import React from 'react';
import './Nav.css';

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
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="hover">
          <a href="mailto:ymtriplett@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li className="hover">
          <a href="tel:6785224329">678-522-4329</a>
        </li>
      </ul>
    </div>
  );
}
