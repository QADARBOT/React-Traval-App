import React from "react";
import { CardItem } from "../helper/CardList.jsx";
import { Investers } from "../helper/list-logo.jsx";
import Card from "../components/Cards.jsx";
import "../Styles/Service.css";
function Service() {
  return (
    <div className="service">
      <div className="s">
        <div className="c">
          <h3>Travel Services </h3>
          <p>
            At Travel, we specialize in providing exceptional travel services
            that cater to all your travel needs, ensuring your journeys are
            comfortable, enjoyable, and memorable. Our services are designed to
            offer you the best experience, whether you are traveling for
            business or leisure. Here’s an overview of what we provide:
          </p>
        </div>

        <div className="item-List">
          {CardItem.map((Item, Key) => {
            return (
              <Card
                key={Key}
                image={Item.imge}
                name={Item.name}
                text={Item.text}
              />
            );
          })}
        </div>
        <p className="p-investars"> Investars</p>
        <div className="investars">
          {Investers.map((Item, index) => {
            return (
              <div key={index} className="investar-item">
                <img src={Item.imge} alt={Item.name} />
                <p>{Item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
