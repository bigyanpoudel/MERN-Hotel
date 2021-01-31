import React,{useState} from 'react'
import {Container,Row,Col,Image,Form,Button} from 'react-bootstrap'
import './Home.css'
import SocialMedia from '../component/SocialMedia';
import About from '../component/About';
import DatePicker from '../component/DatePicker';
import {Link} from 'react-router-dom';
const Home = () => {
    const [checkIn,SetCheckIn]= useState(null);
    const [checkOut,SetCheckOut]= useState(null);
    const [guest,SetGuest]=useState(1);
    return (
        <>
            <Container className="my-5 py-3 Home">
                <Row >
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
                                        <Col lg={10} md={11} sm={12} className="home__image">
                                            
                                            <Image src="images/image.jpg" alt="home-image" fluid/>
                                        
                                        </Col>
                                </Row>
                                
                                
                            </Col>
                        
                </Row> 
                <Row >
                    <Col md={6} lg={7} sm={12} className="d-flex justify-content-around align-items-center">
                        <DatePicker startDate={checkIn} SetStartDate={SetCheckIn}
                            endDate={checkOut} SetEndDate={SetCheckOut}/>    
                    </Col>
                    <Col md={6} lg={5} sm={12}>
                        <Form className="d-flex  justify-content-around align-items-center">
                            <Form.Group id="guest" >
                                <Form.Label>Guest</Form.Label>
                                <Form.Control as="select" size="md" className="px-5" 
                                onChange={(e)=> SetGuest(e.target.value)}>
                                    { [...Array(30).keys()].map(x=>(
                                                 <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                 ))
                                                }
                                </Form.Control>
                                
                            </Form.Group>
                             <Link to={`/search/?${checkIn}&${checkOut}&${guest}`}>
                            <Button variant="success" className="px-5 py-2" disabled={!checkOut || !checkIn}>
                               
                                    Search
                            </Button>
                              </Link>
                        </Form>
                    </Col>
                </Row>   
            </Container>  
            <About/> 
        </>
    )
}

export default Home
