import React from 'react'
import './Headers.css';
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
const Headers = () => {
    const [dropdown, setDropdown] = React.useState(false);
    const[active,SetActive]= React.useState(false);
    const [show,SetShow]=React.useState(false);
     const onMouseEnter = () => {
    if(window.innerWidth <960)
    {
       setDropdown(false); 
    }else{
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    
      if(window.innerWidth <960)
    {
       setDropdown(false); 
    }else{
      setDropdown(false);
    }
    
  };
  const handleSelect = (e)=>{
      console.log(e);
      const match = ['home','our rooms','contact','news','about']
      const check = match.some((m)=> m.includes(e))
      if(!check)
      {
      SetActive(true)
      }else{
          SetActive(false);
      }
  }
    return (
        <Navbar className="Navbar" expand="lg" collapseOnSelect>
            <Container>
            <Navbar.Brand as={Link} to={'/'}>RiveSide</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto Header__navbar">
                <Nav.Link eventKey="home" onSelect={handleSelect} as={NavLink} to="/" exact>
                    home
                </Nav.Link>
                <Nav.Link eventKey="our rooms" onSelect={handleSelect} as={NavLink} to="/rooms" exact>
                    ours rooms
                </Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave} show={dropdown || show} 
                onSelect={handleSelect}
                onClick={()=> SetShow(!show)}
              active={active}
                >
                    <NavDropdown.Item eventKey="book online" as={NavLink} to="/room1"  exact>
                        Book online
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="Amenities" as={NavLink} to="/room" exact >
                        Amenities
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="other service" as={NavLink} to="/room2" exact >
                        Other Service
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="guest say" as={NavLink} to="/room3" exact >
                        What Our Guest Say
                    </NavDropdown.Item>
                </NavDropdown>
                 <Nav.Link eventKey="news" onSelect={handleSelect} as={NavLink} to="/news" exact>
                    news
                </Nav.Link>
                <Nav.Link eventKey="contact" onSelect={handleSelect} as={NavLink} to="/contact" exact>
                    contact
                </Nav.Link>
                <Nav.Link eventKey="about" onSelect={handleSelect} as={NavLink} to="/about" exact>
                    about
                </Nav.Link>
                </Nav> 
            </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Headers
