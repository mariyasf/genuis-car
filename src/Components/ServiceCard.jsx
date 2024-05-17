import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811]">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/bookingService/${_id}`}>
                        <button className="btn bg-[#FF3811] text-white">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;