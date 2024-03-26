import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Districts.css';
import Nav from './Navbar';
import tn from '../media/Outlines/TamilNadu-cf.png';
import l from '../media/bg7.png';
import { distar } from './districtpageobj';
export var selected = { name:''};
const Districts = () => {
	const handled =  e =>{
		let m=e.target.value.split("#");
		document.getElementById('mapimg').src = m[0];
		document.getElementById('dimg').src = m[1];
		document.getElementById('dn').innerHTML = m[2];
		document.getElementById('dlink').style.display= 'block';
		console.log(m[2]);
		if(m[2]!="Select Any District")
			selected.name=m[2];
		else
			document.getElementById('dlink').style.display= 'none';
	}
	return (
		<div className='districtbox'>

		<Nav c='default' bc='#083446'/>
		<div className='distsec'>

			<img id='mapimg' className='map' src={tn} alt="Tamil Nadu Map"/>
			<div className='distsel'>
				<select name='dlist' id='dlist' onChange={handled}>
					<option id='opt' value = {tn+'#'+l+'#Select Any District'}> Select District </option>
					{distar.map((val)=>{

						return(
							<option id='opt' value={val.img} > {val.title} </option>
						);
					})}

				</select>			
			</div>
			<div className='dpiccon'>
				<div className='dic'><img id='dimg' className='dpic' src={l} alt="DistrictPicture"/></div>
				<h9 id='dn'>Select Any District</h9>
				<br></br>
				<Link id='dlink' to="/districtdetails" style={{display:'none'}}>Go there&gt;&gt;</Link>
			</div>
		</div>
		
		</div>
	);
};

export default Districts;