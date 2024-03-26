import React from 'react';
import '../CSS/Home.css';
import Nav from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='homecontainer'>
            <Nav c='default' bc='#083446'/>
            <div className='a'>
                <div className='welcome'>
                    <h1>
                        <h3>Welcome to TNRover - Unveiling the TN Treasures</h3>
                    </h1>
                    <p className='hpara'>
                        Discover the rich tapestry of Tamil Nadu, where history, culture, and gastronomy intertwine to create an immersive experience like no other. TNRover is your gateway to the heart of this vibrant Indian state, where every district holds a unique story waiting to be told.
                    </p>
                    <h2>Journey Through Time</h2>
                    <p className='hpara'>
                        Embark on a journey through time as we unravel the fascinating history of each district. From ancient civilizations to modern marvels, Tamil Nadu's past is etched in every corner, and we're here to guide you through its captivating narrative.
                    </p>

                    <h2>Culinary Odyssey</h2>
                    <p className='hpara'>
                        Prepare your taste buds for a culinary odyssey! Tamil Nadu is a heaven for food enthusiasts, and we've curated a gastronomic adventure for you. Explore the vibrant street food scene, savor traditional recipes passed down through generations, and discover the best flavors of Tamil Nadu.
                    </p>

                    <h2 >Your Journey Awaits</h2>
                    <p className='hfoot'>
                        Start your journey now and unlock the secrets of Tamil Nadu's districts !
                    </p>
                </div>
                <Link to='/districts' className='dlink'>
                    <button className='explore'>
                        Explore Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
