import React from 'react'
import './header.css'
import Carousel from './carousel/carousel'
import Navigation from './navigarion/navigation'

const Header = () =>{
    return(
        <header className="main-header" >
                       
            <Navigation></Navigation>
            <Carousel></Carousel> 
        </header>
    )
}

export default Header;