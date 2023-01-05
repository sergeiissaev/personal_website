import React from "react";
import { Container, Row} from "react-bootstrap";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container fluid className="research-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading">
          <strong className="purple">Primary </strong> Work
        </h1>
        <br /><br /><br /><br />
        <br /><br />
        <h5 style={{ color: "white" }}>
        <strong className="purple">Master's Thesis </strong>: Robust image-to-image translation tool for fibrotic quantification of whole-slide images [<a href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0402505" target="_blank">link</a>]
        </h5>
        <br /><br /><br /><br />
        <br /><br />
        <h1 className="project-heading">
          Literature <strong className="purple">Reviews </strong> 
        </h1>
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
