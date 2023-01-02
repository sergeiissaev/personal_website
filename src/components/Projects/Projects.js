import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import net_worth_line_graph from "../../Assets/Projects/net_worth_line_graph.png";
import crypto_trading from "../../Assets/Projects/crypto_trading.png";

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
