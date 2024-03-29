import Navbar from './Navbar';
import './styles/UserCenterPage.css';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
export  function RecruiterCenterPage(){
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });
  ////////////////////////////////////////////////////////////
  // flex is used to divide the page into 4 part
  // every part of the container has its own inner division,
  // e.g. the CV matching text description and the buttons are two parts that divides secondContainer
  // top container is  for the top navigation bar part
  // SecondContainer is for  the get your CV score button's row
  // Third container is for the SavedJobsTab and SavedJobsContent
  // BottomContainer is for the ApplicationStatusTab and ApplicationStatusContent
  ///////////////////////////////////////////////////////////
  return(
    <div style={{ display: 'flex', flexDirection:'column' }}>
      
    </div>
  )
}

export default RecruiterCenterPage;
