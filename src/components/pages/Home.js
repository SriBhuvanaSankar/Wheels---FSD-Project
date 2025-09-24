import React from 'react';
import Slider from '../inc/Slider';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleBookAppointment = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';

        if (isLoggedIn) {
            navigate('/appointment-form'); // Navigate to appointment form if logged in
        } else {
            alert('Please sign up or log in to book an appointment');
            navigate('/login'); // Redirect to login if not logged in
        }
    };

    return (
        <div>
            <Slider />
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='button-container'>
                                <div className='text'>
                                    <p>Ready to schedule your service?</p>
                                    <p>Click below to book an appointment with us.</p>
                                </div>
                                <button onClick={handleBookAppointment} className='bookbtn'>
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>What is Wheels</h3>
                            <div className='under-line mx-auto'></div>
                            <p>Welcome to Wheels, your trusted car service center! At Wheels, we offer top-notch maintenance, repair, and customization services to keep your vehicle in peak condition. Our skilled technicians use the latest technology and highest quality parts to ensure your car runs smoothly and safely. Drive in today and experience the Wheels difference where your car's health is our priority.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
