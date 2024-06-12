import React from "react";
import "../Styles/About.css";
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-7.jpg'
import img3 from '../assets/img-5.jpg'
import img4 from '../assets/img-9.jpg'


function About() {
  return (
    <div className="about-container">
      <h1>About Travel</h1>
      <p>
        Welcome to Travel, your go-to app for all your travel needs. Our mission
        is to provide an exceptional travel planning experience by offering a
        user-friendly platform where you can easily find, compare, and book the
        best travel deals.
      </p>

      <div className="image-container">
        <img src={img1} alt="Travel" />
      </div>

      <h2>Our Story</h2>
      <p>
        Founded in 2024, Travel was created with the vision of making travel
        accessible and enjoyable for everyone. We understand that planning a
        trip can be overwhelming, and our goal is to simplify this process by
        providing comprehensive and reliable travel information all in one
        place.
      </p>

      <div className="image-container">
        <img src={img2} alt="Our Story" />
      </div>

      <h2>Our Services</h2>
      <ul>
        <li>Flight bookings</li>
        <li>Hotel reservations</li>
        <li>Car rentals</li>
        <li>Travel guides and tips</li>
      </ul>

      <div className="image-container">
        <img src={img3} alt="Our Services" />
      </div>

      <h2>Why Choose Us?</h2>
      <p>
        At Travel, we are committed to offering the best customer service and
        the most competitive prices. Our dedicated team works around the clock
        to ensure you have a smooth and enjoyable travel planning experience.
      </p>

      <div className="image-container">
        <img src={img4} alt="Why Choose Us" />
      </div>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, please don't hesitate to{" "}
        <a href="/contact">contact us</a>.
      </p>

      <p>
        Thank you for choosing Travel. We look forward to helping you create
        unforgettable travel experiences!
      </p>
    </div>
  );
}

export default About;
