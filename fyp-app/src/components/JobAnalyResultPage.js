import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import './styles/JobAnalyResultPage.css';
import LeftIconSVG from '../assets/Left.svg';
import RightIconSVG from '../assets/Right.svg';
import { USER_TYPE_COOKIE } from './ConstantVariable';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
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


const DemoColumn = () => {
  const data = [
    {
      type: '1',
      sales: 38,
    },
    {
      type: '2',
      sales: 52,
    },
    {
      type: '3',
      sales: 61,
    },
    {
      type: '4',
      sales: 100,
    },
    {
      type: '5',
      sales: 48,
    },
    {
      type: '6',
      sales: 38,
    },
    {
      type: '7',
      sales: 38,
    },
    {
      type: '8',
      sales: 38,
    },
    {
      type: '9',
      sales: 38,
    },
    {
      type: '10',
      sales: 38,
    },
    {
      type: '11',
      sales: 38,
    },
    {
      type: '12',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} />;
}



function renderList() {
  // use array slice to divide pages
  // or backend dividing pages
  // it depends on how we handle stuff
  let listContent  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  let indents = listContent.map((num) => {
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



function renderTable(pages, rows=10) {
  let lowerBound = pages * rows - rows;
  let upperBound = pages * rows - 1;
  let title = {ranking: 'Ranking', name: 'Name', contact: 'Email', overallScore: 'Overall Score',download:''};

  let contentPage =
   [
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
        {ranking: '11', name: 'LV Zhi Jin', contact: '4399.com', overallScore: '2',download:''},
        {ranking: '12', name: 'LV Zhi Jin', contact: '4399.com', overallScore: '2',download:''},
        {ranking: '13', name: 'Liam', contact: '4399.com', overallScore: '95',download:''},
        {ranking: '14', name: 'Lv Zhi Yuan', contact: '4399.com', overallScore: '10',download:''},
        {ranking: '15', name: 'Zhang wei wen', contact: '4399.com', overallScore: '9',download:''},
        {ranking: '4', name: 'Zhang ge', contact: '4399.com', overallScore: '8',download:''},
        {ranking: '5', name: 'DI ge', contact: '4399.com', overallScore: '7',download:''},
        {ranking: '6', name: 'DI NUO', contact: '4399.com', overallScore: '6',download:''},
        {ranking: '7', name: 'Raymond', contact: '4399.com', overallScore: '5',download:''},
        {ranking: '8', name: 'Singer Raymond', contact: '4399.com', overallScore: '4',download:''},
        {ranking: '9', name: 'Singer Zhang', contact: '4399.com', overallScore: '3',download:''},
        {ranking: '10', name: 'LV Zhi Jin', contact: '4399.com', overallScore: '2',download:''},
        {ranking: '11', name: 'LV Zhi Jin', contact: '4399.com', overallScore: '2',download:''},
        {ranking: '12', name: 'LV Zhi Jin', contact: '4399.com', overallScore: '2',download:''},
      ];

  contentPage = contentPage.filter((item, index) => {
    return index >= lowerBound && index <= upperBound;
  });

  console.log(contentPage)
  console.log(lowerBound + ": Lower Bound");
  console.log(upperBound + ": upperBound");
  console.log();
  let indents = [];
  var tempChildIndents = [];
  for (let it in title) {

    const contentStyles = {
      flex: 1,
      padding: 10,
      paddingLeft: 12,
    }
    let contentStyle = {...contentStyles};
    contentStyle.fontWeight = 'bold';
    contentStyle.flex = (it == 'download') ? 0.2 : 1;
    tempChildIndents.push(
      <div style={contentStyle}>
        {title[it]}
      </div>
    )
  }
  const styles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  styles.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1';

  indents.push(
    <div style={styles}>
          {tempChildIndents}
        </div>
    );
  let tempIndents = contentPage.map((item, index) => {


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

    if (index < contentPage.length) {

      for (let it in item) {
        let contentStyle = {...contentStyles};
        contentStyle.fontWeight = (index == 0) ? 'bold' : '';
        contentStyle.flex = (it == 'download') ? 0.2 : 1;
        childIndents.push(
          <div style={contentStyle}>
            {item[it]}
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
  indents.push(tempIndents);
  return indents;
}

export  function JobAnalyResultPage() {
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [pages, setPages] = useState(1);
  let type = localStorage.getItem(USER_TYPE_COOKIE);

  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });
  return(
    <div style={{ display:'flex', flexDirection:'column' }}>
      <div class="TopContainer">
        <Navbar type={'recruiter'}/>
      </div>
      <div class="SecondContainer" style={{display: 'flex',flexBasis: 870, flexDirection:'column'}}>
        <div style={{flex:1, flexDirection:'row', display:'flex'}}>
          <div style={{flex:1.6, display:'flex', flexDirection:'column'}}>
            <div style={{flex:1, display:'flex', flexDirection:'row'}}>
              <div style={{flex:2}}>
                <span class="JobTitle">JOB TITLE (DATA ANALYST)</span>
              </div>
              <div style={{flex:1, display:'flex', flexDirection:'row'}}>
                <div style={{flex:1, display:'flex'}}>
                  <div class="CustomizeBtn" style={{flex:1, height:'70%',margin:20, position:'relative', top:20}}>
                    Customize
                  </div>
                </div>
                <div style={{flex:1, display:'flex'}}>
                  <div class="SaveBtn" style={{flex:1, height:'70%',margin:20, position:'relative', top:20}}>
                    Save
                  </div>
                </div>
              </div>
            </div>
            <div class="JobDescription" style={{flex:1.7, paddingLeft:20}}>
              <p>125 People have applied for this job</p>
              <p>5 People got the score higher than  90</p>
              <p>Mean: 76 | SD: 7 | Highest: 95 | Lowest: 20</p>
            </div>
          </div>
          <div style={{display:'flex', flex:1, justifyContent:'flex-end'}}>
            <div class="candidateEva" style={{display:'flex',flex:0.8, margin:20, backgroundColor:'white', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
              <DemoColumn/>
            </div>
          </div>

        </div>
        <div class="candidateEva" style={{flex:4, display:'flex', flexDirection:'column', margin:12}}>
          <div class="tableTitle" style={{height: 20, width: 500}}>
            <span style={{position:'relative', margin: 20, top: 20, left: 10}}>Candidate Evaluation</span>
          </div>
          <div style={{display:'flex', margin:20, flex:1, backgroundColor:'white', flexDirection:'column',
                borderRadius:8, marginTop: 40, marginBottom: 40}}>
            {renderTable(pages, 10)}
          </div>
          <div style={{height: 30, display:'flex', flexDirection:'row'}}>
            <div style={{flex:8}}>
              <span style={{position:'relative', top: -30, left: 20, color: 'grey'}}>
                Rows per page:
                <img src={LeftIconSVG} style={{position:'relative', top:13, height:30, width:30, transform:'rotate(270deg)scale(0.85)'}} alt="LeftIconSVG" />
              </span>
            </div>
            <div style={{flex:1}}>
              <span style={{position:'relative', top: -30, color: 'grey'}}>
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

export default JobAnalyResultPage;
