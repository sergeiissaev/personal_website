import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import net_worth_line_graph from "../../Assets/Projects/net_worth_line_graph.png";
import crypto_trading from "../../Assets/Projects/crypto_trading.png";
import captcha from "../../Assets/Projects/captcha.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={net_worth_line_graph}
              isBlog={false}
              title="Net Worth Calculator"
              description="A free, open source tool to track your live net worth by multiplying your assets with their respective market values. Built using Python (matplotlib, pandas and yfinance)."
              ghLink="https://github.com/sergeiissaev/net_worth"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto_trading}
              isBlog={false}
              title="Ethereum Algorithmic Trading API"
              description="Built and published an API (FastAPI) capable of scraping and preprocessing live data, then obtaining a prediction from a model (autosklearn)."
              ghLink="https://gitlab.com/sergei740/marketmerlin"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={captcha}
              isBlog={true}
              title="CV Based Automatic CAPTCHA Solver"
              description="Developed end to end pipeline for solving 10 character CAPTCHA images. I used OpenCV for image processing and image segmentation, as well as transfer learning using ResNet CNN architecture to classify text."
              ghLink="https://medium.com/towards-artificial-intelligence/deep-learning-based-automatic-captcha-solver-12cd49191c58"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
