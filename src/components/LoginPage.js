import Navbar from './Navbar';
import Login from './Login';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';


export  function LoginPage(){
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
    // const user = rememberMe ? localStorage.getItem('user') : '';
  });
  // set left or top to adjust position of different UI,
  // page divided into two part : top navigation and the main content
  // for the main content, it is divided into two part as well, left and right
  // circle and login form
  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div style={{flex:1,top:0 ,width:'100%'}}>
        <Navbar/>
      </div>
      <div style={{flex:1,display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
        <div style={{position:'relative',left:-140, top: 85}}>
        {
          (activeCandidateBtn) ?
          <img src={CircleGreenSVG} style={{ height: 700, width: 800 }} alt="CircleSVG" />
          :
          <img src={CircleYellowSVG} style={{ height: 700, width: 800 }} alt="CircleSVG" />
        }
        </div>
        <div style={{height: '50%', paddingLeft:30, width:'50%', position:'relative',left:-70, top: 50,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
          <Login handleChange={handleBtnChange}/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
