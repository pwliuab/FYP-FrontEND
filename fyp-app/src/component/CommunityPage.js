import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import './styles/CommunityPage.css';
import LeftIconSVG from '../assets/Left.svg';
import RightIconSVG from '../assets/Right.svg';
function renderList() {
  console.log('indents');
  // use array slice to divide pages
  // or backend dividing pages
  // it depends on how we handle stuff
  let listContent  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  let indents = listContent.map((num)=>{
    let evenStyle = 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1';
    let bgStyle = (num % 2 == 0) ? evenStyle : 'white';
    let style = {
      flex:1,
      paddingLeft: 10,
      paddingTop: 10,
      background: bgStyle,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
    return(
      <div class="ListItem" style={style}>
        Job Post {num}
      </div>
    );
  });
// static
  let styless = {
display:'flex', flexDirection:'row',
    flex:1.5,
    paddingLeft: 10,
    paddingTop: 10,
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  indents.push(
    <div style={styless}>
      <div style={{flex:1}}>

      </div>
      <div style={{flex:1}}>
        <span style={{position:'relative', color:'grey'}}>
          1-17 of 100 items
        </span>
          <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30}} alt="LeftIconSVG" />
          <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30, transform:'scale(-1,1)'}} alt="RightIconSVG" />
      </div>
    </div>
  );
  return indents;
}

function renderTable() {
  let contentPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let indents = contentPage.map((item, index) => {
    const contentArray = [
      {ranking: 'Ranking', name: 'Name', contact: 'Email', overallScore: 'Overall Score',download:''},
      {ranking: '1', name: 'Liam', contact: '4399.com', overallScore: '95',download:''},
      {ranking: '2', name: 'Lv Zhi Yuan', contact: '4399.com', overallScore: '10',download:''},
      {ranking: '3', name: 'Zhang wei wen', contact: '4399.com', overallScore: '9',download:''},
      {ranking: '4', name: 'Zhang ge', contact: '4399.com', overallScore: '8',download:''},
      {ranking: '5', name: 'DI ge', contact: '4399.com', overallScore: '7',download:''},
      {ranking: '6', name: 'DI NUO', contact: '4399.com', overallScore: '6',download:''},
      {ranking: '7', name: 'Raymond', contact: '4399.com', overallScore: '5',download:''},
      {ranking: '8', name: 'Singer Raymond', contact: '4399.com', overallScore: '4',download:''},
      {ranking: '9', name: 'Singer Zhang', contact: '4399.com', overallScore: '3',download:''},
      {ranking: '10', name: 'LV Zhi Jin', contact: '4399.com', overallScore: '2',download:''},
    ]

    const contentStyles = {
      flex: 1,
      padding: 10,
      paddingLeft: 12,
    }

    const styles = {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    } // pass by reference, so need to create a new one every time;
    styles.background = ((index % 2) == 0) ?
    'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1'
      :
    'white';
    styles.borderTopLeftRadius = (index == 0) ? 8 : 0;
    styles.borderTopRightRadius = (index == 0) ? 8 : 0;
    styles.borderBottomRightRadius = (index == (contentPage.length - 1)) ? 8 : 0;
    styles.borderBottomLeftRadius = (index == (contentPage.length - 1)) ? 8 : 0;

    let childIndents = [];
    if (index < contentArray.length) {
      for(let item in contentArray[index]){
        let contentStyle = {...contentStyles};
        contentStyle.fontWeight = (index == 0) ? 'bold' : '';
        contentStyle.flex = (item == 'download') ? 0.2 : 1;
        childIndents.push(
          <div style={contentStyle}>
            {contentArray[index][item]}
          </div>
        )
      }
    }

    return (
      <div style={styles}>
        {childIndents}
      </div>
    )
  })

  return indents;
}

export  function CommunityPage() {
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
    <div style={{ display:'flex', flexDirection:'column' }}>
      <div class="TopContainer">
        <Navbar/>
      </div>
      <div class="SecondContainer" style={{display: 'flex',flexBasis: 850, flexDirection:'row'}}>
        <div class="list" style={{flex: 1, display:'flex'}}>
          <div class="list" style={{margin:20, flex:1, display:'flex', flexDirection:'column'}}>
            <div class="list" style={{flex: 1.5}}>
              <span style={{position:'relative', top:25, margin:10, color:'grey', fontSize:14}}>Job List</span>
            </div>
            {renderList()}

          </div>
        </div>
        <div style={{flex:3, display:'flex', flexDirection:'column'}}>
        <div class="list" style={{display:'flex', flex:1, flexDirection: 'column'}}>
          <div class="jbTitle" style={{flex:1}}>
            JoB Tile (DATA ANALYST)
          </div>
          <div class="jbDesript" style={{display:'flex', flexDirection:'column', flex:2,}}>
            <div style={{flex:1}}>
              <span style={{position:'relative', top:10}}>125 people applied, 500 people saved, 1000 people read</span><br/>

            </div>
            <div style={{display:'flex', flexDirection:'row',flex:1.8}}>
              <div style={{display:'flex', flexDirection:'column', flex:1.7}}>
                <div style={{flex:1}}>5 people got the score higher than 90</div>
                <div style={{flex:1}}>Mean: 76 | SD: 7 | Highest: 95 | Lowest: 20</div>
              </div>
              <div style={{display:'flex',flex:2}}>
                <div class="saveBtn" style={{margin:20, position:'relative', top:10}}>
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="candidateEva" style={{display:'flex', flexDirection:'column', flex:2, margin:12, position:'relative', top:-3}}>
          <div class="tableTitle" style={{height: 20, width: 500}}>
            <span style={{position:'relative', margin: 20, top: 20}}>Candidate Evaluation</span>
          </div>
          <div style={{display:'flex', margin:20, flex:1, backgroundColor:'white', flexDirection:'column',
                borderRadius:8, marginTop: 40, marginBottom: 40}}>
            {renderTable()}
          </div>
          <div style={{height: 10}}>

            <span style={{position:'relative', top: -30, left: 20, color: 'grey'}}>
              Rows per page:
              <img src={LeftIconSVG} style={{position:'relative', top:13, height:30, width:30, transform:'rotate(270deg)scale(0.85)'}} alt="LeftIconSVG" />
            </span>
            <span style={{position:'relative', top: -30, left: 1100, color: 'grey'}}>
              Rows per page:
              <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30,}} alt="LeftIconSVG" />
              <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30, transform:'scale(-1,1)'}} alt="RightIconSVG" />
            </span>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage;
