import React from 'react';
import '../CSS/Food.css';
import Meen from '../media/Meen.jpg';
import Nav from './Navbar';
import l from '../media/yt.jpg';
import { curfood } from './FSlide';
import SSlide from './SSlide';
const Districts = () => {
	console.log(curfood);
    return (
		<div className='food'>
			<Nav/>
			<div className='foodname'>
				<h1>
					{curfood.title}
				</h1>
			</div>
			<div className='fsec'>
				<img className='Foodpic' src={Meen} alt={curfood.title} />
				<div className='dishbox'>
						<h3>About Dish</h3>
						<p className='dish'>
							Ingredients:<br/>
								Fish: Different types of fish are used based on regional availability and preferences.<br/>
								Spices: Common spices include mustard seeds, fenugreek seeds, turmeric, red chili powder, and coriander powder.<br/>
								Tamarind: This imparts a tangy flavor to the curry.<br/>
								Coconut: Grated or ground coconut is often used to give the curry a rich and creamy texture.<br/>
								Curry leaves: These are commonly used for flavoring.<br/><br/>
							Preparation:<br/>
								The fish is typically marinated with a mix of spices before cooking.<br/>
								A coconut-based paste or coconut milk is often used to create the curry base.<br/>
								Tamarind pulp or tamarind water is added for a tangy taste.<br/>
								The curry is usually seasoned with mustard seeds, fenugreek seeds, and curry leaves.<br/><br/>
							Serving:<br/>
								South Indian fish curry is often served with steamed rice or traditional South Indian staples like dosa or appam.
						</p>
				</div>	
			</div>
			<div className='ytlink'>
			<img className='ytimg' src={l} alt="YTLink" />
				<a className="yt" onClick={()=>window.open(`https://www.youtube.com/results?search_query=${curfood.title}`)}>
					Making Video
				</a>
			</div>
			<div id='BSsec' className='BS-content'>
				
			</div>
		</div>
    );
};
export default Districts;