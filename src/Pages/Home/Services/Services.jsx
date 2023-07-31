import { useEffect, useRef, useState } from "react";
import ServiceData from "./ServiceData";

const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, search])

    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }


    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Cookies</h3>
                <h2 className="text-4xl font-bold">Our Cookies Area</h2>
                <p className="">As you explore our virtual cookie wonderland, we invite you <br></br> to experience the joy and nostalgia that our cookies bring. </p>

                <div className="flex justify-between">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() => setAsc(!asc)}
                        className="btn btn-primary">
                        {asc ? "Price: low to high" : "Price: high to low"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceData
                        key={service._id}
                        service={service}
                    ></ServiceData>)
                }
            </div>
        </div>
    );
};

export default Services;