import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className='card mt-4'>
                <div className='card-body'>
                    <h3 className="text-center mb-4">Get in Touch</h3>
                    <p className="text-center">
                        Feel free to contact us with any questions. We're here to help!
                    </p>
                    <hr />
                    <div className="row mt-4">
                        {/* Contact Information Column */}
                        <div className="col-md-6 mb-4">
                            <h4>Contact Information</h4>
                            <p>
                                Have a question or need support? We are just a phone call or email away.
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <strong>Phone:</strong> <a href="tel:+1234567890">+91 0000000000</a>
                                </li>
                                <li>
                                    <strong>Email:</strong> <a href="mailto:info@yourcompany.com">Wheels@gmail.com</a>
                                </li>
                                <li>
                                    <strong>Business Hours:</strong><br />
                                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                                    Saturday: 10:00 AM - 2:00 PM<br />
                                    Sunday: Closed
                                </li>
                            </ul>
                        </div>
                        
                        {/* Location and Map Column */}
                        <div className="col-md-6 mb-4">
                            <h4>Our Location</h4>
                            <p>
                                Visit us at our physical location.
                            </p>
                            <address>
                                Dubai Bustand<br />
                                Dubai
                            </address>
                            <div className="embed-responsive embed-responsive-4by3" style={{ height: '300px' }}>
                                {/* Replace with your Google Maps embed code */}
                                <iframe
                                    title="Google Maps Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2842421307613!2d-122.0842496846816!3d37.42206597982548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb565d3a5a40b%3A0x77d13b4e6d4c062c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614748236112!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;