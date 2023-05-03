import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import resume from '../media/Nitesh Singh Rawat Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const ProfesionalExperience = ({darkMode}) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
          <br></br>
          <br></br>
          <br></br> 
         <Container  align='center'>
              <Card.Title><h2 className="lead">Professional experience</h2></Card.Title>
              <Card.Text style={{fontSize: "1rem", fontWeight: "500"}}>
                <p><strong  style={{fontSize: "1.2rem", fontWeight: "600"}}>Software Developer </strong></p>
                      <strong style={{fontSize: "1.2rem", fontWeight: "600"}}>Easyhai Centre For Excellence, Noida </strong>
                      <p style={{color: "white"}}>Jan 2023 - Apr 2023</p>
                        <strong style={{fontSize: "1.1rem", fontWeight: "600"}}>Areas of responsibility:</strong>
                        <p style={{color: "white"}}> <span>- Managed of the Backend and host using AWS&emsp;</span><span>- Used the MERN stack in student LMS&emsp;</span><span>- Adding new features to the website using NEXT.JS.</span></p>
                        </Card.Text>
              </Container>
              <br></br>
              <br></br>
              <hr></hr>
    </div>
  )
}
