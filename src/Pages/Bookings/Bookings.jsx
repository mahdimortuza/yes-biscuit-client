import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate()


    const url = `https://yes-biscuit-server.vercel.app/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                } else {
                    navigate('/')
                }
            });
    }, [url, navigate]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`https://yes-biscuit-server.vercel.app/bookings/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Delete successful");
                        setBookings(prevBookings => prevBookings.filter(booking => booking._id !== id));
                    }
                });
        }
    };

    const handleBookingConfirm = id => {
        fetch(`https://yes-biscuit-server.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Update state
                    setBookings(prevBookings =>
                        prevBookings.map(booking =>
                            booking._id === id ? { ...booking, status: "confirm" } : booking
                        )
                    );
                }
            });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {bookings.map(booking => (
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
