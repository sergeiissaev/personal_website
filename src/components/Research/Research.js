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
        <strong className="purple">Master's Thesis </strong>: Robust image-to-image translation tool for fibrotic quantification of whole-slide images [<a href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0402505" target="_blank" rel="noreferrer">link</a>]
        </h5>
        <br /><br /><br /><br />
        <br /><br />
        <h1 className="project-heading">
          Literature <strong className="purple">Reviews </strong> 
        </h1>
        <br /><br /><br /><br /><br />
        <h5 style={{ color: "white" }}>
        <strong className="purple">Paper Review </strong>: What Should Not Be Contrastive in Contrastive Learning [<a href="https://docs.google.com/presentation/d/1XoM3N_G6FymZBCEmHNgtjz0xxNBJMrU6DnKkXYaftO4/edit?usp=sharing" target="_blank" rel="noreferrer">link</a>]
        <br /><br />
        <strong className="purple">Field Review </strong>: Introduction to Self Supervised Learning [<a href="https://docs.google.com/presentation/d/1s3hyor407gfusOvvVrsbQB_qTuQwDaL62PSTCdFeei4/edit?usp=sharing" target="_blank" rel="noreferrer">link</a>]
        </h5>
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
