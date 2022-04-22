import Navbar from './Navbar';
import './styles/CommunityPage.css';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import LeftIconSVG from '../assets/Left.svg';
import SearchIconSVG from '../assets/Search.svg';
import CirclesIconSVG from '../assets/CombineCircle.svg'
import { Authentication } from './Authentication';
import { useHistory } from "react-router-dom";
import { RedirectTo } from './Redirection';
import { JBSeekerType, USER_ID_COOKIE, USER_EMAIL_COOKIE } from './ConstantVariable';
import { fetchData, appendData, JOB_POST } from './DataProvider';
import parse from "html-react-parser";




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


export  function SeekerCommunityPage() {
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [jobPosts, setJobPost] = useState([]);
  const [postIndex, setCurrentPostIndex] = useState(0);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(20);
  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });

  function renderList() {
    console.log('indents');
    // use array slice to divide pages
    // or backend dividing pages
    // it depends on how we handle stuff
    let listContent  = [...jobPosts];
    while (listContent.length != 20) {
      listContent.push({empty:true});
    }
    console.log(listContent);

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
          <div class="ListItem" onClick={()=>{setCurrentPostIndex(index);}} id={index} style={style}>
            Job Post {index + 1}
          </div>
            :
            <div class="ListItem" style={style}>
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
            }} src={LeftIconSVG} onClick={()=>{}} style={{position:'relative', top:10, height:30, width:30, transform:'scale(-1,1)'}} alt="RightIconSVG" />
        </div>
      </div>
    );


    console.log(indents);
    return indents;
  }


  let handleAllPostsFetch = async () => {
    let params = 'all'
    let response = await fetchData(JOB_POST, 'GET', params);
    let [r1, r2] = await Promise.all([
      fetchData(JOB_POST, 'GET', params),
      fetchData(JOB_POST, 'GET', params)
    ]);
    console.log(r1);
    setJobPost(r1.data);
  }

  let renderJobDescription = () =>{

    return(
      <div style={{fontSize:18}}>
        {parse(jobPosts[postIndex].job_description)}
      </div>
    )
  }

let renderBasicInfo = () => {
  // return item == "salary" || item == "nature" || item == "type" || item == "qualification" || item == "location";
  let indents = [];
  let rindents = [];
  let index = 0;
  for (let item in jobPosts[postIndex]) {
      if (item == "salary" || item == "nature" || item == "type" || item == "qualification" || item == "location") {
        if ( index < 3) {
          indents.push(
            <p style={{fontSize: 18, margin:20}}>
              {item + " : " + jobPosts[postIndex][item]}
            </p>
          )
        } else {
          rindents.push(
            <p style={{fontSize: 18, margin:20}}>
              {item + " : " + jobPosts[postIndex][item]}
            </p>
          )
        }
        index++;
    }
}
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <div style={{display:'felx'}}>
        {
          indents
        }
      </div>
      <div style={{display:'felx'}}>
        {
          rindents
        }
      </div>
    </div>
  )
}

let renderJobRequirement = () => {
  return (
    <div style={{fontSize: 16}}>
      {parse(jobPosts[postIndex].job_requirement)}
    </div>
  )
}

  useEffect(() => {
    handleAllPostsFetch();
  }, [])

  let history = useHistory();
  useEffect(() => {

    const CheckLogin = () => {
      if (Authentication()) history.push(RedirectTo(null, null));
    }
    CheckLogin();

  }, []);

  return(
    <div style={{ display: 'flex', flexDirection:'column' }}>
      <div class="TopContainer" style={{ backgroundColor:'black'}}>
        <Navbar type={JBSeekerType}/>
      </div>
      <div style={{display:'flex', flexDirection:'row', flex:1, flexBasis:880}}>
        <div style={{display:'flex', flexDirection:'column', flex:1}}>
          <div class="list" style={{margin:20, flex:1, display:'flex', flexDirection:'column'}}>
            <div class="list" style={{flex: 1, maxHeight:60}}>
              <span style={{position:'relative', top:25, margin:10, color:'grey', fontSize:14}}>Job List</span>
            </div>
            <div style={{flexDirection:'column', minHeight:500}}>
              {renderList()}
            </div>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:'column', flex:2}}>
          <div style={{display:'flex', flexDirection:'column',flexBasis: 1000, flex:10, margin:20, background:'rgba(33, 130, 94, 0.31)', borderRadius:20}}>
            <div class="title" style={{ display:'flex', justifyContent:'center', alignItems:'center', flex:1, borderTopLeftRadius:20,borderTopRightRadius:20}}>
              <span style={{fontSize:35, fontWeight:'bold', fontFamily:'Open Sans', minWidth:200,minHeight:55, padding:20}}>
                {
                    jobPosts.length > 0 ?
                      jobPosts[postIndex].title
                        :
                      null
                }
              </span>
            </div>
            <div class="jbDesript" style={{margin:10, marginBottom: 10,display:'flex',justifyContent:'center', alignItems:'center', minWidth:200}}> Basic Info</div>
            <div class="basicInfo" style={{flex:1, minHeight:150, overflowY:'scroll'}}>
              {
                renderBasicInfo()
              }
            </div>
            <div class="jbDesript" style={{margin:10, marginBottom: 20,display:'flex',justifyContent:'center', alignItems:'center', minWidth:200}}> Job description</div>
            <div class="jbDesript" style={{margin:10, flex:5, overflowY:'scroll', flexDirection:"column", minHeight:400}}>
              {
                jobPosts.length > 0 ?
                renderJobDescription()
                    :
                  null
              }
            </div>
            <div class="jbDesript" style={{margin:10, marginBottom: 20,display:'flex',justifyContent:'center', alignItems:'center'}}> Job Requirement</div>
            <div class="requirement" style={{ overflowY:'scroll',flex:4,margin: 10, minHeight:300}}>
              {
                jobPosts.length > 0 ?
                  renderJobRequirement()
                    :
                  null
              }
            </div>
            <div class="applicationMethod" style={{flex:1}}/>
            <div style={{flex:1, borderBottomLeftRadius:20, borderBottomRightRadius:20}}/>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:'column', flex:1}}>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', flex:2}}>
              <img src={CirclesIconSVG} style={{position:'relative', top:10, height:'80%', width:'70%'}} alt="RightIconSVG" />
          </div>
          <div style={{display:'flex', flexDirection:'column', flex:1, alignItems:'center',}}>
            <span style={{fontSize:35, fontWeight:'bold', fontFamily:'Open Sans'}}>
            {
              jobPosts.length > 0?
                jobPosts[postIndex].org_id
                :
              null
            }
            </span>
            <div style={{display:'flex', height:'50%', flexDirection:'row', width:'50%'}}>
              <div style={{display:'flex', margin:20, paddingBottom:2, height:'50%', width:'50%',backgroundColor:'red',
                    borderRadius:20, background:'rgba(33, 130, 94, 0.5)', justifyContent:'center', alignItems:'center'}}>
                    <span style={{fontSize:15, fontWeight:'bold'}}>Apply</span>
              </div>
              <div style={{display:'flex', margin:20, height:'50%', width:'50%', paddingBottom:2,
                    backgroundColor:'red', borderRadius:20, background:'rgba(248, 231, 105, 0.6)', justifyContent:'center', alignItems:'center'}}>
                    <span style={{fontSize:15, fontWeight:'bold'}}>Save</span>
              </div>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', flex:3, justifyContent:'start', alignItems:'start', marginLeft:140}}>
            <span style={{fontSize:18,  fontFamily:'Open Sans', marginBottom:10}}>Company information</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:10}}>Website: wwww.4399.com</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:10}}>Bussiness Nature: Retail</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:10}}>Found Year: 2016</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:10}}>Address: Hong Kong Shatin</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:10}}>Number of employee: 20k</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:10}}>Number of offices: 22</span>
            <span style={{fontSize:18, fontFamily:'Open Sans', marginBottom:50}}>Funding round: USD$20m</span>
            <span style={{fontSize:18, fontWeight:'bold', fontFamily:'Open Sans', marginBottom:10}}>24 people have applied for this job</span>
            <span style={{fontSize:18, fontWeight:'bold', fontFamily:'Open Sans', marginBottom:10}}>100 people have saved this job</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeekerCommunityPage;
