
import { Zoom, Fade } from 'react-awesome-reveal'

import lyst from '../media/Lyst.png'
import porter from '../media/porter.png'
import bewakoof from "../media/bewakoof.png"

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'


const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>My recent works</b></h2>
                    <br></br>
                    <h3 className="lead" align="center">Here are a few projects I've worked on recently.</h3>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={lyst} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of Lyst.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">This is a London e-commerce website where you can purchase different types of clothes.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can add items to the cart and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can filter the item on the price, discount, brand, etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript, React and Redux.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://lyst-clone.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/niteshrawat0401/Lyst-clone" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={porter} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of porter.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Porter provides logistics solutions for businesses by providing mini trucks, tempos, and bikes on demand for bulk delivery.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can book bus, train, Hotel and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can choose service according to their needs like bike, mini truck and tempos for delivery.
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript, ExpressJs, MongoDb, Nodejs, ReactJs and Redux.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://beautiful-rabanadas-160fc9.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/niteshrawat0401/porter-clone" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>

                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={bewakoof} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of Bewakoof.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">This is an Indian e-commerce website where you can purchase various types of clothes.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can book bus, train, Hotel and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can filter as per their convenince etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://willowy-malabi-fce6f8.netlify.app/index.html" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/niteshrawat0401/bewakoof.com" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
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
    )
}

export default Experience
