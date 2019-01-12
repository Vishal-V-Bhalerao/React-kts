import React from 'react'
import './carousel.css'
const Carousel = () => {
    return (
        <div id="demo" className=" carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner"> 
                <div className="carousel-item active">
                    <img src={require("../../assets/mastheadTwo.jpg")} alt="oil plant" />
                </div>
                <div className="carousel-item">
                    <img src={require("../../assets/north_sea_two.jpg")} alt="gas plant"  />
                </div>
                <div className="carousel-item">
                    <img src={require("../../assets/oil_mines_two.jpg")} alt="sea plant"  />
                </div>
            </div>


            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}

export default Carousel; 