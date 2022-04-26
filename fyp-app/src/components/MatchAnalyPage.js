import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import './styles/MatchAnalyPage.css';
import LeftIconSVG from '../assets/Left.svg';
import RightIconSVG from '../assets/Right.svg';
import GoodSVG from '../assets/good.svg';
import { Authentication } from './Authentication';
import { useHistory } from "react-router-dom";
import { RedirectTo } from './Redirection';
import { USER_TYPE_COOKIE } from './ConstantVariable';

const renderHistoGram = () => {
  let xCoordinate = 10;
  let transformStr = [1,2,3,4,5,6,7,8,9,10];
  let indents = transformStr.map((item) => {
    let transf = 'translate(' + xCoordinate.toString() + ',200)rotate(270)';
    let yCoordinate = item * 10;
    xCoordinate += 70;
    return(<rect width={yCoordinate} height={45} style={{fill:'rgba(176, 190, 197, 0.32)'}} transform={transf}/>)
  })
  return indents;
}


const getXcoordinate = (x1, y1, portion) => {
  const cx = 125;
  const cy = 136;
  let d = Math.sqrt((x1 - cx) ** 2 + (y1 - cy) ** 2) * portion;
  let radian = Math.atan(Math.abs((y1 - cy) / (x1 - cx)));
  let tx =  Math.cos(radian) * d;
  return (x1 < cx) ? (cx - tx) : (cx + tx);
}


const getYcoordinate = (x1, y1, portion) => {
  const cx = 125;
  const cy = 136;
  let d = Math.sqrt((x1 - cx) ** 2 + (y1 - cy) ** 2) * portion;
  let radian = Math.atan(Math.abs((y1 - cy) / (x1 - cx)));
  let ty =  Math.sin(radian) * d;
  return (y1 < cy) ? (cy - ty) : (cy + ty);
}


const getStudentResult = (resultList) => {
  let coordinates = "";
  // 120 26,220 96,184 220,60 220,26 96
  // 體能
  // 腦力
  // 積極
  // 團隊
  // 技能
  let outerCoordinateList = [
    { x: 120, y: 26 },
    { x: 220, y: 96 },
    { x: 184, y: 220 },
    { x: 60, y: 220 },
    { x: 26, y: 96 },
  ]

  for (let i = 0; i < outerCoordinateList.length; i++) {
    coordinates += getXcoordinate(outerCoordinateList[i].x, outerCoordinateList[i].y, resultList[i] / 5).toString();
    if (i != outerCoordinateList.length - 1) {
      coordinates = coordinates + ' ' + getYcoordinate(outerCoordinateList[i].x, outerCoordinateList[i].y, resultList[i] / 5).toString() + ',';
    } else {
      coordinates = coordinates + ' ' + getYcoordinate(outerCoordinateList[i].x, outerCoordinateList[i].y, resultList[i] / 5).toString();
    }
  }
  console.log(coordinates);
  return (
              < polygon
                points={coordinates}
                fill="purple"
                stroke="#ffffbe"
                fillOpacity="0.8"
                strokeWidth="1"
              />
          );
}


const getPentagon = (portion, color='#ffffbe') => {
  let coordinates = "";
  // 120 26,220 96,184 220,60 220,26 96
  // 體能
  // 腦力
  // 積極
  // 團隊
  // 技能
  let outerCoordinateList = [
    { x: 120, y: 26 },
    { x: 220, y: 96 },
    { x: 184, y: 220 },
    { x: 60, y: 220 },
    { x: 26, y: 96 },
  ]

  for (let i = 0; i < outerCoordinateList.length; i++) {
    coordinates += getXcoordinate(outerCoordinateList[i].x, outerCoordinateList[i].y, portion).toString();
    if (i != outerCoordinateList.length - 1) {
      coordinates = coordinates + ' ' + getYcoordinate(outerCoordinateList[i].x, outerCoordinateList[i].y, portion).toString() + ',';
    } else {
      coordinates = coordinates + ' ' + getYcoordinate(outerCoordinateList[i].x, outerCoordinateList[i].y, portion).toString();
    }
  }
  console.log(coordinates);
  return (    <polygon
                points={coordinates}
                fill="transparent"
                stroke={color}
                strokeWidth="3"
              />
          );
}


function renderList() {
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

function renderTable(aspects, scores) {
  let contentPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let indents = contentPage.map((item, index) => {
    // const contentArray = [
    //   {Aspects: 'Aspects', overallScore: 'Scores',download:''},
    //   { Aspects: 'Education', overallScore: '95',download:''},
    //   { Aspects: 'Experience', overallScore: '10',download:''},
    //   { Aspects: 'Language',  overallScore: '49',download:''},
    //   {Aspects: 'Communication Skills',  overallScore: '58',download:''},
    //   {Aspects: 'Coding ability',  overallScore: '57',download:''},
    // ]
    const contentArray = aspects.map((item, index) => {
        return { Aspects: item, overallScore:scores[index].toString(), download:"" };
    })

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
      for (let item in contentArray[index]) {
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


export  function MatchAnalyPage(props) {
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [resultList, setResultList] = React.useState([
  5*0.1,
  5*0.95,
  5*0.58,
  5*0.57,
  5*0.45
]);
const [results, setResults] = useState([]);
const [aspects, setAspects] = useState([]);
const [overallScore, setOverallScore] = useState(0);
let history = useHistory();
let type = localStorage.getItem(USER_TYPE_COOKIE);
useEffect(() => {

  const CheckLogin = () => {
    if (Authentication()) history.push(RedirectTo(null, null));
  }
  CheckLogin();
  console.log(props.match.params.score1)
  console.log(props.match.params.score2)
  console.log(props.match.params.keys)

  let resultLists =  JSON.parse(decodeURI(props.match.params.score2)).map((item, index) => {
    console.log(item);
    return 5*(item / 100);
  })
  setResultList(resultLists);
  setAspects(props.match.params.keys.split(','));
  setResults(JSON.parse(decodeURI(props.match.params.score2)));
  setOverallScore(JSON.parse(decodeURI(props.match.params.score1))[0][0]);
}, []);

  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });
  return(
    <div style={{ display:'flex', flexDirection:'column' }}>
      <div class="TopContainer">
        <Navbar type={type}/>
      </div>
      <div class="SecondContainer" style={{dispaly:'flex', flexBasis:870, flexDirection:'row'}}>
        <div style={{flex:1, display:'flex', flexDirection:'column'}}>
          <div style={{flex:3, display:'flex', flexDirection:'column', overflow:'hidden'}}>
            <span class="FontFam" style={{fontSize:70, position:'relative', left:40, top:40}}>Your Score is:</span>
            <span class="FontFam" style={{fontSize:90, position:'relative', left:40, top:150}}>{parseInt(overallScore)}</span>
            <span class="FontFam" style={{fontSize:40, position:'relative', left:40, top:250}}>Good Job!</span>
              <img src={GoodSVG} style={{position:'relative', top:90, left:240, height:87, width:83}} alt="GoodSVG" />
          </div>
          <div class="candidateEva" style={{flex:4, display:'flex', flexDirection:'column', margin:12}}>
            <div class="tableTitle" style={{height: 40, width: 500}}>
              <span style={{position:'relative', margin: 20, top: 5, left: 10}}>Matching Anaysis</span>
            </div>
            <div style={{display:'flex', margin:10, flex:1, backgroundColor:'white', flexDirection:'column',
                  borderRadius:8, marginTop:10, marginBottom:10}}>
              {renderTable(aspects, results)}
            </div>
            <div style={{height: 30, display:'flex', flexDirection:'row'}}>
              <div style={{flex:4}}>
                <span style={{position:'relative', top: -5, left: 20, color: 'grey'}}>
            {      // Rows per page:
                  // <img src={LeftIconSVG} style={{position:'relative', top:13, height:30, width:30, transform:'rotate(270deg)scale(0.85)'}} alt="LeftIconSVG" />
                }
                </span>
              </div>
              <div style={{flex:1}}>
{
   // <span style={{position:'relative', top: -5, color: 'grey'}}>
   //               Rows per page:
   //                <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30,}} alt="LeftIconSVG" />
   //                <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30, transform:'scale(-1,1)'}} alt="RightIconSVG" />
   //              </span>
              }

              </div>
            </div>
          </div>
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'column'}}>
          <div style={{flex:5}}>
          <svg height="100%" width="100%">
            <g transform="translate(130,85)scale(2)">
              <g transform="translate(0,0)">
                <rect
                  x="100"
                  y="5"
                  rx="10"
                  width="80"
                  height="20"
                  fill="#ffd85b"
                  transform="translate(0,-20)"
                  />
                  <text
                    fill="black"
                    fontSize="9"
                    x="139"
                    y="0"
                    textAnchor="middle"
                  >
                  {aspects[0]}
                  </text>
                  <text
                    fill="blue"
                    fontSize="12"
                    x="124"
                    y="20"
                    textAnchor="middle"
                  >
                    {(Number.isInteger(resultList[0])) ? (resultList[0] + ".0") : (resultList[0].toFixed(2).toString())}
                  </text>
                </g>
                <g transform="translate(215,65)">
                  <rect
                    rx="10"
                    width="60"
                    height="20"
                    fill="#ffd85b"
                    transform=""
                    />
                    <text
                      fill="black"
                      transform="translate(30,15)"
                      fontSize="9"
                      textAnchor="middle"
                    >
                    {aspects[1]}
                    </text>
                    <text
                      transform="translate(25,35)"
                      fill="blue"
                      fontSize="12"
                      textAnchor="middle"
                    >
                      {(Number.isInteger(resultList[1])) ? (resultList[1] + ".0") : (resultList[1].toFixed(2).toString())}
                    </text>
                  </g>
                  <g transform="translate(185,220)">
                    <rect
                      rx="10"
                      width="80"
                      height="20"
                      fill="#ffd85b"
                      transform=""
                      />
                      <text
                        fill="black"
                        transform="translate(40,15)"
                        fontSize="9"
                        textAnchor="middle"
                      >
                      {aspects[2]}
                      </text>
                      <text
                        transform="translate(25,35)"
                        fill="blue"
                        fontSize="12"
                        textAnchor="middle"
                      >
                        {(Number.isInteger(resultList[2])) ? (resultList[2] + ".0") : (resultList[2].toFixed(2).toString())}
                      </text>
                    </g>
                    <g transform="translate(10,225)">
                      <rect
                        rx="10"
                        width="80"
                        height="20"
                        fill="#ffd85b"
                        transform=""
                        />
                        <text
                          fill="black"
                          transform="translate(38,15)"
                          fontSize="9"
                          textAnchor="middle"
                        >
                        {aspects[3]}
                        </text>
                        <text
                          transform="translate(25,35)"
                          fill="blue"
                          fontSize="12"
                          textAnchor="middle"
                        >
                          {(Number.isInteger(resultList[3])) ? (resultList[3] + ".0") : (resultList[3].toFixed(2).toString())}
                        </text>
                      </g>
                      <g transform="translate(-20,65)">
                        <rect
                          rx="10"
                          width="55"
                          height="20"
                          fill="#ffd85b"
                          transform=""
                          />
                          <text
                            fill="black"
                            transform="translate(27,15)"
                            fontSize="9"
                            textAnchor="middle"
                          >
                          {aspects[4]}
                          </text>
                          <text
                            transform="translate(25,35)"
                            fill="blue"
                            fontSize="12"
                            textAnchor="middle"
                          >
                            {(Number.isInteger(resultList[4])) ? (resultList[4] + ".0") : (resultList[4].toFixed(2).toString())}
                          </text>
                        </g>
              <polygon
                points="120 26,220 96,184 220,60 220,26 96"
                fill="#91d9d4"
                stroke="#ffffbe"
                strokeWidth="3"
              />
                {getPentagon(0.2,'white')}
                {getPentagon(0.6,'white')}
                {getPentagon(0.4)}
                {getPentagon(0.8, 'white')}
                {getStudentResult(resultList)}
              <line x1="220" y1="96" x2="125" y2="136" stroke="#ffffbe"  strokeWidth="2" />
              <line x1="120" y1="26" x2="125" y2="136" stroke="#ffffbe"  strokeWidth="2" />
              <line x1="184" y1="220" x2="125" y2="136" stroke="#ffffbe"  strokeWidth="2" />
              <line x1="60" y1="220" x2="125" y2="136" stroke="#ffffbe"  strokeWidth="2" />
              <line x1="26" y1="96" x2="125" y2="136" stroke="#ffffbe"  strokeWidth="2" />
            </g>
            </svg>
          </div>
          <div style={{flex:1,display:'flex'}}>
            <div class="Btn" style={{margin:20, position:'relative', top:10, left:300}}
            onClick={()=>{
              history.push(RedirectTo('inputPage', localStorage.getItem(USER_TYPE_COOKIE), ''));
            }}
            >
              Continue
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default MatchAnalyPage;
