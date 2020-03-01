import React from 'react'
import '../App.css'
import { logDOM } from '@testing-library/react';

function Home(){
    return (
        <div className="box">
            <header className="background-one py-5 bg-image-full">
                <h1 className="mx-auto text-light w-50 mt-3" >We are Open Pantry</h1>
            </header>

            <section className="py-5">
                <div className="container">
                <h1>Our Mission</h1>
                <p className="lead">Giving you the power to make the world a better place. </p>
                <p>We were founded on a principle fairness. Open Pantry is a network in which individuals and business owner can come together and give back to their communities. Open Pantry is a platform for kitchens everywhere to be able to serve a wide amount of people with quality fresh food which would otherwise be wasted. Open Pantry is the link between the individual and the masses. </p>
                </div>
            </section>

            <section className="background-two py-5 bg-image-full">
                <div className="bg-two"></div>
            </section>

            <section className="py-5">
                <div className="container">
                <h1>Give Back</h1>
                <p className="lead">Sharing is caring. </p>
                <p>With millions in food wastage every day, Open Pantry is giving back. Giving back to the communities which thrive with collaboration. Giving back to nature which supports a cleaner ecosystem for the future coming generations.</p>
                </div>
            </section>
        </div>
    )
}
export default Home;