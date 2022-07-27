import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/Navbar";
import homeLogo from "../assets/me-and-rocket.svg";
import Particle from "../components/Particle";
import Type from "../components/Type";

export function Home() {
  return (
    <section>
      <NavBar />
      <Container fluid className="home-section h-screen" id="home">
        <Particle />
        <Container className="home-content flex justify-center">
          {" "}
          <Row className="contents">
            <Col md={7} className="home-header pr-32">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Olá!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Eu sou
                <strong className="main-name"> EDUARDO OLIVEIRA</strong>
              </h1>
              <strong className="text-lg font-extralight line-h ml-12">
                Embarque comigo neste multiverso
              </strong>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="pl-32">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <div className="h-screen bg-gray-900 text-9xl text-gray-50 pt-96">
        <h1 className="flex justify-center">Home</h1>
      </div> */}
    </section>
  );
}
