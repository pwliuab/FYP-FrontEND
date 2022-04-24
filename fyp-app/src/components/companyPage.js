import './styles/Navbar.css';
import './styles/company.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import userimage from './user_icon.png';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { USER_ID_COOKIE, USER_EMAIL_COOKIE, USER_TYPE_COOKIE} from './ConstantVariable';
import {fetchData,  MATCHING, CV, INFORMATION_API, APPLICATION, INFORMATION, SAVING, JOB_POST} from './DataProvider'
import Cookies from 'js-cookie';
import { RedirectTo } from './Redirection';
import { useHistory } from "react-router-dom";
const DemoLine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },

  };

  return <Line {...config}  style={{height:300, width:600}}/>;
};


function Company() {

  const [userType, setUserType] = useState("");
  const [jobDescription, setJD] = useState([]);
  const [information, setInfo] = useState({});
  const [savings, setSaving] = useState(0);
  const [applications, setApplications] = useState(0);
  let history = useHistory();

  let RenderApplicationsList = () => {
    let titles =   [{title:'title' ,qualification:'level of qualification', nature:'Job Nature', type:'Employment Type'}];
    let indents = jobDescription.map((item, index) => {
      let temp  = [];
      item = item[0];
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['title']}</div>);
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['qualification']}</div>)
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['nature']}</div>)
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['type']}</div>)
      return (
        <div style={{display:'flex', flexDirection:'row', borderBottom:'solid', borderColor: 'white'}}>
          {temp}
        </div>
      );
    });
    let titleIndents = titles.map((item, type)=>{
      let temp = [];
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['title']}</div>);
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['qualification']}</div>)
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['nature']}</div>)
      temp.push( <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['type']}</div>)
      return (
        <div style={{display:'flex', flexDirection:'row', borderBottom:'solid', borderColor: 'white', fontSize:25, fontWeight:'bold'}}>
          {temp}
        </div>
      );
    })

    indents.unshift(titleIndents);
    return indents;
  }


  useEffect(() => {
    console.log("=============================")

    console.log("=============================")

    setUserType(localStorage.getItem(USER_TYPE_COOKIE));
    console.log("=============================")
    console.log("=============================")
    console.log(localStorage.getItem(USER_TYPE_COOKIE));
    console.log("=============================")
    console.log("=============================")
    console.log("=============================")

  }, []);

  const [activeCandidateBtn, handleBtnChange] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
  });
  useEffect(()=>{
    let handleFetch = async () => {
      let user_id = await localStorage.getItem("user_id");
      let params = 'by_user_id/' + user_id;
      let hrParams = 'by_hr_id/' + user_id;
      let r1 = "";
      let r2 = "";
      let r3 = "";
      let r4 = "";
      try {
         r1 = await fetchData(JOB_POST, 'GET', "", params);
         r3 = await fetchData(APPLICATION, "GET", "", hrParams);
         r4 = await fetchData(SAVING, "GET", "", hrParams);
         r2 = await fetchData(INFORMATION, "GET", "", params);
      } catch(e) {
        console.log(e);
      }
      // setParamsSaving(r3.index);
      // setSaving(r3.data);
      // setInformation(r1.data);
      //
      // setApplications(r2.data);
      // setParamsApplication(r2.index);
      if (r2 == "" || r2.result_code == 500) {
        r2 = {};
      } else {
        setInfo(r2.data);
      }

      console.log(r1);
      console.log(r2);
      console.log(r3);
      setJD(r1.data);
      setApplications(r3.data[0]);
      setSaving(r4.data[0]);
    }

    handleFetch();

  },[])
  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div style={{ backgroundColor:'black' }}>
        <Navbar type={localStorage.getItem(USER_TYPE_COOKIE)}/>
      </div>
      <div style={{ display:'flex', flexBasis: 200 }}>
        <div align='left' style={{ marginLeft:200,marginTop:30, display:'flex',flex:4, flexDirection:'row' }}>
          <div>
            <h1>CV MATCHING COMPANY NAME</h1>
            <p style={{ fontSize:25, fontFamily:'Open Sans' }}>
              Business Nature: {information.Nature}<br/>
              Working Location: {information.location}<br/>
              {jobDescription.length} job Posts | {savings} saved | {applications} Applied
            </p>
          </div>
        </div>
        <div style={{display:'flex', flex:1}}>
          <div style={{display:'flex',flex:1, margin:20, backgroundColor:'white', borderRadius:20}}>

            <DemoLine/>
          </div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column' ,flexBasis: 325 }}>
        <div style={{flex:3.1}}>
          <div class="SavedJobsTab" style={{position:'relative', left:40,
                                        width:'10%',padding:20, top:-25}}>Edited JD
          </div>
        </div>
        <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
          <div class="SavedJobsContent" style={{ flex:0.95,position:'relative',left:40,top:-20,height:'140%' , overflow:'scroll', maxHeight:400,}}>
          {RenderApplicationsList()}
          </div>
        </div>
      </div>
      <div class="BottomContainer" style={{ display:'flex', flexBasis: 325 }}>
        <div style={{ display:'flex', flexDirection:'row'}}>
          <div class='g_button' style={{ height:'80%', position:'relative', left:150, top:100,minHeight:50,
                        width:'12%', margin: 10, padding:2}}>Upload Job Posts</div>
          <div class='g_button' style={{ height:'80%', position:'relative', left:300, top:100,minHeight:50,
                        width:'12%', margin: 10, padding:2}}>Applications</div>
          <div class='y_button' style={{ height:'80%', position:'relative', left:450, top:100,minHeight:50,
                        width:'12%', margin: 10, padding:2}}>Save</div>
          <div class='y_button' onClick={()=> {
            localStorage.clear();
            history.push(RedirectTo(null, null));}}
             style={{ height:'80%', position:'relative', left:600, top:100,minHeight:50,
                        width:'12%', margin: 10, padding:2}}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Company;
