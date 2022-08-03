import { Container, Row, Col } from "react-bootstrap";
import aboutLogo from "../assets/me-and-rocket-2.svg";
import NavBar from "../components/Navbar";
import Particle from "../components/Particle";
import Techstack from "../components/Techstack";
import { AiOutlineApartment } from "react-icons/ai";
import Toolstack from "../components/Toolstack";
import { GrConfigure } from "react-icons/gr";
import { DiAptana } from "react-icons/di";

export function About() {
  return (
    <section>
      <NavBar />
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-row flex justify-around">
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={aboutLogo}
                alt="home pic"
                className="img-fluid my-avtar-rocket"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            <Col md={7} className="text-about">
              <h1 style={{ paddingBottom: 15 }} className="h1-about">
                Olá!
              </h1>
              <span className="">
                Me chamado{" "}
                <b className="text-about-important"> Eduardo Oliveira</b>, sou
                desenvolvedor <b className="text-about-important"> Front End</b>{" "}
                com paixão por criar produtos significativos, responsivos,
                acessíveis e de alto desempenho com mais de 4 anos de
                experiência trabalhando com grandes produtos, direcionados a
                usuários.
                <br />
                <br />
                Sou uma pessoa altamente orientada para os detalhes e com um
                grande senso de colaboração e trabalho em equipe, que adora
                enfrentar desafios e criar{" "}
                <b className="text-about-important"> aplicações web</b>{" "}
                eficientes e esteticamente agradáveis.
                <br />
                <br />
                Umas das minhas habilidades e que me fez se interessar muito
                pela parte de interface de usuário foram os meus trabalhos
                anteriores como designer gráfico há mais de 10 anos. Meus pontos
                fortes se moldam com{" "}
                <b className="text-about-important"> HTML</b>,{" "}
                <b className="text-about-important"> CSS</b> e{" "}
                <b className="text-about-important"> JavaScript</b>,
                especialmente na biblioteca{" "}
                <b className="text-about-important"> React.js</b>.
              </span>
            </Col>
          </Row>
          <h1 className="project-heading-about mt-12 flex justify-center align-middle">
            <strong className="mr-6">
              <AiOutlineApartment />
            </strong>
            <strong className="purple inline-flex justify-between">
              Skills
            </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading-about mt-12 flex justify-center align-middle">
            <strong className="mr-6 icon-toll align-middle">
              <DiAptana />
            </strong>
            <strong className="purple">Tools</strong>
          </h1>

          <Toolstack />
        </Container>
      </Container>
    </section>
  );
}
