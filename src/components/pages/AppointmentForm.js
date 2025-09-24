import React, { useState, useEffect } from 'react';
import './Appointment.css';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        color: '',
        kilometersDriven: '',
        lastServicedKm: '',
        model: '',
        variant: '',
        fuelType: '',
        bookingSlot: '',
        address: '',  // Added address field
        phoneNumber: '',  // Added phone number field
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is admin

    useEffect(() => {
        // Check if the user is an admin (you can change this according to your implementation)
        const userRole = localStorage.getItem('userRole'); // Assume you store user role in localStorage
        if (userRole === 'admin') {
            setIsAdmin(true);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the booking slot is in the past
        const bookingDateTime = new Date(formData.bookingSlot);
        const currentDateTime = new Date();
        
        if (bookingDateTime <= currentDateTime) {
            setErrorMessage('Booking slot must be in the future.');
            setSuccessMessage('');
            return; // Stop the form submission
        }

        const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
        const appointmentData = { ...formData, userId, isAdmin }; // Include isAdmin in the request

        try {
            const response = await fetch('http://localhost/car_service_centre/appointment.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData),
                credentials: 'include' // Important to send session cookies
            });

            const data = await response.json();

            if (data.success) {
                setSuccessMessage(data.message);
                setErrorMessage('');
                setFormData({
                    companyName: '',
                    color: '',
                    kilometersDriven: '',
                    lastServicedKm: '',
                    model: '',
                    variant: '',
                    fuelType: '',
                    bookingSlot: '',
                    address: '',  // Reset address
                    phoneNumber: '',  // Reset phone number
                });
            } else {
                setErrorMessage(data.message); // Show error if slot is booked
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setErrorMessage('Something went wrong. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="appointment-form-container">
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input 
                        type="text" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Car Color:
                    <input 
                        type="text" 
                        name="color" 
                        value={formData.color} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Kilometers Driven:
                    <input 
                        type="number" 
                        name="kilometersDriven" 
                        value={formData.kilometersDriven} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Last Serviced Kilometers:
                    <input 
                        type="number" 
                        name="lastServicedKm" 
                        value={formData.lastServicedKm} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Model:
                    <input 
                        type="text" 
                        name="model" 
                        value={formData.model} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Variant:
                    <input 
                        type="text" 
                        name="variant" 
                        value={formData.variant} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Fuel Type:
                    <select 
                        name="fuelType" 
                        value={formData.fuelType} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select fuel type</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="CNG">CNG</option>
                        <option value="Electric">Electric</option>
                    </select>
                </label>
                <br />
                <label>
                    Booking Slot:
                    <input 
                        type="datetime-local" 
                        name="bookingSlot" 
                        value={formData.bookingSlot} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Address:  {/* Added address field */}
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        required
                    />
                </label>
                <br />
                <label>
                    Phone Number:  {/* Added phone number field */}
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        placeholder="Enter your phone number"
                        required
                    />
                </label>
                <br />
                <button type="submit">Book Appointment</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default AppointmentForm;
