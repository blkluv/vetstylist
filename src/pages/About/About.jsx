import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="About">
      <div className="about-info">
        <h3>About Yvette</h3>
        <p>
          Yvette is a master cosmetologist with 40 years of experience in the industry. She started her journey as a hairstylist in Louisiana and migrated to Atlanta.
          <br /><br />
          Yvette constantly seeks new ways to expand her knowledge and improve her craft, and she is dedicated to providing her clients with the best possible service and experience.
          <br /><br />
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.9979493679443!2d-84.0208236!3d33.9668922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5bdd4673b0e67%3A0x40f948737fb09ad4!2sSalon%20%23106%2C%20860%20Duluth%20Hwy%20Suite%20152%2C%20Lawrenceville%2C%20GA%2030043!5e0!3m2!1sen!2sus!4v1688232214341!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
