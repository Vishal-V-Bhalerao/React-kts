import React from 'react'
import './header.css'
import Carousel from './carousel/carousel'

const Header = () =>{
    return(
        <header className="main-header" >
            <Carousel></Carousel>            
        </header>
    )
}

export default Header;