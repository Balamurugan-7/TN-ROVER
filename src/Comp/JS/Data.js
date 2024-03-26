import React ,{useState} from "react";
import '../CSS/Data.css';
import {dmap} from './impimg';
import AddData from "./AddData";
import EditData from "./EditData";
import DelData from "./DelData";
function showadddb(){
    document.getElementById('addd').style.display = 'flex';
    document.getElementById('editd').style.display = 'none';
    document.getElementById('deld').style.display = 'none';
    document.getElementById('a').style.cssText = "color: green;font-weight:Bolder;transform:scale(1.2)";
    document.getElementById('e').style.cssText = "color: white";
    document.getElementById('d').style.cssText = "color: white";
}
function showeditdb(){
    document.getElementById('addd').style.display = 'none';
    document.getElementById('editd').style.display = 'flex';
    document.getElementById('deld').style.display = 'none';
    document.getElementById('e').style.cssText = "color: rgb(197, 184, 0);font-weight:Bolder;transform:scale(1.2)";
    document.getElementById('d').style.cssText = "color: white";
    document.getElementById('a').style.cssText = "color: white";
    
}
function showdeldb(){
    document.getElementById('addd').style.display = 'none';
    document.getElementById('editd').style.display = 'none';
    document.getElementById('deld').style.display = 'flex';
    document.getElementById('d').style.cssText = "color: #a70000;font-weight:Bolder;transform:scale(1.2)";
    document.getElementById('a').style.cssText = "color: white";
    document.getElementById('e').style.cssText = "color: white";

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

function Data(){
        
    return(
        <div>
            <div className='option'>
                <h0 id='a' onClick={showadddb}>Add</h0>
                <h0 id='e' onClick={showeditdb}>Edit</h0> 
                <h0 id='d' onClick={showdeldb}>Delete</h0> 
            </div>
            <div id='addd' style={{display:'none'}}>
                <AddData/>
            </div>
            <div id='editd' style={{display:'none'}}>
                <EditData/>
            </div>
            <div id='deld' style={{display:'none'}}>
                <DelData/>
            </div>
            
        </div>
    );
}
export default Data;