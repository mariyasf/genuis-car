import { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })

    }, []);


    return (
        <div >
            <div className="text-center space-y-5 my-10">
                <h3 className="text-3xl text-[#FF3811] font-bold">Our Services</h3>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or
                    <br /> randomised words which don't look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Services;