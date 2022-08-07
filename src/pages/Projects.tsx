import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import eventPlatform from "../assets/img/event-platform.png";
import ecommercePlatform from "../assets/img/ecommerce-platform.png";
import gitSearch from "../assets/img/git-search.png";
import filmesCom from "../assets/img/filme-com.png";
import jogosCom from "../assets/img/jogos-com.png";
import petrotech from "../assets/img/petrotech.png";
import NavBar from "../components/Navbar";
import Particle from "../components/Particle";
import { BsGithub } from "react-icons/bs";

export function Projects() {
  return (
    <section>
      <NavBar />
      <Container fluid className="bg-section" id="home">
        <Particle />
        <Container>
          <Row className="home-row flex justify-around pb-14 pt-24">
            <Col md={5} style={{ paddingBottom: 20 }}>
              <h1 className="project-heading-about mt-12 flex justify-center align-middle">
                <strong className="purple  justify-between">Projetos</strong>
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="bg-gray-700 contents teste-bg">
        <Container>
          <Row className="projects flex bg-gray-700 pb-36">
            <Col xs={4} md={2} className="tech-icons bg-gray-700 bg-opacity-30">
              <img
                src={eventPlatform}
                className="img-fluid my-avtar-rocket  pt-20"
                style={{ maxHeight: "300px" }}
              />
              <div className="py-4 px-4 text-xl">Plataforma de Eventos</div>

              <Button
                href="https://github.com/eosantos/event-platform"
                target="_blank"
                className="git-btn-inner rounded-full flex"
              >
                <BsGithub className="text-xl flex" />
              </Button>
            </Col>
            <Col xs={4} md={2} className="tech-icons bg-gray-700 bg-opacity-30">
              <img
                src={ecommercePlatform}
                className="img-fluid my-avtar-rocket  pt-20"
                style={{ maxHeight: "300px" }}
              />
              <div className="py-4 px-4 text-xl">Ecommerce</div>

              <Button
                href="https://github.com/eosantos/ecommerce-reactjs-app"
                target="_blank"
                className="git-btn-inner rounded-full flex"
              >
                <BsGithub className="text-xl flex" />
              </Button>
            </Col>
            <Col xs={4} md={2} className="tech-icons bg-gray-700 bg-opacity-30">
              <img
                src={gitSearch}
                className="img-fluid my-avtar-rocket  pt-20"
                style={{ maxHeight: "300px" }}
              />
              <div className="py-4 px-4 text-xl">Git Search</div>

              <Button
                href="https://github.com/eosantos/github-search"
                target="_blank"
                className="git-btn-inner rounded-full flex"
              >
                <BsGithub className="text-xl flex" />
              </Button>
            </Col>
            <Col xs={4} md={2} className="tech-icons bg-gray-700 bg-opacity-30">
              <img
                src={filmesCom}
                className="img-fluid my-avtar-rocket  pt-20"
                style={{ maxHeight: "300px" }}
              />
              <div className="py-4 px-4 text-xl">Filmes.com</div>

              <Button
                href="https://github.com/eosantos/WEMOGA-teste"
                target="_blank"
                className="git-btn-inner rounded-full flex"
              >
                <BsGithub className="text-xl flex" />
              </Button>
            </Col>
            <Col xs={4} md={2} className="tech-icons bg-gray-700 bg-opacity-30">
              <img
                src={jogosCom}
                className="img-fluid my-avtar-rocket  pt-20"
                style={{ maxHeight: "300px" }}
              />
              <div className="py-4 px-4 text-xl">Jogos.com</div>

              <Button
                href="https://github.com/eosantos/jogos.com-angular4"
                target="_blank"
                className="git-btn-inner rounded-full flex"
              >
                <BsGithub className="text-xl flex" />
              </Button>
            </Col>
            <Col xs={4} md={2} className="tech-icons bg-gray-700 bg-opacity-30">
              <img
                src={petrotech}
                className="img-fluid my-avtar-rocket  pt-20"
                style={{ maxHeight: "300px" }}
              />
              <div className="py-4 px-4 text-xl">Petrotech</div>

              <Button
                href="https://github.com/eosantos/projetotisi-petroteck"
                target="_blank"
                className="git-btn-inner rounded-full flex"
              >
                <BsGithub className="text-xl flex" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
