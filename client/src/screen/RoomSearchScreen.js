import React from 'react'
import {Container} from 'react-bootstrap'
import {ROOMS} from '../roomData';
import Room from '../component/Room';
const RoomSearchScreen = ({location}) => {
    console.log(location.search)
    return (
        <Container>
        <div className="mt-3 mb-2 text-center">
         <h1>Search Result</h1>
         <h5>Choose your rooms</h5>
         </div>

        {
            ROOMS.map(room =>
                <Room room={room} key={room.type}/>)
        }
        </Container>
    )
}

export default RoomSearchScreen
