import React from "react";
import {dmap} from './impimg';
import '../CSS/AddData.css';
function AddData(){
    function handleAdd(){
    
    }
    const handled = e =>{
    
    }
    function showaddplace(){
        document.getElementById("addplace").style.color='Green';
        document.getElementById("addfood").style.color='white';
        document.getElementById("addplace").style.fontWeight='bolder';
        document.getElementById("addfood").style.fontWeight='lighter';
        document.getElementById("addplacesec").style.display='flex';
        document.getElementById("addfoodsec").style.display='none';
    }
    function showaddfood(){
        document.getElementById("addplace").style.color='white';
        document.getElementById("addfood").style.color='Green';
        document.getElementById("addfood").style.fontWeight='bolder';
        document.getElementById("addplace").style.fontWeight='lighter';
        document.getElementById("addplacesec").style.display='none';
        document.getElementById("addfoodsec").style.display='flex';
        
    }
    return (
        <>
            <div className="addactselector">
                    <h0 id='addplace' onClick={showaddplace} style={{color:'Green', fontWeight:'bolder'}}>Add Place</h0>
                    <h0 id='addfood' onClick={showaddfood}>Add Food</h0>
                </div>
                <form id="DBACTIONADD" method="post" onSubmit={handleAdd}>
                    <div className="addplacesec" id="addplacesec">
                        <div id="signupSection" className="addform">
                            <select name='dlist' id='adlist' onChange={handled}>
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
                            <button type="button" id="ab" onClick={handleAdd}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="addfoodsec"  id="addfoodsec" style={{display:'none'}}>
                        <div id="signupSection" className="addform">
                            <select name='dlist' id='adlist' onChange={handled}>
                                <option id='opt' value = 'Select Any District' style={{color:'#686868'}}> Select District </option>
                                {
                                    dmap.map((val)=>{
                                            return(
                                                <option id='opt' value={val.title} style={{color:'#686868'}} > {val.title} </option>
                                    );})
                                }
                            </select>
                            <input type="text" id="FFoodName" className="input" placeholder="Dish Name" name="FoodName" required />
                            <input type="text" id="FFLink" className="input" placeholder="Making video Link" name="Making video Link" required />
                            <input type="text" id="FFabtdish" className="input" placeholder="About Dish" name="About Dish" required />
                            <input type="file" id="FFImage" required />
                            <button type="button" id="ab" onClick={handleAdd}>
                                +
                            </button>
                        </div>
                    </div>
                </form>
        </>
    );
}
export default AddData;