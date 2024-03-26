import React from "react";
import '../CSS/Place.css';
import Nav from './Navbar';
import Loco from '../media/Loco.png';
import Eye from '../media/Eye.png';
import { curplace } from "./PSlide";
function Place(){
    console.log(curplace);
    return (
        <div className="placepage">
            <Nav/>
            <div className="placebox">
                <h1 className="placeheading">{curplace.title}</h1>
                <div className='psec'>
                    <img className='placepic' src={curplace.img} alt={curplace.title} />
                    <div className='abtplace'>
                            <h3>About Place</h3>
                            <p className='placepara'>
                            {curplace.Hist}
                            </p>
                    </div>	
			    </div>
                <div id="locatebox">
                    <div className='Locateplace'>
                        <img className='Locate' src={Loco} alt="Location" />
                        <p className="Loclink" onClick={()=>{window.open(`https://www.google.com/maps/place/${curplace.title}`)}}>
                                Locate {curplace.title}
                        </p>
                    </div>
                    <div className='Locateplace'>
                        <img className='Locate' src={Eye} alt="Location" />
                        <p className="Loclink" onClick={()=>{window.open('https://www.google.com/maps/@10.9887857,76.6871037,3a,75y,315.41h,102.02t/data=!3m8!1e1!3m6!1sAF1QipPRI2E2q9SfTjoWLeDnmxq0L1ZYkH0qB6zpuK2e!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPRI2E2q9SfTjoWLeDnmxq0L1ZYkH0qB6zpuK2e%3Dw203-h100-k-no-pi-0-ya296.7168-ro0-fo100!7i10240!8i5120?authuser=0&entry=ttu')}}>
                                Virtual Tour
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Place;