import React from 'react'
import {Container,Col,Row} from 'react-bootstrap';
import SocialMedia from './SocialMedia';
const Footer = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col lg={4} md={8} sm={12} className="d-flex flex-column justify-content-center align-items-center ml-auto mr-auto">
                <h1>Hotel RiverSide</h1>
                <SocialMedia display="flex-row Space"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
