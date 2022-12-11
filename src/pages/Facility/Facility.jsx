import React from "react";
import { useState } from "react";
import "./Facility.css";

function Card() {
  const [cards] = useState([
    {
      title: "In-room Amenities",
      text1: "1. One Bed, Table & Chair for per Student",
      text2: "2. Tube lights & LED, Fan",
      text3: "3. Fully furnished rooms",
      text4: "4. Dustbin in each room",
    },
    {
      title: "Cost-Effective Living Option",
      text1: "1. Cost-effective compared to other living options",
      text2: "2. Get all services together in the single hall cost",
      text3: "3. Long corridor infront of room",
      text4: "4. Separate balcony in each room",
    },
    {
      title: "Electricity & Internet",
      text1: "1. Electricity facility",
      text2: "2. 24/7 Generator facility",
      text3: "3. High speed internet for each students",
    },
    {
      title: "Entertainment",
      text1: "1. Common TV",
      text2: "2. Mini lounge area with sitting arrangement",
      text3: "3. Games like carrom, chess, table tennis, football, cricket",
    },
  ]);
  return (
    <div>
      <section>
        <div className="container">
          <h1>FACILITES</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text1}</p>
                <p>{card.text2}</p>
                <p>{card.text3}</p>
                <p>{card.text4}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
