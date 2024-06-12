import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <section className="section-one">
        <div className="bg-img">
          <h5>Write Your Story With </h5>
          <p>Choose Your Favourite Destination</p>
          <Link to="/servic">
            <button>Traval Plan</button>
          </Link>
        </div>
      </section>
      <Section />
    </div>
  );
}

export default Home;
