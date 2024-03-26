import React from 'react';
import '../CSS/Profile.css';
import Nav from './Navbar';
import prof from '../profile.jpg';
import PSlide from './PSlide';
const Profile = () => {
    return (
        <div className='pro'>
            <Nav/>
            <div className='prof'>
                <div>
                    <h1 className='head'>Profile</h1>
                </div>
                <img className='proimg' src={prof} alt='Profile Pic !'/>
                <section>
                    <h11 className='ppara'>
                        Name  : User1<br/>
                    </h11>
                    <h11 className='ppara'>
                        Email : user1@tnr.com<br />
                    </h11>
                    <h11 className='ppara'>
                        Phone : +91 987 654 321<br />
                    </h11>
                </section>
                <div className='foo'>
                    <h11 className='ppara' >
                        Thank You !
                    </h11>
                </div>
                
            </div>
            {/* <PSlide/> */}
        </div>
    );
};

export default Profile;
