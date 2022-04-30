import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import './styles/CommunityPage.css';
import LeftIconSVG from '../assets/Left.svg';
import RightIconSVG from '../assets/Right.svg';
import { USER_ID_COOKIE, USER_EMAIL_COOKIE, USER_TYPE_COOKIE} from './ConstantVariable';
import { fetchData, RESULT, JOB_POST,SAVING, APPLICATION } from './DataProvider';
import { RedirectTo } from './Redirection';
import { useHistory } from "react-router-dom";
import { create, all } from 'mathjs';
import { Button, Radio} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Authentication } from './Authentication';
import parse from "html-react-parser";
const math = create(all,  {})

// function renderList() {
//   console.log('indents');
//   // use array slice to divide pages
//   // or backend dividing pages
//   // it depends on how we handle stuff
//   let listContent  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
//   let indents = listContent.map((num)=>{
//     let evenStyle = 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1';
//     let bgStyle = (num % 2 == 0) ? evenStyle : 'white';
//     let style = {
//       flex:1,
//       paddingLeft: 10,
//       paddingTop: 10,
//       background: bgStyle,
//       boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
//     }
//     return(
//       <div class="ListItem" style={style}>
//         Job Post {num}
//       </div>
//     );
//   });
// // static
//   let styless = {
//     display:'flex', flexDirection:'row',
//     flex:1.5,
//     paddingLeft: 10,
//     paddingTop: 10,
//     background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1',
//     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//   }
//
//   indents.push(
//     <div style={styless}>
//       <div style={{flex:1}}>
//
//       </div>
//       <div style={{flex:1}}>
//         <span style={{position:'relative', color:'grey'}}>
//           1-17 of 100 items
//         </span>
//           <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30}} alt="LeftIconSVG" />
//           <img src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30, transform:'scale(-1,1)'}} alt="RightIconSVG" />
//       </div>
//     </div>
//   );
//   return indents;
// }

// function renderList() {
//   console.log('indents');
//   // use array slice to divide pages
//   // or backend dividing pages
//   // it depends on how we handle stuff
//   let listContent  = [...jobPosts];
//   while (listContent.length != 20) {
//     listContent.push({empty:true});
//   }
//   console.log(listContent);
//
//   let indents = listContent.map((num, index)=>{
//     let evenStyle = 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1';
//     let bgStyle = (index % 2 == 0) ? evenStyle : 'white';
//     let style = {
//       flex:1,
//       paddingLeft: 10,
//       paddingTop: 10,
//       background: bgStyle,
//       boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//       maxHeight:50,
//       minHeight:50,
//       minWidth:200,
//     }
//
//     return(
//         num['empty'] ==null ?
//         <div class="ListItem" onClick={()=>{setCurrentPostIndex(index);}} id={index} style={style}>
//           Job Post {index + 1}
//         </div>
//           :
//           <div class="ListItem" style={style}>
//           </div>
//
//
//     );
//   });







export  function CommunityPage() {
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [jobPosts, setJobPosts] = useState([]);
  const [tableRow, setTableRow] = useState([]);
  const [postIndex,setCurrentPostIndex] = useState(0);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(20);
  const [saved, setSaving] = useState(0);
  const [applied, setApplication] = useState(0);
  const [lowest, setLowest] = useState(0);
  const [highest, setHighest] = useState(0);
  const [SD, setSD] = useState(0);
  const [MEAN, setMean] = useState(0);
  const [numsOfP90, setP90] = useState(0);
  const [rows, setRow] = useState([]);
  const [rowParams, setRowParams] = useState([]);
  let history = useHistory();
  function downloadURI(url, name) {
    const a = document.createElement('a')
    console.log(url)
    a.href = url
    a.download = name
    console.log(a.download);
    console.log(a.download);
    console.log(a);
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    // var link = document.createElement("a");
    // link.download = name;
    // link.href = uri;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }


  function renderTable() {
    let contentPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    console.log("*************************************************************************")
    console.log(rowParams)
    console.log(rows)
//     0: "result_score"
// 1: "result_option"
// 2: "file"
// 3: "name"
// 4: "email"
    let arrays = [];

    arrays.push({rank: 'rank',name: 'name', email: 'email', result_score: 'overallScore', download: 'CV'});
    for (let i = 0; i < rows.length; i ++) {
      arrays.push({rank: i + 1,name: rows[i][3], email: rows[i][4], result_score: rows[i][0], download:  <Button type="primary" onClick={() => {
        downloadURI(JSON.parse(rows[i][2]).file, rows[i][3] + ".pdf")

      }} shape="round" style={{position:'relative', bottom: 5}} icon={<DownloadOutlined />} size={12}>
          Download
        </Button>},);
    }

    console.log("*************************************************************************")
    arrays = arrays.map((items, index) => {
      console.log(items);
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
        maxHeight:40,
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
      // if (index < items.length) {
        for(let item in items){
          let contentStyle = {...contentStyles};
          contentStyle.fontWeight = (index == 0) ? 'bold' : '';
          contentStyle.flex = (item == 'download') ? 0.2 : 1;
          if (index == 0) {
            childIndents.push(
              <div style={contentStyle}>
                {items[item]}
              </div>
            )
          } else {
            childIndents.push(
              <div onClick={(e)=>{
                if (e.target.innerHTML.includes('Download')) return;
                let r2 = JSON.parse(rows[index - 1][1]);
                let aspectsStr = [];
                let scores = [];
                for (let key in r2) {
                  aspectsStr.push(key);
                  scores.push(r2[key]);
                }
                aspectsStr = aspectsStr.join(',');
                let scoresStr = JSON.stringify(scores);
                let score1 = JSON.stringify([[rows[index - 1][0]]]);
                console.log(aspectsStr);
                console.log(scoresStr);
                console.log(score1);
                history.push(RedirectTo('singleResultPage', localStorage.getItem(USER_TYPE_COOKIE), "/" + score1 + "/" + scoresStr + "/" + aspectsStr))

              }} style={contentStyle}>
                {items[item]}
              </div>
            )
          }

        }
      // }

      return (
        <div style={styles}>
          {childIndents}
        </div>
      )
    })
    return arrays;
  }






  let calculateMoreThan90 = (candidates) => {
    let score = 90;
    let count = 0;
    for (let i = 0; i < candidates.length; i ++) {
      if (candidates[i][0] > 90) count ++
    }
    setP90(count);
    return count;
  }

  let calculateMeanAndSD = (candidates) => {
    let array = [];
    for (let i = 0; i < candidates.length; i ++) {
      array.push(candidates[i][0]);
    }
    setRow(candidates)
    if (array.length == 0) {
      setMean(0);
      setSD(0);
      return;
    }

    setMean(math.mean(array));
    setSD(math.mean(array));

  }

  let calculateLowest = (candidates) => {
    console.log(candidates);
    let lowest = (candidates.length != 0)? candidates[0] : 0;
    for (let i = 0; i < candidates.length; i ++) {
      if (i == 0) {
        lowest = candidates[i][0];
        continue;
      }
      lowest = lowest > candidates[i][0] ? candidates[i][0] : lowest;

    }
    setLowest(lowest);
    return lowest;
  }

  let calculateHighest = (candidates) => {
    let highest = 0;
    for (let i = 0; i < candidates.length; i ++) {
      if (i == 0) {
        highest = candidates[i][0];
        continue;
      }
      highest = highest < candidates[i][0] ? candidates[i][0] : highest;

    }
    setHighest(highest);
    return highest;
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });

  useEffect(() => {

    if (Authentication()) history.push(RedirectTo(null, null));
    let handleFetch = async () => {
      let user_id = await localStorage.getItem("user_id");
      let by_user_id = 'by_user_id/' + user_id;
      let by_jd_id = 'by_jd_id/';
      // let [r1, r2, r3] = await Promise.all([
      //   fetchData(JOB_POST, 'GET', "", by_user_id),
      // ]);
      let r1 = await fetchData(JOB_POST, 'GET', "", by_user_id);
      let [r2, r3, r4] = await Promise.all([
        fetchData(RESULT, 'GET', "", by_jd_id + r1.data[0][0].id),
        fetchData(SAVING, 'GET', "", by_jd_id + r1.data[0][0].id),
        fetchData(APPLICATION, 'GET', "", by_jd_id + r1.data[0][0].id),
      ]);
      console.log(r2);
      setJobPosts(r1.data);
      setSaving(r3.data[0]);
      setApplication(r4.data[0]);

      calculateLowest(r2.data);
      calculateHighest(r2.data);
      calculateMoreThan90(r2.data);
      calculateMeanAndSD(r2.data)
      // setTableRow()
      setRowParams(r2.index);
      console.log(r1);

    }
    handleFetch();
  }, [])


  function renderList() {
    console.log('indents');
    // use array slice to divide pages
    // or backend dividing pages
    // it depends on how we handle stuff
    let listContent  = [...jobPosts];
    console.log(listContent)
    while (listContent.length != 20) {
      listContent.push({empty:true});
    }
    console.log("==========================")

    console.log("==========================")
    console.log(listContent);
    console.log("==========================")
    console.log("==========================")

    let indents = listContent.map((num, index)=>{
      let evenStyle = 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1';
      let bgStyle = (index % 2 == 0) ? evenStyle : 'white';
      let style = {
        flex:1,
        paddingLeft: 10,
        paddingTop: 10,
        background: bgStyle,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        maxHeight:50,
        minHeight:50,
        minWidth:200,
      }

      return(
          num['empty'] ==null ?
          <div class="ListItem" onClick={async ()=>{setCurrentPostIndex(index);
            console.log("============================");
            console.log(jobPosts[index][0].id);
            console.log("============================")
          let params  = 'by_jd_id/' + jobPosts[index][0].id;
          let [r1, r2, r3] = await Promise.all([
                    fetchData(SAVING, 'GET', "", params),
                    fetchData(APPLICATION, 'GET',"", params),
                    fetchData(RESULT, 'GET', "", params),
                  ]);
                  console.log(r1);
                  console.log("============================");
                  console.log("============================");
                  console.log("============================");
                  console.log("============================");
                  console.log("============================");
                  setSaving(r1.data[0]);
                  setApplication(r2.data[0]);
                  calculateLowest(r3.data);
                  calculateHighest(r3.data);
                  calculateMoreThan90(r3.data);
                  calculateMeanAndSD(r3.data)


                  console.log(r2);
                  console.log("============================");
                  console.log("============================");
                  console.log("============================");
                  console.log("============================");

          }} id={index} style={style}>
            Job Post {index + 1} : {jobPosts[index][0].title}
          </div>
            :
            <div class="ListItem" style={style}>
            </div>


      );
    });




        let styless = {
          display:'flex', flexDirection:'row',
          flex:1.5,
          paddingLeft: 10,
          paddingTop: 10,
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          maxHeight:50,
          minHeight:50,
          minWidth:200,
        }

        indents = indents.filter((item, index) => {
            console.log((index >= lowerBound && index < upperBound));
           return (index >= lowerBound && index < upperBound);
        });

        indents.push(
          <div style={styless}>
            <div style={{flex:1}}>
            </div>
            <div style={{flex:1, maxWidth:300, minWidth:200,}}>
              <span style={{position:'relative', color:'grey'}}>
                1-20 of 100 items
              </span>
                <img src={LeftIconSVG} onClick={()=>{
                  if (lowerBound == 0 || upperBound == 20) return;
                  setLowerBound(lowerBound - 20);
                  setUpperBound(upperBound - 20);
                }} style={{position:'relative', top:10, height:30, width:30}} alt="LeftIconSVG" />
                <img onClick={()=>{
                  if (upperBound >= jobPosts.length) return;
                  setLowerBound(lowerBound + 20);
                  setUpperBound(upperBound + 20);
                }} src={LeftIconSVG} style={{position:'relative', top:10, height:30, width:30, transform:'scale(-1,1)'}} alt="RightIconSVG" />
            </div>
          </div>
        );

        console.log(indents);


    return indents
  }




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
      <Navbar type={localStorage.getItem(USER_TYPE_COOKIE)}/>
      </div>
      <div class="SecondContainer" style={{display: 'flex',flexBasis: 850, flexDirection:'row'}}>
        <div class="list" style={{flex: 1, display:'flex'}}>
          <div class="list" style={{margin:20, flex:1, display:'flex', flexDirection:'column'}}>
          <div class="list" style={{flex: 1, maxHeight:60}}>
            <span style={{position:'relative', margin:10, color:'grey', fontSize:14}}>Job List</span>
          </div>
            <div style={{flexDirection:'column', minHeight:500,}}>
            {renderList()}
            </div>
          </div>
        </div>
        <div style={{flex:3, display:'flex', flexDirection:'column'}}>
        <div class="list" style={{display:'flex', flex:1, flexDirection: 'column'}}>
          <div class="jbTitle" style={{flex:1}}>
            JoB Tile {jobPosts.length > 0 ? jobPosts[postIndex][0].title : null}
          </div>
          <div class="jbDesript" style={{display:'flex', flexDirection:'column', flex:2,}}>
            <div style={{flex:1}}>
              <span style={{position:'relative', top:10}}>{applied} people applied, {saved} people saved</span><br/>

            </div>
            <div style={{display:'flex', flexDirection:'row',flex:1.8}}>
              <div style={{display:'flex', flexDirection:'column', flex:2.2}}>
                <div style={{flex:3, fontSize:24}}>{numsOfP90} people got the score higher than 90</div>
                <div style={{flex:3, fontSize:22, margin:5,}}>Mean: {MEAN} | SD: {SD.toFixed(2)} | Highest: {highest} | Lowest: {lowest}</div>
              </div>
              <div style={{display:'flex',flex:2}}>
                <div class="saveBtn" style={{cursor: 'pointer'}} onClick={() => {
                  window.print();
                }} style={{margin:20, position:'relative', top:10}}>
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
                borderRadius:8, marginTop: 40, marginBottom: 40, minHeight:500, maxHeight:600, overflowY:'scroll'}}>
            {renderTable()}
          </div>
          <div style={{height: 10}}>

            <span style={{position:'relative', top: -30, left: 20, color: 'grey'}}>
              <img src={LeftIconSVG} style={{position:'relative', top:13, height:30, width:30, transform:'rotate(270deg)scale(0.85)'}} alt="LeftIconSVG" />
            </span>
            <span style={{position:'relative', top: -30, left: 1200, color: 'grey'}}>

            </span>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage;
