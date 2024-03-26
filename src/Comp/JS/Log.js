// React JS Code
import React from 'react';
import '../CSS/Log.css';
import ai from '../media/cy2.png';
import { Link, useNavigate } from 'react-router-dom';
function Log() {
	const navigate = useNavigate();
	function showLogin() {
		document.getElementById('loginSection').style.display = 'block';
		document.getElementById('signupSection').style.display = 'none';
		document.getElementById('loginForm').classList.add('active');
		document.getElementById('loginForm').classList.remove('active');
	}
	function showSignup() {
		document.getElementById('loginSection').style.display = 'none';
		document.getElementById('signupSection').style.display = 'block';
		document.getElementById('loginForm').classList.add('active');
		document.getElementById('loginForm').classList.remove('active');
	}

	function showErrorAnimation() {
		var form = document.getElementById('loginForm');
		form.classList.add('error');
		setTimeout(function () {
			form.classList.remove('error');
		}, 500);
	}

	function handleLogin() {
		var username = document.getElementById('loginUsername').value;
		var password = document.getElementById('loginPassword').value;

		if (username === '' || password === '') {
			console.error('Invalid credentials');
			showErrorAnimation();
			return;
		}
		console.log('Logging in with:', { username, password });
		navigate('home');
	}

	function handleSignup() {
		var username = document.getElementById('signupUsername').value;
		var password = document.getElementById('signupPassword').value;

		if (username === '' || password === '') {
			console.error('Invalid credentials');
			showErrorAnimation();
			return;
		}
		console.log('Signing up with:', { username, password });
		navigate('home');
	}

	return (
		<div className="logcontainer">
			{/* <div className="video">
				<video autoPlay loop muted id="video">
				<source src={Login} type="video/mp4" />
				</video>
				</div> */}
			<form id="loginForm" className="form" method="post" onSubmit={handleSignup}>

				<div id="loginSection">

					<h2 className="h2">Login</h2>
					<input type="text" id="loginUsername" className="input" placeholder="Username" name="username" required />
					<input type="password" id="loginPassword" className="input" placeholder="Password" name="password" required />
					<button type="button" className="logbutton" onClick={handleLogin}>
						Login
					</button>
					
					<button type="button" className="switch" onClick={showSignup}>
						Switch to Signup
					</button>

				</div>

				<div id="signupSection" style={{ display: 'none' }}>

					<h2 className="h2" style={{color:"white"}}>Sign Up</h2>
					<input type="text" id="signupUsername" className="input" placeholder="Username" name="username" required />
					<input type="password" id="signupPassword" className="input" placeholder="Password" name="password" required />
					<input type="password" id="confirmPassword" className="input" placeholder="Confirm Password" name="confirmpassword" required />
					<input type="tel" id="number" pattern='[0-9]{10}' className="input" placeholder="Mobile Number" name="number" required />
					<button type="button" className="logbutton" onClick={handleSignup}>
						Sign Up
					</button>
					<button type="button" className="switch" onClick={showLogin}>
						Switch to Login
					</button>
					
				</div>
			</form>
			<Link className='alink' to="/adminlog">
					<img className='aimg' src={ai} alt='i'/>
			</Link>
		</div>
	);
}

export default Log;