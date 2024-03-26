import React from "react";
import {dmap} from './impimg';
import '../CSS/EditData.css';
function handleEdit(){

}
const handled = e =>{

}
function showeditplace(){
    document.getElementById("editplace").style.color='Green';
    document.getElementById("editfood").style.color='white';
    document.getElementById("editplace").style.fontWeight='bolder';
    document.getElementById("editfood").style.fontWeight='lighter';
    document.getElementById("editplacesec").style.display='flex';
    document.getElementById("editfoodsec").style.display='none';
}
function showeditfood(){
    document.getElementById("editplace").style.color='white';
    document.getElementById("editfood").style.color='Green';
    document.getElementById("editfood").style.fontWeight='bolder';
    document.getElementById("editplace").style.fontWeight='lighter';
    document.getElementById("editplacesec").style.display='none';
    document.getElementById("editfoodsec").style.display='flex';
    
}
function EditData(){
    return (
        <>
            <div className="editactselector">
                <h0 id='editplace' onClick={showeditplace} style={{color:'rgb(197, 184, 0)', fontWeight:'bolder'}}>Edit Place</h0>
                <h0 id='editfood' onClick={showeditfood}>Edit Food</h0>
            </div>
            <form id="DBACTIONEDIT" method="post" onSubmit={handleEdit}>
                <div className="editplacesec" id="editplacesec">
                    <div id="signupSection" className="editform">
                        <select name='dlist' id='edlist' onChange={handled}>
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
                        <button type="button" id="eb" onClick={handleEdit}>
                            #
                        </button>
                    </div>
                </div>
                <div className="editfoodsec"  id="editfoodsec" style={{display:'none'}}>
                    <div id="signupSection" className="editform">
                        <select name='dlist' id='edlist' className="foodinput" onChange={handled}>
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
                        <button type="button" id="eb" onClick={handleEdit}>
                            #
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default EditData;