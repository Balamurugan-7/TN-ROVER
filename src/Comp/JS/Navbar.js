import React from "react";
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';
import ylogo from '../logo.png';
import prof from '../profile.jpg';
function Navbar({c,bc}){
    return(
		<div id="header">
			{/* <header> */}
				<div className="logo">
					<img src={ylogo} alt="Logo" />
				</div>
				<h5 className="Title"  style={{color : c}}>TN-ROVER</h5>
				<nav>
					<Link to="/home" ><button className="navbutton" style={{backgroundColor : bc}}>Home</button></Link>
					<Link to="/profile"><button className="navbutton" style={{backgroundColor : bc}}>Profile</button></Link>
					<Link to="/aboutus"><button className="navbutton" style={{backgroundColor : bc}}>About Us</button></Link>
				</nav>
				<div className="menubar">
					<button className="navbutton" style={{backgroundColor : bc,color : 'white'}}>Menu</button>
					<div className="screennav">
						<Link to="/home" ><button className="navbutton" style={{backgroundColor : bc}}>Home</button></Link>
						<Link to="/profile"><button className="navbutton" style={{backgroundColor : bc}}>Profile</button></Link>
						<Link to="/aboutus"><button className="navbutton" style={{backgroundColor : bc}}>About Us</button></Link>
					</div>
				</div>
				<Link to="/profile" className="profile-picture">
					<img src={prof} alt="Profile Picture" />
				</Link>
			{/* </header> */}
		</div>
        
    );
}
export default Navbar;