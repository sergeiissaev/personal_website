import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";






function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a machine learning software engineer with a Master’s degree that specializes in building and deploying AI solutions. 
              <br />
              <br />I am fluent in a number of programming languages, including
              <i>
                <b className="purple"> Python, C++, and JavaScript. </b>
              </i>
              <br />
              <br />
              I am particularly interested in &nbsp;
              <i>
                <b className="purple">computer vision</b> and
                {" "}
                <b className="purple">
                  production deployment of machine learning systems.
                </b>
              </i>
              <br />
              <br />
              In the past, I have deployed machine learning products on cloud infrastructure such as <b className="purple">AWS</b> and
              <i>
                <b className="purple">
                  {" "}
                  Microsoft Azure
                </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sergeiissaev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sergei-issaev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>


      </Container>
    </Container>
  );
}
export default Home2;
