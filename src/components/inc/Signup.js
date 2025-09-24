import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Check for password length
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        try {
            const response = await axios.post('http://localhost/car_service_centre/signup.php', {
                name: name,
                email: email,
                password: password,
            });

            // Check response from server
            if (response.data.success) {
                localStorage.setItem('userId', response.data.userId);
                setErrorMessage(''); // Clear error message

                // Redirect to login immediately
                navigate('/login');  // Ensure navigate is working
            } else {
                setErrorMessage(response.data.message); // Set error message from server response
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h3>Sign Up</h3>
            <form className="signup-form" onSubmit={handleSignup}>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="off"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Enter password (min 8 characters)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Display error message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>} 

                <button type="submit" className="btn-success">
                    Sign Up
                </button>
            </form>

            <div className="login-redirect">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-primary">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Signup;
