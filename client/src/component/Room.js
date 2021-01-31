import React from 'react'
import {Row,Col,Image,ListGroup,Form,Button} from 'react-bootstrap'
import './Room.css'
const Room = ({room}) => {
    return (
        <Row className="py-5 my-5">
            <Col md={7} lg={7}>
                <div className="Room__shadow"></div>
                 <div className="Room__image">
                    <Image src={room.image} alt="" fluid />
                </div>   
            </Col>
            <Col md={5} lg={5}>
                <ListGroup variant="fluid">
                    <ListGroup.Item>
                        <h1>{room.type}</h1>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>{room.description}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        max-occupancy : <strong>{room.max_occupancy}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Amenities:  {room.amenities}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        bed-type: {room.bed_type}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price : <strong>Rs {room.price} per night </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Availability : { room.availability > 0 ?(<Form>
                            <Form.Control as="select" size="md">
                                {
                                    [...Array(room.availability).keys()].map(x=>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )
                                }
                            </Form.Control> 
                            <Button variant="success" className="my-2 px-3 py-2">Book</Button>
                        
                        </Form>): "unavailable"
                            }
                    </ListGroup.Item>
                </ListGroup>
                
            </Col>
        </Row>
    )
}

export default Room
