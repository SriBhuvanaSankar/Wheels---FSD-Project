import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [summary, setSummary] = useState({ total: 0, completed: 0, pending: 0, appointmentsByDate: {} });
    const [selectedDate, setSelectedDate] = useState(new Date());

    const statusFlow = ['Car Received', 'Service Ongoing', 'Checking End Status', 'Complete'];

    // Helper function to process appointment data and highlight dates
    const processAppointments = (data) => {
        const total = data.length;
        const completed = data.filter(app => app.status === 'Complete').length;
        const pending = total - completed;

        const appointmentsByDate = data.reduce((acc, appointment) => {
            const date = new Date(appointment.booking_slot).toISOString().split('T')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(appointment);
            return acc;
        }, {});

        setSummary({ total, completed, pending, appointmentsByDate });
        setAppointments(data);
    };

    // Fetch Appointments
    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost/car_service_centre/get_appointments.php', {
                method: 'GET',
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            if (data.success) {
                processAppointments(data.appointments);
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Error fetching appointments:', error);
            setErrorMessage('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Function to move to the next status
    const moveToNextStatus = async (id, currentStatus) => {
        const currentStatusIndex = statusFlow.indexOf(currentStatus);
        const nextStatus = statusFlow[currentStatusIndex + 1];
        if (!nextStatus) {
            setErrorMessage('This appointment has already been completed.');
            return;
        }
        try {
            const response = await fetch('http://localhost/car_service_centre/update_status.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ id, status: nextStatus }),
            });
            const data = await response.json();
            if (data.success) {
                fetchAppointments(); // Re-fetch to update all data and counts
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Error updating status:', error);
            setErrorMessage('Failed to update the status. Please try again.');
        }
    };

    // Delete Appointment function
    const deleteAppointment = async (id) => {
        try {
            const response = await fetch('http://localhost/car_service_centre/delete_appointment.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ id }),
            });
            const data = await response.json();
            if (data.success) {
                fetchAppointments(); // Re-fetch to update all data and counts
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Error deleting appointment:', error);
            setErrorMessage('Failed to delete the appointment. Please try again.');
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    // Filter appointments based on the selected date for the table view
    const filteredAppointments = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.booking_slot).toISOString().split('T')[0];
        const selectedDateString = selectedDate.toISOString().split('T')[0];
        return appointmentDate === selectedDateString;
    });

    // Function to add a special class to tiles with appointments
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = date.toISOString().split('T')[0];
            if (summary.appointmentsByDate[formattedDate]) {
                return 'has-appointments'; // The custom CSS class
            }
        }
    };

    return (
        <div className="admin-dashboard-container">
            <h1>Admin Dashboard 🚗💨</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
            <div className="dashboard-summary">
                <div className="summary-card"><h2>Total Appointments</h2><p>{summary.total}</p></div>
                <div className="summary-card"><h2>Pending Service</h2><p>{summary.pending}</p></div>
                <div className="summary-card"><h2>Completed</h2><p>{summary.completed}</p></div>
            </div>

            <div className="calendar-and-appointments-container">
                <div className="calendar-container">
                    <h2>Select a Date</h2>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        tileClassName={tileClassName}
                    />
                </div>
            
                <div className="appointments-for-date">
                    <h2>Appointments on {selectedDate.toLocaleDateString()}</h2>
                    {loading ? (
                        <p>Loading appointments...</p>
                    ) : filteredAppointments.length === 0 ? (
                        <p>No appointments on this date. 🎉</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Company Name</th>
                                    <th>Color</th>
                                    <th>KMs Driven</th>
                                    <th>Last Serviced KMs</th>
                                    <th>Model</th>
                                    <th>Variant</th>
                                    <th>Fuel Type</th>
                                    <th>Booking Slot</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAppointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td>{appointment.user_id}</td>
                                        <td>{appointment.company_name}</td>
                                        <td>{appointment.color}</td>
                                        <td>{appointment.kilometers_driven}</td>
                                        <td>{appointment.last_serviced_km}</td>
                                        <td>{appointment.model}</td>
                                        <td>{appointment.variant}</td>
                                        <td>{appointment.fuel_type}</td>
                                        <td>{new Date(appointment.booking_slot).toLocaleString()}</td>
                                        <td>{appointment.status}</td>
                                        <td>
                                            <button
                                                onClick={() => moveToNextStatus(appointment.id, appointment.status)}
                                                disabled={appointment.status === 'Complete'}
                                            >
                                                {appointment.status === 'Complete' ? 'Completed' : 'Move to Next'}
                                            </button>
                                            <button onClick={() => deleteAppointment(appointment.id)} className="delete">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;