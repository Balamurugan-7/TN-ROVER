import React from "react";
import {dmap} from './impimg';
import '../CSS/DelData.css';
function handleDel(){

}
const handled = e =>{


}
function showdelplace(){
    document.getElementById("delplace").style.color='rgb(255, 0, 0)';
    document.getElementById("delfood").style.color='white';
    document.getElementById("delplace").style.fontWeight='bolder';
    document.getElementById("delfood").style.fontWeight='lighter';
    document.getElementById("delplacesec").style.display='flex';
    document.getElementById("delfoodsec").style.display='none';
}
function showdelfood(){
    document.getElementById("delplace").style.color='white';
    document.getElementById("delfood").style.color='rgb(255, 0, 0)';
    document.getElementById("delfood").style.fontWeight='bolder';
    document.getElementById("delplace").style.fontWeight='lighter';
    document.getElementById("delplacesec").style.display='none';
    document.getElementById("delfoodsec").style.display='flex';
    
}
function DelData(){
    return (
        <>
            <div className="delactselector">
                <h0 id='delplace' onClick={showdelplace} style={{color:'Red', fontWeight:'bolder'}}>Delete Place</h0>
                <h0 id='delfood' onClick={showdelfood}>Delete Food</h0>
            </div>
            <form id="DBACTIONDEL" method="post" onSubmit={handleDel}>
                <div className="delplacesec" id="delplacesec">
                    <div id="signupSection" className="delform">
                        <select name='dlist' id='ddlist' onChange={handled}>
                            <option id='opt' value = 'Select Any District' style={{color:'#686868'}}> Select District </option>
                            {
                                dmap.map((val)=>{

                                        return(
                                            <option id='opt' value={val.title} style={{color:'#686868'}} > {val.title} </option>
                                );})
                            }
                        </select>
                        <input type="text" id="FPlaceName" className="input" placeholder="PlaceName" name="username" required />
                        <input type="text" id="FPLocation" className="input" placeholder="Location" name="password" required />
                        <input type="text" id="FPHistory" className="input" placeholder="History" name="confirmpassword" required />
                        <input type="file" id="FPImage" required />
                        <button type="button" id="db" onClick={handleDel}>
                            -
                        </button>
                    </div>
                </div>
                <div className="delfoodsec"  id="delfoodsec" style={{display:'none'}}>
                    <div id="signupSection" className="delform">
                        <select name='dlist' id='ddlist' className="foodinput" onChange={handled}>
                            <option id='opt' value = 'Select Any District' style={{color:'#686868'}}> Select District </option>
                            {
                                dmap.map((val)=>{

                                        return(
                                            <option id='opt' value={val.title} style={{color:'#686868'}} > {val.title} </option>
                                );})
                            }
                        </select>
                        <input type="text" id="FFoodName" className="foodinput" placeholder="Dish Name" name="FoodName" required />
                        <input type="text" id="FFLink" className="foodinput" placeholder="Making video Link" name="Making video Link" required />
                        <input type="text" id="FFabtdish" className="foodinput" placeholder="About Dish" name="About Dish" required />
                        <input type="file" id="FFImage" required />
                        <button type="button" id="db" onClick={handleDel}>
                            -
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default DelData;