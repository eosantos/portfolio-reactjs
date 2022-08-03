import { Col, Row } from "react-bootstrap";
import { AiFillGitlab } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiMysql,
  DiPostgresql,
  DiNodejsSmall,
  DiBootstrap,
  DiWordpress,
  DiPhp,
  DiGit,
  DiGithubBadge,
  DiLess,
  DiMarkdown,
  DiSass,
} from "react-icons/di";
//import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row className="techStack align-middle">
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLess />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMarkdown />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
    </Row>
  );
}

export default Techstack;
