import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Movetext } from 'kokopu-react';
import gif from "../../Assets/Projects/board.gif";
import Image from 'react-bootstrap/Image'

let pgn = `
[Event "2022 Golden Horseshoe"]
[Site "Mississauga, Ontario"]
[Date "2022.04.02"]
[Round "3"]
[White "Sergei Issaev"]
[Black "Stephen L."]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Bc5 7. Nxe5 Bxf2+ 8.
Rxf2 Nxe5 9. d4 Neg4 10. Rf4 g5 11. Rxg4 Nxg4 12. Qxg4 h6 13. Qf5 Qe7 14. Nc3 c6
15. e5 d5 16. Qf2 Be6 17. a4 Qb7 18. Qf6 Rh7 19. Ne2 Kd7 20. Ng3 Rg8 21. Qf3 g4
22. Qd3 Rgh8 23. Nh5 Kc7 24. Nf6 Rg7 25. Bxh6 Rg6 26. Bf4 Qc8 27. c3 Kb7 28. Bc2
Qc7 29. axb5 Rxf6 30. bxc6+ Kxc6 {[#]} 31. Rxa6+ Kd7 32. Qb5+ Kd8 33. Ra8+ Bc8 34.
Qxd5+ Ke8 35. exf6 Qb7 36. Qxb7   1-0`;

let limits = [
  { width: 170, squareSize: 12, coordinateVisible: false },
  { width: 250, squareSize: 16, coordinateVisible: false },
  { width: 340, squareSize: 24, coordinateVisible: false },
  { width: 450, squareSize: 32 },
  { width: 560, squareSize: 44 },
  { width: 600, squareSize: 52, coordinateVisible: true },
  { width: 640, squareSize: 24, coordinateVisible: false },
  { width: 750, squareSize: 32 },
  { width: 860, squareSize: 44 },
];

function About() {
  return (
    <Container>
  <Particle />
    <Container fluid className="about-section">
  
    <h1 className="project-heading">
          Favorite <strong className="purple">Matches </strong>
        </h1>

        <Row style={{backgroundColor: "#ffffcc", color: "black"}}>
          <Col md={8} xs={12}>
        <Movetext game={pgn} pieceSymbols="figurines" squareSize={5} smallScreenLimits={limits}/>
        </Col>
        <Col md={4} xs={12} style={{paddingTop: "10vh", backgroundColor: "#ccffcc",}}>
        <Image src={gif} fluid={true} />
        </Col>
        </Row>
        
    </Container>
    </Container>
  );
}

export default About;
