import './styles/Navbar.css';
import './styles/input.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import userimage from './user_icon.png';

function Input(){
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
        <div style={{flex:2}}>
          <h1 align='center' style={{ fontSize:48, position:'relative', left:0, top:40 }} >Job-CV Matching</h1>
          <p align='center' style={{ fontSize:24, position:'relative', left:0, top:24 }}>
            Put Your CV And Job Post Below To Get The Score
          </p>
        </div>
      </div>
      <div style={{ backgroundColor:'#AAD0C1', borderRadius: '10px', position:'absolute', left:200, top:320, width:600, height:400 }}>
        <div class='select_title'>
          <span style={{fontSize:30}}>
            My Resume
          </span>
        </div>
        <div class="selection">
          <span style={{fontSize:22}}>
            Text
          </span>
        </div>
        <div class='selection'>
          <span style={{fontSize:22}}>
            Upload File
          </span>
        </div>
        <div class='selection'>
          <span style={{fontSize:22}}>
            Select File
          </span>
        </div>
        <div>
          <input style={{paddingLeft:10,opacity:1,color:'#000000',
                  fontSize:'24px',width:'400px', height:'180px',
                  marginTop:'10px', marginLeft:'20px', borderRadius: '10px'
                }} placeholder="Resume Content" type="text"/>
        </div>
      </div>
      <div style={{ backgroundColor:'#AAD0C1', borderRadius: '10px', position:'absolute', left:920, top:320, width:600, height:400 }}>
        <div class='select_title'>
          <span style={{fontSize:30}}>
            Job Description
          </span>
        </div>
        <div class='selection'>
          <span style={{fontSize:22}}>
            Text
          </span>
        </div>
        <div class='selection'>
          <span style={{fontSize:22}}>
            Upload File
          </span>
        </div>
        <div class='selection'>
          <span style={{fontSize:22}}>
            Select File
          </span>
        </div>
        <div>
          <input style={{paddingLeft:10,opacity:1,color:'#000000',
                  fontSize:'24px',width:'400px', height:'180px',
                  marginTop:'10px', marginLeft:'20px', borderRadius: '10px'
                }} placeholder="Job Description Content" type="text"/>
        </div>
      </div>
      <div>
        <div class='g_button' style={{ height:'6%', position:'absolute', left:540, top:742,
                      width:'14%', margin: 10, padding:2}}>Search From List</div>
        <div class='y_button' style={{ height:'6%', position:'absolute', left:920, top:742,
                      width:'10%', margin: 10, padding:2}}>Get Result</div>
      </div>
    </div>
  );
}

export default Input;
