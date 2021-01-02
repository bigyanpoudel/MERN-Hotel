import React from 'react'
import {Row,Col,Image,Container,Button} from 'react-bootstrap'
import './About.css';
const About = () => {
    return (
        <Container className="Home__about">
        <Row>
            <Col lg={4} sm={12}>
                <div className="Home__about-text">
                <h3>About RiverSide Resort</h3>
                <h1><Image src="images/wave_line.svg" alt=""/></h1>
                <p>
                    Spacious and bright with a Caribbean touch style, Villa Ciestra comes with different hotel rooms and individual serviced apartments.
                </p>
                <p>
                    Villa is located in the Los Corales, comes with different restaurants and also, in only 5 minutes walking, you will be in the center where there are all attractions such restaurants, supermarkets, pharmacy, currency exchange and many more!
                </p>
                <Button variant="success" className="mr-auto mb-4 px-5 py-2">View Details</Button>
                </div>
            </Col>
            <Col lg={8} sm={8}>
                <Row>
                    <Col lg={10}sm={2}>
                        <div className="about__wall"></div>
                    </Col>
                    <Col lg={11} sm={6} >
                        <div className="about__image">
                        <Image src="images/image1.jpg" alt="about" fluid/>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    )
}

export default About
