import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const BookingService = () => {
    const servicedata = useLoaderData();
    const { title, _id, price, img } = servicedata;
    const { user } = useContext(AuthContext);

    const handleBookService = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log('Place your order', order);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId > 0) {
                    alert("Service book successfully");
                }
            })
    }

    return (


        <form className="card-body"
            onSubmit={handleBookService}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" defaultValue={user?.displaName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Ammount</span>
                    </label>
                    <input type="number" defaultValue={'$' + price} className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
            </div>

            <div className="form-control mt-6">
                <input className='btn btn-error btn-block text-white uppercase' type="submit" value="Confirm" />
            </div>
        </form>
    );
};

export default BookingService;