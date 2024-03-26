import React, { useState, useEffect } from 'react';
import '../CSS/Admin.css';
import bg from '../media/bgvideo3.mp4';
import Users from './Users';
import Data from './Data';
export function showUsers(){
	document.getElementById('Users').style.display = 'block';
	document.getElementById('DB').style.display = 'none';
	document.getElementById('U').style.cssText = "color: white;font-weight:Bolder;transform:scale(1.2)";
	document.getElementById('D').style.cssText = "color: black";

}
export function showdb(){
	document.getElementById('DB').style.display = 'block';
	document.getElementById('Users').style.display = 'none';
	document.getElementById('D').style.cssText = "color:white;font-weight:Bolder;transform:scale(1.2)";
	document.getElementById('U').style.cssText = "color:black";

}
const UserMan = () => {



return (
	<div className='adminbox'>
		<div className="vid">
		<video autoPlay loop muted id="video">
			<source src={bg} type="video/mp4" />
		</video>
		</div>
		<div className='actionbox'>
			<div className='options'>
				<h0 id='U' onClick={showUsers}>Users</h0>
				<h0 id='D' onClick={showdb}>Database</h0> 
			</div>

			<div id='Users' style={{display:'none'}}>
				<Users />
			</div>
			<div id='DB' style={{display:'none'}}>
				<Data/>
			</div>
		</div>
	</div>
);
};

export default UserMan;
