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
  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div tyle={{flex:1,top:0 ,width:'100%'}}>
        <Navbar/>
      </div>
      <div style={{flex:1,display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
        <div style={{position:'relative',left:-500, top: 50}}>
        {
          (activeCandidateBtn) ?
          <img src={CircleGreenSVG} style={{ height: 1000, width: 800 }} alt="CircleSVG" />
          :
          <img src={CircleYellowSVG} style={{ height: 1000, width: 800 }} alt="CircleSVG" />
        }
        </div>
        <div style={{position:'relative',left:-50, top: 80,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
        <Login handleChange={handleBtnChange}/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
