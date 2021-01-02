import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css';
const Header = () => {
    const navItems = ['Home', 'Our Rooms', 'features', 'news', 'contact', 'about'];
    const headerLogo="RiverSide"
    const logo = headerLogo.split('').map((i,index)=>
            <span className="logo" key={index}>
                {i}
            </span>
        )
    const [dropdown, setDropdown] = React.useState(false);
     const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
    return ( 
        <div className="Header">
            <h2 className="Header__logo"><span>{logo}</span></h2>
            <nav className="Header__navbar">
                <ul>
                    {
                        navItems.map((item)=>
                        
                            item.toLowerCase()!=='our rooms' && item.toLowerCase()!=='features' ?
                           <li>
                                
                                <NavLink activeClassName="active" exact to={`${item}`} className="Header__navbar-item">{item.toUpperCase()}</NavLink>
                                </li>
                                   : <li  onMouseEnter={onMouseEnter}
                                     onMouseLeave={onMouseLeave}> 
                                         <NavLink activeClassName="active" exact to={`${item}`} className="Header__navbar-item" 
                                         >{item.toUpperCase()} </NavLink>
                                        {dropdown && item.toLowerCase()==="our rooms"&& <div className="dropdown">Hello</div>}
                                    </li>
                            
                            
                        )
                    }
                </ul>
            </nav>
          
        </div>
    )
}

export default Header