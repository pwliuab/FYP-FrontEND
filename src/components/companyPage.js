import './styles/Navbar.css';
import './styles/company.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import userimage from './user_icon.png';

function Company(){
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });
  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div style={{ backgroundColor:'black' }}>
        <Navbar/>
      </div>
      <div style={{ display:'flex', flexBasis: 200 }}>
        <div align='left' style={{ marginLeft:200,marginTop:30, display:'flex',flex:4, flexDirection:'row' }}>
          <div>
            <h1>CV MATCHING COMPANY NAME</h1>
            <p style={{ fontSize:25, fontFamily:'Open Sans' }}>
              Business Nature: Information Technology<br/>
              Working Location: Hong Kong | Shanghai | Shenzhen<br/>
              152 job Posts | 20000 saved | 15000 Applied
            </p>
          </div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column' ,flexBasis: 325 }}>
        <div style={{flex:3.1}}>
          <div class="SavedJobsTab" style={{position:'relative', left:40,
                                        width:'10%',padding:20, top:30}}>Edited JD
          </div>
        </div>
        <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
          <div class="SavedJobsContent" style={{ flex:0.95,position:'relative',left:40,top:-20,height:'140%' }}>
          </div>
        </div>
      </div>
      <div class="BottomContainer" style={{ display:'flex', flexBasis: 325 }}>
        <div style={{ display:'flex', flexDirection:'row'}}>
          <div class='g_button' style={{ height:'80%', position:'relative', left:150, top:100,
                        width:'12%', margin: 10, padding:2}}>Upload File</div>
          <div class='g_button' style={{ height:'80%', position:'relative', left:300, top:100,
                        width:'12%', margin: 10, padding:2}}>Applications</div>
          <div class='y_button' style={{ height:'80%', position:'relative', left:450, top:100,
                        width:'12%', margin: 10, padding:2}}>Save</div>
          <div class='y_button' style={{ height:'80%', position:'relative', left:600, top:100,
                        width:'12%', margin: 10, padding:2}}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Company;
