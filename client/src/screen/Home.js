import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import './Home.css'
import SocialMedia from '../component/SocialMedia';
import About from '../component/About';
const Home = () => {
    return (
        <>
            <Container className="my-5 py-3 Home">
                <Row>
                            <Col lg={1} md={1} sm={0} >
                                <SocialMedia display="flex-column Position"/>
                            
                            </Col>
                            <Col lg={11} md={11} sm={12}>
                                <Row>
                                        <Col lg={7} md={7} sm={12}>
                                            <div className="intro">
                                                <h5>- Lokanthali,Bhaktapur,Nepal</h5>
                                                <h2>
                                                    <span>Welcome to RiverSide</span>
                                                    <span>the Best Vacation Resort in Nepal</span>
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={7} sm={12} >
                                            <div className="shadow__wall"></div>
                                        </Col>
                                        <Col lg={10} md={11} sm={12} >
                                            <div className="home__image">
                                            <Image src="images/image.jpg" alt="home-image" fluid/>
                                            </div>
                                        </Col>
                                </Row>
                                
                                
                            </Col>
                        
                </Row>    
            </Container>  
            <About/> 
        </>
    )
}

export default Home
