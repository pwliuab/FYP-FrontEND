import Navbar from './Navbar';
import Login from './Login';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import { Authentication } from './Authentication';
import { useHistory } from "react-router-dom";
import { RedirectTo } from './Redirection';
import { USER_TYPE_COOKIE } from './ConstantVariable';

export  function LoginPage(){
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  let history = useHistory();
    let userType = 'job_seeker';
  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
    // const user = rememberMe ? localStorage.getItem('user') : '';
    userType = (activeCandidateBtn) ? 'job_seeker' : 'recruiter';
  });
  useEffect(()=>{
    let userType = (localStorage.getItem(USER_TYPE_COOKIE))? localStorage.getItem(USER_TYPE_COOKIE) : 'job_seeker';
    if (!Authentication()) history.push(RedirectTo('centerPage',userType));
  }, [])
  // set left or top to adjust position of different UI,
  // page divided into two part : top navigation and the main content
  // for the main content, it is divided into two part as well, left and right
  // circle and login form
  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div style={{flex:1,top:0 ,width:'100%'}}>
        <Navbar type={userType}/>
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
