import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setStars(data))
    }, [])

    const actorSelect = () => {
        console.log('actor clicked')
    }

    return (
        <div className="flex">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
                {
                    stars.map(star =>

                        <div key={star.id} className="card shadow-sm shadow-gray-600">
                            <figure><img src={star.image} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{star.name}</h2>
                                <p>Profession: {star.role}</p>
                                <p>Salary: {star.salary}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={actorSelect} className="btn btn-accent">Select</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
            <div className="w-1/4">
                <h3>Cart body</h3>
            </div>
        </div>
    );
};

export default Home;