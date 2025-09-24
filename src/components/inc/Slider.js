import React from 'react';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider3.jpg';

function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={Slider1} className="d-block w-100" alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Skillfull Service Crew</h5>
                        <p>here we have world class service crew to care about your car</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={Slider2} className="d-block w-100" alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Best customer support</h5>
                        <p>you will experience most friendly customer service support ever</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={Slider3} className="d-block w-100" alt="Third slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Quality that's what we known for</h5>
                        <p>we serve you with the best and original products which suit you well</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
