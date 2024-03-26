import React, { useState, useEffect } from 'react';
import '../CSS/PSlide.css';
import { picarr } from '../PlaceList/Cbeplace';
import { Link } from 'react-router-dom';
export var curplace;
// const Places=["Esha Yoga","Kovai Kutralam Waterfalls","Valparai","Marudamalai Temple","Dhyanalinga Yogic Temple","Perur Pateeswarar Temple","Siruvani Waterfalls","Anamalai Wildlife Sanctuary","Vellingiri Hill Temple","Kovai Kondattam","Gedee Car Museum","CODISSIA Trade Fair Complex"];
const SlideShow = ({name}) => {
	const picarr1 = picarr[name];
	const [active, setActive] = useState(0);
	useEffect(() => {
		loadPlace();
	}, [active]);

	const loadPlace = () => {
		let cur = 0;
		const pitems = document.querySelectorAll('.fpslide .pcard');

		pitems[active].style.transform = `none`;
		pitems[active].style.zIndex = 1;
		pitems[active].style.filter = 'none';
		pitems[active].style.opacity = 1;
		curplace = picarr1[active];

		for (let i = active + 1; i < pitems.length; i++) {
			cur++;
			pitems[i].style.transform = `translateX(${120 * cur}px) scale(${1 - 0.2 * cur}) perspective(16px) rotateY(-1deg)`;
			pitems[i].style.zIndex = -cur;
			pitems[i].style.filter = 'blur(5px)';
			pitems[i].style.opacity = cur > 2 ? 0 : 0.6;
		}

		cur = 0;

		for (let i = active - 1; i >= 0; i--) {
			cur++;
			pitems[i].style.transform = `translateX(${-120 * cur}px) scale(${1 - 0.2 * cur}) perspective(16px) rotateY(1deg)`;
			pitems[i].style.zIndex = -cur;
			pitems[i].style.filter = 'blur(5px)';
			pitems[i].style.opacity = cur > 2 ? 0 : 0.6;
		}
	};

	const handleNextClick = () => {
		setActive((prevActive) => (prevActive + 1 < picarr1.length ? prevActive + 1 : prevActive));
	};

	const handlePrevClick = () => {
		setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
	};

	return (
		<div className="fpslide">
		{picarr1.map((val)=>{
			return(
				<div className='pcard'>
				<div className='pic'><img id='pimg' className='ppic' src={val.img} alt="PlacePicture"/></div>
				<h9 id='pn'>{val.title}</h9>
				<br></br>
				<Link to='/place' id='dlink' onClick={()=>{curplace = picarr1[active];window. scrollTo(0, 0)}} style={{color:"green"}}>Go there&gt;&gt;</Link>
				</div>
			);
		})}
		<button id="Pnext" onClick={handleNextClick}>&gt;</button>
		<button id="Pprev" onClick={handlePrevClick}>&lt;</button>
		</div>
	);
};

export default SlideShow;