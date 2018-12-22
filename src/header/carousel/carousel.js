import React from 'react'
import './carousel.css'
const Carousel = () => {
    return (
        <div id="demo" class=" carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner"> 
                <div class="carousel-item active">
                    <img src={require("../../assets/gas_plant.jpg")} alt="oil plant" />
                </div>
                <div class="carousel-item">
                    <img src={require("../../assets/oil_plant.jpg")} alt="gas plant"  />
                </div>
                <div class="carousel-item">
                    <img src={require("../../assets/sea_plant.jpg")} alt="sea plant"  />
                </div>
            </div>


            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}

export default Carousel; 