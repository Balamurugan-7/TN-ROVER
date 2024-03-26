import React from 'react';
import '../CSS/DistrictDetails.css';
import Loco from '../media/Loco.png';
import cbe from '../DistImg/Coimbatore.jpg';
import Nav from './Navbar';
import { Histories ,imgar} from './DDpageobj';
import PSlide from './PSlide';
import FSlide from './FSlide';
import { selected } from './Districts';
// const Places=["Esha Yoga","Kovai Kutralam","Valparai","Marudamalai Temple","Dhyanalinga Yogic Temple","Perur Pateeswarar Temple","Siruvani Waterfalls","Anamalai Wildlife Sanctuary","Vellingiri Hill Temple","Kovai Kondattam","Gedee Car Museum","CODISSIA Trade Fair Complex"];

// const Foods = ["Kothu Parotta","Angannan Biryani","Coimbatore Chicken Wings","Kozhi Kari Varuval (Chicken Fry)","Arisi Paruppu Saadam (Dal Rice)","Coimbatore Fish Curry","Kari Dosa","Kangeyam Nalli Kari","Kadambur Mutton Gravy","Paniyaram","Murukku Sandwich","Coimbatore Halwa","Thengai Paal (Coconut Milk) Payasam","Kambu Koozh (Pearl Millet Porridge)","Kothamalli Chutney",];

export function showplaces(){
  document.getElementById('fpsec').style.display = 'block';
  document.getElementById('ffsec').style.display = 'none';
  window.scrollTo({behavior: 'smooth', top:820 });
  document.getElementById('1s').style.color = 'green';
  document.getElementById('2s').style.color = 'white';
}
export function showfoods(){
  document.getElementById('ffsec').style.display = 'block';
  document.getElementById('fpsec').style.display = 'none';
  window.scrollTo({behavior: 'smooth', top:820 });
  document.getElementById('1s').style.color = 'white';
  document.getElementById('2s').style.color = 'green';
}

const Districts = () => {
  return (
    <div className='page'>
        <Nav c='#1e4725b9'/>
        <div className='box'>
            <h1 className='cbename'>{selected.name}</h1>
            <div className='piccon'>
				<div className='pcon'>
					<img className='Distpic' src={imgar[selected.name]} alt="District" />
				</div>
				<div className="Hist">
					<h3>History</h3>
					<p className='his'>
						{Histories[selected.name]}
					</p>
				</div>
			</div>
			<div className='Location'>
				<img className='Loco' src={Loco} alt="Location" />
				<a className="Loc" onClick={()=>window.open(`https://www.google.com/maps/place/${selected.name}+District`)}>
						Locate {selected.name}
				</a>
			</div>
			<div className='Famous'>
					<h5 id='1s' onClick={showplaces}>Famous Places</h5>
					<h5 id='2s' onClick={showfoods}>Famous Foods</h5>  
			</div>
			<div id='fpsec' className='Fp-content' style={{display:'none'}}>
				{/* <div className="place-buttons">
					{Places.map(createPlaceButton)}
				</div> */}
				<PSlide name={selected.name}/>
			</div>
			<div id='ffsec' className='Ff-content' style={{display:'none'}}>
				{/* <div className="food-buttons">
					{Foods.map(createfoodButton)}
				</div> */}
				<FSlide name={selected.name}/>
			</div>
        </div>
    </div>
    
  );
};
export default Districts;
