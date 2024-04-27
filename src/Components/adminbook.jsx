import React, { useState } from 'react';

function AdminPage() {
    // Dummy booking details
    const [bookings, setBookings] = useState([
        { id: 1, userEmail: "user1@example.com", service: "Home Services", date: "2024-04-01", status: "Pending" },
        { id: 2, userEmail: "user2@example.com", service: "Facility Care", date: "2024-04-02", status: "Pending" },
        { id: 3, userEmail: "user3@example.com", service: "Respite Care", date: "2024-04-03", status: "Pending" },
        // Add more dummy booking details as needed
    ]);

    const handleApprove = (id) => {
        // Update the status of the booking to "Approved"
        const updatedBookings = bookings.map(booking => {
            if (booking.id === id) {
                return { ...booking, status: "Approved" };
            }
            return booking;
        });
        setBookings(updatedBookings);
    };

    const handleReject = (id) => {
        // Update the status of the booking to "Rejected"
        const updatedBookings = bookings.map(booking => {
            if (booking.id === id) {
                return { ...booking, status: "Rejected" };
            }
            return booking;
        });
        setBookings(updatedBookings);
    };

    return (
        <div style={{ textAlign: "center", margin: "20px auto", maxWidth: "800px" }}>
            <h1>Admin Page - Booking Details</h1>
            <div style={{ border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>ID</th>
                            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>User Email</th>
                            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>Service</th>
                            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>Date</th>
                            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{booking.id}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{booking.userEmail}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{booking.service}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{booking.date}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                                    {booking.status === "Pending" && (
                                        <>
                                            <button style={{ backgroundColor: "#4CAF50", color: "white", border: "none", padding: "5px 10px", marginRight: "5px", borderRadius: "5px" }} onClick={() => handleApprove(booking.id)}>Approve</button>
                                            <button style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={() => handleReject(booking.id)}>Reject</button>
                                        </>
                                    )}
                                    {booking.status === "Approved" && <span style={{ color: "#4CAF50" }}>Successfully Approved</span>}
                                    {booking.status === "Rejected" && <span style={{ color: "#f44336" }}>Successfully Rejected</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminPage;
