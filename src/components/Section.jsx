import React from "react";
import { CardItem } from "../helper/CardList.jsx";
import Card from "./Cards.jsx";
import "../Styles/Section.css";

function Section() {
  return (
    <div>
      <section className="section-2">
        <div className="header-two">
          <h1>Melaha Ugu Cansan Ee Somali</h1>
          <p>
            Waxaa Ku Sinaynaa Fursad Add Ku Arki Karto Ama Ku Siyaaran Kartit
            Melo Badan
          </p>
        </div>
        <div className="body-two">
          <div className="text">
            <h2>Bada leedo, Bada Jazera</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              praesentium explicabo eum at maiores blanditiis non labore
              dignissimos reprehenderit dolorum iusto a numquam commodi enim ab
              expedita veniam eaque voluptate, perferendis doloremque ut.
              Tempore corporis quo voluptatem, non placeat nesciunt optio neque
              quae ab perspiciatis harum fugiat perferendis excepturi quidem.
            </p>
          </div>
          <div className="img">
            <div className="img-1" />
            <div className="img-2" />
          </div>
        </div>

        <div className="body-thre">
          <div className="img">
            <div className="img-3" />
            <div className="img-4" />
          </div>
          <div className="text">
            <h2>Bada leedo, Bada Jazera</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              praesentium explicabo eum at maiores blanditiis non labore
              dignissimos reprehenderit dolorum iusto a numquam commodi enim ab
              expedita veniam eaque voluptate, perferendis doloremque ut.
              Tempore corporis quo voluptatem, non placeat nesciunt optio neque
              quae ab perspiciatis harum fugiat perferendis excepturi quidem.
            </p>
          </div>
        </div>
      </section>
      <div className="section-3">
        <div className="header-two">
          <h1>Safarada Ugu Danbeeye </h1>
          <p>Waxaa Doran kartaa Melo Qas Ah Kuwaas oo Hore loo Tagen</p>
        </div>
        <div className="cad-List">
          {CardItem.slice(0, 3).map((Item, Key) => {
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
      </div>
    </div>
  );
}

export default Section;
