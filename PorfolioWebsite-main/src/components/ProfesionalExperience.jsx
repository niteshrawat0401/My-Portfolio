import React from 'react'
import './styles.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const ProfesionalExperience = ({darkMode}) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
          <br></br>
          <br></br>
         <Container  align='center'>
              <Card.Title><h2 className="lead">Professional experience</h2></Card.Title>
              <Card.Text style={{fontSize: "1rem", fontWeight: "500"}}>
                <p><strong  style={{fontSize: "1.2rem", fontWeight: "600"}}>Software Developer </strong></p>
                    <strong style={{fontSize: "1.2rem", fontWeight: "600"}}>Easyhai Centre For Excellence, Noida </strong>
                    <p style={{color: "white"}}>Jan 2023 - Apr 2023</p>
                    <strong style={{fontSize: "1.1rem", fontWeight: "600"}}>Areas of responsibility:</strong>
                    <p style={{color: "white"}}> <span>- Managed the Backend and host using AWS&emsp;</span><span>- Used the MERN stack in different domain&emsp;</span><span>- Adding new features to the website using NEXT.JS.</span></p>
                </Card.Text>
              </Container>
              <br></br>
              <br></br>
              <hr></hr>
    </div>
  )
}

export default ProfesionalExperience