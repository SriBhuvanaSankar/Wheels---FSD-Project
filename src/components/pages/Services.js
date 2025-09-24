import React from 'react';
import './Service.css';
import  Cng from '../images/Cng.jpg';
import  Ev from '../images/EV1.jpg';
import  Petrol from '../images/petrl.jpg';
import  Diesel from '../images/disel.jpg';
import Scroller from '../inc/imagescroll';



function Services(){
        return(
            <div>
            <div className="how-it-works">
            <div className="background-image">
              <div className="overlay">
                <h1>How It Works</h1>
                <p>We Offer Full Service Auto Repair & Maintenance</p>
              </div>
            </div>
            <div className="steps">
              <div className="step">
                <h2>01</h2>
                <h3>Choose</h3>
                <p>Choose Your Service From Our Wide Range Of Offerings</p>
              </div>
              <div className="step">
                <h2>02</h2>
                <h3>Book</h3>
                <p>Make An Appointment With Us</p>
              </div>
              <div className="step">
                <h2>03</h2>
                <h3>Fair Pricing</h3>
                <p>Always Get a Fair Quote</p>
              </div>
              <div className="step">
                <h3>04</h3>
                <h3>At Your Doorstep</h3>
                <p>Get a Door Step Pick up & Drop Facility</p>
              </div>
            </div>
            <div className='title'>
                <text>Types of Cars we Service</text>
            </div>
            <div className="image-row">  
              <img src={Petrol} alt="Petrol" className="hover-image" />
              <img src={Cng} alt="Cng" className="hover-image" />
              <img src={Ev} alt="Ev" className="hover-image" />
              <img src={Diesel} alt="Diesel" className="hover-image" />
            </div>
            <div className='title1'>
            <login />   
                <text>Brands we Service</text>
            </div>
          
          </div>
          <Scroller />
          </div>
      );
    };
    

export default Services;