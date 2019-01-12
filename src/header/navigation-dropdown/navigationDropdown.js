import React from 'react'
import './navigation-dropdown.css'

const NavigationDropdown = (props) => {
    let subMenu = (
        <div class="dropdown-menu" >
            {props.subMenuList.map((subMenuItem)=>{
                // <a class="dropdown-item" href="subMenuItem.link">subMenuItem.name</a>
            })}
        </div> 
    )
    return (
        <li className="nav-item mx-4 dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                {props.header}
                           </a>
            {subMenu}
        </li>
    );
}

export default NavigationDropdown;