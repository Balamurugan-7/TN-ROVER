import React from 'react';
import '../CSS/AboutUs.css';
import Nav from './Navbar';
const AboutUs = () => {
	return (
		<div className='abtus'>
			<Nav/>
			<div className='abt'>
				<div>
					<h1 className='head'>About Us</h1>
				</div>
				<section>
					<p className='para'>
						Welcome to our About Us page! We are delighted to share the story of our passion for Tamil Nadu,
						where history, culture, and gastronomy intertwine to create a unique and immersive experience.
						TN-Rover is not just a website; it's a journey through the heart of this vibrant Indian state.
					</p>
					<p className='para'>
						Our mission is to bring you the fascinating history, iconic landmarks, and delectable cuisine
						from the diverse districts of Tamil Nadu. We are committed to showcasing the beauty and
						richness of this region, inviting you to embark on a virtual journey through time and taste.
					</p>
				</section>
				{/* <section>
					<h2>Meet the Team</h2>
					<p className='para'>
					Our dedicated team of enthusiasts is committed to delivering valuable information and an
					immersive experience. We believe in the power of storytelling to connect people with the
					heritage and flavors of Tamil Nadu.
					</p>
					
				</section> */}
				<section>
					<h2 className='contact'>Contact Us</h2>
					<p>
						We would love to hear from you! 
					</p>
					<p>
						Feel free to reach out to us with any questions, suggestions,
						or feedback.
					</p>
					<p>
						Email: admin@tnrover.com<br />
						Phone: +91 123 456 7890<br />
						Address: TN-Rover, Karpagam Engg College, Coimbatore, Tamilnadu, India
					</p>
				</section>
				<footer>
					<p>&copy; 2023 TN-Rover</p>
				</footer>
			</div>
		</div>
	);
};

// Export the AboutUs component
export default AboutUs;
