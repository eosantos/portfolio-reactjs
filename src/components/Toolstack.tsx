import { Col, Row } from "react-bootstrap";
import {} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSlack,
  SiTrello,
  SiFigma,
  SiFilezilla,
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row className="techStack align-middle">
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFilezilla />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
