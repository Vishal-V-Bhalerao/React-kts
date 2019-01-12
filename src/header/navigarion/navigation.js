import React from 'react'
import './navigation.css'
import NavigationDropdown from '../navigation-dropdown/navigationDropdown'
const Navigation = () => {
let menu = [
    {
        header: 'COMPANY',
        subMenuList:[
            {name:'About us', link:'#'},
            {name:'Leadership', link:'#'},
            {name:'Milestones', link:'#'},
            {name:'Cirtifications', link:'#'}
        ]
    },
    {
        header: 'BUSINESS',
        subMenuList:[
            {name:'Over View', link:'#'},
            {name:'Oil & Gas', link:'#'},
            {name:'Automotive', link:'#'}
        ]
    },
    {
        header: 'FACILITIES',
        subMenuList:[
            {name:'Engineering', link:'#'},
            {name:'Machining', link:'#'},
            {name:'Quality', link:'#'},
            {name:'Health', link:'#'}
        ]
    }
]

let dropDownMenu = (
    <frameElement></frameElement>
)
return (
    <div className="navigation-container" >
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a href="#" className="navbar-brand mr-400">KTS</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarMenu" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item mx-4 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            COMPANY
                           </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">About Us</a>
                            <a class="dropdown-item" href="#">Leadership</a>
                            <a class="dropdown-item" href="#">Milestones</a>
                            <a class="dropdown-item" href="#">Certifications</a>
                        </div>
                    </li>
                    <li className="nav-item mx-4 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            BUSINESS
                           </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Over View</a>
                            <a class="dropdown-item" href="#">Oil & Gas</a>
                            <a class="dropdown-item" href="#">Automotive</a>

                        </div>
                    </li>
                    <li className="nav-item mx-4 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            FACILITIES
                           </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Engineering</a>
                            <a class="dropdown-item" href="#">Machining</a>
                            <a class="dropdown-item" href="#">Quality</a>
                            <a class="dropdown-item" href="#">Special Service</a>
                        </div>
                    </li>
                    <li className="nav-item mx-4 pt-2">CLIENTS</li>
                    <li className="nav-item mx-4 pt-2">HEALTH</li>
                    <li className="nav-item mx-4 pt-2">CAREERS</li>
                    <li className="nav-item mx-4 pt-2">CONTACT US</li>
                </ul>
            </div>
        </nav>
    </div>
)
}

export default Navigation;