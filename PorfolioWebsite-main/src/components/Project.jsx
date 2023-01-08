import { Zoom, Fade } from "react-awesome-reveal";

import lyst from "../media/Lyst.png";
import pharmEasy from "../media/pharmEasy.png";
import bewakoof from "../media/bewakoof.png";

import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Project = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>My recent works</b>
          </h2>
          <br></br>
          <h3 className="lead" align="center">
            Here are a few projects I've worked on recently.
          </h3>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={lyst} />
                          <Card.Body>
                            <Card.Title align="center">
                              Clone of Lyst.com
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Lyst is a fashion company and premium shopping
                                app. They have 160 million annual shoppers and
                                always products available.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            {" "}
                            Navbar, Search bar, and Products page, Product
                            preview and Contact information,
                            <br></br> Cart page, Payment, Order Summary, and
                            User authentication.
                            <br />
                            <br></br>Tech Stack - HTML | CSS | JavaScript |
                            React.js | Redux | Context Api | Tailwind |
                            Material-Ui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      className="ankr"
                      href="https://lyst-clone.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        className="bttn"
                        variant={darkMode ? "outline-light" : "outline-dark"}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/niteshrawat0401/Lyst-clone"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        className="bttn"
                        variant={darkMode ? "outline-light" : "outline-dark"}
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={pharmEasy} />
                          <Card.Body>
                            <Card.Title align="center">
                              Clone of pharmEasy.in
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                This is an Indian e-commerce website where
                                purchase medicines directly from the website and
                                deliver in 1000+ cities and towns.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            {" "}
                            User authentication, Profile, Search bar, Products
                            page, Product preview page,
                            <br></br> Health care products, Cart and Payment.
                            <br />
                            <br></br>Tech Stack - HTML | CSS | JavaScript |
                            React.js | Context Api | Node.js | Express.js |
                            Mongo DB | Nodemailer | Mongo Atlas | Mongoose |
                            Chakra-UI
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://pharmeasylion.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        className="bttn"
                        variant={darkMode ? "outline-light" : "outline-dark"}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/Monica1310/vogue-pocket-8479"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        className="bttn"
                        variant={darkMode ? "outline-light" : "outline-dark"}
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={bewakoof} />
                          <Card.Body>
                            <Card.Title align="center">
                              Clone of Bewakoof.com
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Bewakoof.com Bewakoof is a lifestyle fashion
                                brand that makes creative and Their products is
                                always fresh and up-to-date.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            {" "}
                            Navbar, Profile, Search bar, Product page, Product
                            detail page, sort, filter and
                            <br></br>User authentication.
                            <br />
                            <br></br>Tech Stack - HTML | CSS | JavaScript.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://willowy-malabi-fce6f8.netlify.app/index.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        className="bttn"
                        variant={darkMode ? "outline-light" : "outline-dark"}
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/niteshrawat0401/bewakoof.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        className="bttn"
                        variant={darkMode ? "outline-light" : "outline-dark"}
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Project;
