// React JS Code
import React from 'react';
import '../CSS/ALogin.css';
import bgvideo2 from '../media/bgvideo2.mp4';
import { useNavigate } from 'react-router-dom';
function Log() {
	const navigate = useNavigate();
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
		navigate('/admin');
	}

	return (
		<div className="container">
		<div className="vid">
			<video autoPlay loop muted id="video">
			<source src={bgvideo2} type="video/mp4" />
			</video>
		</div>
		
		<form id="loginForm" className="aform" method="post" onSubmit={handleLogin}>
			<div className="h0">Welcome Back Cheif !</div>
			<div id="loginSection">
			
			<input type="text" id="loginUsername" className="ainput" placeholder="ID" name="username" required />
			<input type="password" id="loginPassword" className="ainput" placeholder="PW" name="password" required />
			<button type="button" className="alog" onClick={handleLogin}>
			Enter
			</button>
			
			</div>
		</form>
		
		</div>
	);
}

export default Log;