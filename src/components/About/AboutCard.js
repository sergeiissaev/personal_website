import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Sergei Issaev</span>, a 
            machine learning engineer currently residing in <span className="purple"> Toronto, Canada.</span>
            <br />
            <br />
            Apart from coding, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new languages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “The key to happiness is to laugh at yourself.”{" "}
          </p>
          <footer className="blockquote-footer">GPT-J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
