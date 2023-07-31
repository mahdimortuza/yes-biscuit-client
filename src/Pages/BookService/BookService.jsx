import { useContext } from "react";
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const services = useLoaderData()
    const { _id, title, price, img } = services
    const { user } = useContext(AuthContext)


    const handleBookService = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const price = form.price.value

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price,
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <h2 className="text-3xl text-center">Book service {title}</h2>

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <input className="btn btn-primary btn-block mt-5" type="submit" value="Order Confirm"></input>
            </form>
        </div>

    );
};

export default Checkout;