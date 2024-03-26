//Add the code in index.html >>  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
import './App.css';
// import Nav from './Comp/JS/Navbar.js';
// import UserMan from './Comp/JS/UserMan.js';
// import Maptest from './Comp/JS/Maptest.js';
import Home from './Comp/JS/Home.js';
import ALog from './Comp/JS/ALogin.js'
import Profile from './Comp/JS/Profile.js';
import Aboutus from './Comp/JS/AboutUs.js';
import Admin from './Comp/JS/Admin.js';
import Districts from './Comp/JS/Districts.js';
import DistrictDetails from './Comp/JS/DistrictDetails.js';
import Place from './Comp/JS/Place.js';
import Food from './Comp/JS/Food.js';
import {Route,Routes} from 'react-router-dom';
import Log from './Comp/JS/Log';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Log/>}/>
				<Route path='/admin' element={<Admin/>}/>
				<Route path='/adminLog' element={<ALog/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/profile' element={<Profile/>}/>
				<Route path='/aboutus' element={<Aboutus/>}/>
				<Route path='/districts' element={<Districts/>}/>
				<Route path='/districtdetails' element={<DistrictDetails/>}/>'
				<Route path='/place' element={<Place/>}/>
				<Route path='/food' element={<Food/>}/>
			</Routes>
		</div>
	);
}

export default App;
