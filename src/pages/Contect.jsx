import React from "react";
import "../Styles/Contect.css";
function Contect() {
  return (
    <div className="Contect-us">
      <div className="contact">
        <div className="rightSide">
          <h1>Contact Us</h1>
          <form id="contact-form" >
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" placeholder="Enter full name..." />

            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" placeholder="Enter Email..." />

            <label htmlFor="message">Message</label>
            <textarea
              rows="3"
              name="message"
              placeholder="Enter Message..."
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contect;
