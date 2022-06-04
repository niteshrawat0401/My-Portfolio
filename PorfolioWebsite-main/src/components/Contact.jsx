import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/contact-light.svg';
import contactDark from '../media/contact-dark.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = ({darkMode}) => {

    const [templateParams, setTemplateParams] = useState({
		from_name: '',
        message: '',
        usermail_id:'',
	});

    const onInputChange = e => {
		setTemplateParams({...templateParams,[e.target.name]: e.target.value})
	}

    const onSubmit = async (e) => {
		e.preventDefault();
        emailjs.send('service_7c05s2e', 'template_w9i4lgl', templateParams, 'hNa58F7qCcOvm5LnZ')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! I will get back to you as soon possible",
                    icon: "success",
                  });
                setTemplateParams({
                    from_name: '',
                    message: '',
                    usermail_id:'',
                })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
            <Row>
                <Col lg={4}>
                <br></br>
                <h2 className="lead">Contact me!</h2>
                <p className="contact-text">Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>
                <br></br>
                <img src={darkMode? contactDark : contactLight} alt="contact" className="contact-img img-fluid"/>
                </Col>
                <Col lg={8}>
                <br></br>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group>
                        <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name"  />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control onChange={e => onInputChange(e)} value={templateParams.usermail_id} name="usermail_id" className="ph Usermail_id" type="ph mailid" placeholder="Enter your mail id" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control  onChange={e => onInputChange(e)} value={templateParams.message} name="message"  as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                    </Form.Group>

                    <Button variant={darkMode ? "outline-light" : "outline-dark"} type="submit">
                        Submit
                    </Button>
                </Form>
                    </Col>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/niteshrawat0401?tab=repositories"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/niteshrawat0401"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/nitesh-singh-rawat-61a830224"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:niteshrawat0401@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineMail />
                                </a>
                            </li>
                        </ul>
                    </Col>
            </Row>
            </Container>
            <br></br>
        </div>
    )
}

export default Contact
