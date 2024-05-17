import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })

    }, []);

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure your want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = bookings.filter(booking => booking._id != id);
                        setBookings(remaining);
                    }

                })
        }
    }
    const handleConfirm = (id) => {

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Data Modified')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'

                    const newBooking = [updated, ...remaining];
                    setBookings(newBooking);
                }

            })

    }
    return (
        <div>
            {bookings.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                    booking={booking}
                                />)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;