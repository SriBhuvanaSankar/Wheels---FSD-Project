// src/App.js

import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Accessories from './components/pages/Accessories';
import Navbar from './components/inc/Navbar';
import Login from './components/inc/Login';
import Signup from './components/inc/Signup';
import AppointmentForm from './components/pages/AppointmentForm';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/inc/Footer';
import AdminDashboard from './components/pages/AdminDashboard';
import CarDetailPage from './components/pages/CarDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/status" element={<CarDetailPage />} />
          <Route path="/appointment-form" element={
            <ProtectedRoute>
              <AppointmentForm />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
