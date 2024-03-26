import React, { useState, useEffect } from 'react';
import '../CSS/FSlide.css';
import { foodarr } from '../FoodList/Cbefood';
import { Link } from 'react-router-dom';
// const Places=["Esha Yoga","Kovai Kutralam Waterfalls","Valparai","Marudamalai Temple","Dhyanalinga Yogic Temple","Perur Pateeswarar Temple","Siruvani Waterfalls","Anamalai Wildlife Sanctuary","Vellingiri Hill Temple","Kovai Kondattam","Gedee Car Museum","CODISSIA Trade Fair Complex"];
export var curfood;
const FSlide = ({name}) => {
	const foodarr1 = foodarr[name];
    const [active, setActive] = useState(0);

    useEffect(() => {
      loadFoods();
    }, [active]);

    const loadFoods = () => {
		let cur = 0;
		const fitems = document.querySelectorAll('.ffslide .fcard');
		curfood = foodarr1[active];
		fitems[active].style.transform = `none`;
		fitems[active].style.zIndex = 1;
		fitems[active].style.filter = 'none';
		fitems[active].style.opacity = 1;

		for (let i = active + 1; i < fitems.length; i++) {
			cur++;
			fitems[i].style.transform = `translateX(${120 * cur}px) scale(${1 - 0.2 * cur}) perspective(16px) rotateY(-1deg)`;
			fitems[i].style.zIndex = -cur;
			fitems[i].style.filter = 'blur(5px)';
			fitems[i].style.opacity = cur > 2 ? 0 : 0.6;
		}

		cur = 0;

		for (let i = active - 1; i >= 0; i--) {
			cur++;
			fitems[i].style.transform = `translateX(${-120 * cur}px) scale(${1 - 0.2 * cur}) perspective(16px) rotateY(1deg)`;
			fitems[i].style.zIndex = -cur;
			fitems[i].style.filter = 'blur(5px)';
			fitems[i].style.opacity = cur > 2 ? 0 : 0.6;
		}
    };

    const handleNextClick = () => {
      	setActive((prevActive) => (prevActive + 1 < foodarr1.length ? prevActive + 1 : prevActive));
    };

    const handlePrevClick = () => {
      	setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
    };

    return (
		<div className="ffslide">
			{foodarr1.map((val)=>{
				return(
				<div className='fcard'>
					<div className='pic'><img id='fimg' className='fpic' src={val.img} alt="PlacePicture"/></div>
					<h9 id='fn'>{val.title}</h9>
					<br></br>
					<Link id='dlink' to='/food' style={{color:"green"}} onClick={()=>{window. scrollTo(0, 0)}}>Go there&gt;&gt;</Link>
				</div>
				);
			})}
			<button id="Fnext" onClick={handleNextClick}>&gt;</button>
			<button id="Fprev" onClick={handlePrevClick}>&lt;</button>
		</div>
    );
};
export default FSlide;