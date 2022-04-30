import Navbar from './Navbar';
import './styles/UserCenterPage.css';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import { JBSeekerType, USER_ID_COOKIE, USER_EMAIL_COOKIE } from './ConstantVariable';
import { Authentication } from './Authentication';
import { useHistory } from "react-router-dom";
import { RedirectTo } from './Redirection';
import { fetchData, INFORMATION, APPLICATION, SAVING } from './DataProvider';
export  function SeekerCenterPage() {
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [paramsApplication, setParamsApplication] = useState([]);
  const [applications, setApplications] = useState([]);
  const [paramsSaving, setParamsSaving] = useState([]);
  const [saving, setSaving] = useState([]);
  const [information, setInformation] = useState([]);
  // path('application/by_user_id/<int:user_id>', views.ApplicationView.as_view()),
  // path('application/by_org_id/<int:org_id>', views.ApplicationView.as_view()),
  // path('application/all', views.ApplicationView.as_view()),
  //
  // # HR
  // path('application/by_hr_id/<int:hr_id>', views.ApplicationView.as_view()),
  //
  // path('Information/by_user_id/<int:user_id>', views.InformationView.as_view()),
  // path('Information/by_org_id/<int:org_id>', views.InformationView.as_view()),
  // path('Information/by_info_id/<int:info_id>', views.InformationView.as_view()),
  // path('Information/all', views.InformationView.as_view()),
  //
  //
  // path('saving/by_user_id/<int:user_id>', views.SavingView.as_view()),
  // path('saving/by_hr_id/<int:hr_id>', views.SavingView.as_view()),
  // path('saving/by_org_id/<int:org_id>', views.SavingView.as_view()),
  // path('saving/all', views.SavingView.as_view()),
  // path('saving/by_save_id/<int:save_id>', views.SavingView.as_view()),

  let handleFetch = async () => {
    let user_id = await localStorage.getItem("user_id");
    let params = 'by_user_id/' + user_id;
    try {
      var r1 = await fetchData(INFORMATION, 'GET', "", params);

    } catch (e) {
      console.log(e);
      r1 = {data: []};
    }
    let [r2, r3] = await Promise.all([
      fetchData(APPLICATION, 'GET', "", params),
      fetchData(SAVING, 'GET', "", params)
    ]);
    setParamsSaving(r3.index);
    setSaving(r3.data);
    // setInformation(r1.data);

    setApplications(r2.data);
    setParamsApplication(r2.index);
    console.log(r1);
    console.log(r2);
    console.log(r3);

  }


  let RenderSavingList = () => {
    let dataList = [];
    for (let index in saving) {
      let obj = {};
      if (paramsSaving.length != saving[index].length) return null;
      for (let key in saving[index]) {
        obj[paramsSaving[key]] = saving[index][key];
    }
    dataList.push(obj);
  }
    let indents = dataList.map((item, index) => {
        let temp = [];
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['org_id']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['title']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['type']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{ item['status']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{ item['saved_date']}</div>
          )
      return (
        <div style={{display:'flex', flexDirection:'row', borderBottom:'solid', borderColor: 'white'}}>

          {temp}
        </div>
      );
    });
    let titles = [{x:'Company Name', y:'Job title', z:'Job Nature', a:'Application status', d: 'Saved Date'}];

    let titlesRow = titles.map((item, index) => {
        let temp = [];
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.x}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.y}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.z}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.a}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.d}</div>
          )
      return (
        <div style={{display:'flex', flexDirection:'row', borderBottom:'solid', borderColor: 'white'}}>
          {temp}
        </div>
      );
    });

    indents = [...titlesRow, ...indents];

    return indents;

  }

  let RenderApplicationsList = () => {
    console.log(paramsApplication);
    let dataList = [];
    for (let index in applications) {
      console.log(paramsApplication.length != applications[index].length)
      let obj = {};
      if (paramsApplication.length != applications[index].length) return null;
      for (let key in applications[index]) {
        obj[paramsApplication[key]] = applications[index][key];
    }
    dataList.push(obj);
  }

    let indents = dataList.map((item, index) => {
        let temp = [];
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center', flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['org_id']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['title']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{item['status']}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:10, fontSize:20}}>{ item['applied_date']}</div>
          )
      return (
        <div style={{display:'flex', flexDirection:'row', borderBottom:'solid', borderColor: 'white'}}>

          {temp}
        </div>
      );
    });
    let titles = [{x:'Company Name', y:'Job title', z:'Application Status', a:'Applied date',}];

    let titlesRow = titles.map((item, index) => {
        let temp = [];
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.x}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.y}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.z}</div>
          )
          temp.push(
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',flex:1, width:50, height:50, margin:15, fontSize:24}}>{item.a}</div>
          )
      return (
        <div style={{display:'flex', flexDirection:'row', borderBottom:'solid', borderColor: 'white'}}>
          {temp}
        </div>
      );
    });

    indents = [...titlesRow, ...indents];

    return indents;
  }
  let history = useHistory();
  useEffect(() => {

    const CheckLogin = () => {
      if (Authentication()) history.push(RedirectTo(null, null));
    }

    CheckLogin();
    handleFetch();


  }, []);

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
        <div class="TopContainer" style={{ backgroundColor:'black' }}>
          <Navbar type={JBSeekerType}/>
        </div>
        <div class="SecondContainer" style={{ display:'flex', flexBasis: 200 }}>
          <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
            <div style={{ flex:1, paddingBottom:50, }}>
              <img src={UserIconSVG} style={{height:'90%',
                                        position:'relative', left: 40, top: 45
                                      }} alt="UserIconSVG" />
            </div>
            <div style={{flex:4}}>
              <h1>{localStorage.getItem("user_name")}</h1>
              <p style={{ fontSize:25, fontFamily:'Open Sans' }}>School: {localStorage.getItem("org_id")}<br/>
                <br/>
                Year: 2018 - 2022
              </p>
            </div>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
            <div class="GetScoreButton" style={{ height:'35%', position:'relative', left:100,
                                          width:'55%', margin:10, top:30,padding:2
                                        }}
              onClick={()=>{
                history.push(RedirectTo("inputPage", "job_seeker"));
              }}
              >
              Get Your CV Score
            </div>
            <div class="LogoutButton" style={{ height:'35%', position:'relative', left:100,
                                        width:'55%', margin: 10, top:30,padding:2
                                      }}
                                      onClick={()=> {
                                       localStorage.clear();
                                       history.push(RedirectTo(null, null));}}
                                      >
              Logout
            </div>
          </div>
        </div>
        <div class="ThirdContainer" style={{ display:'flex', flexDirection:'column' ,flexBasis: 325 }}>
          <div style={{flex:1.5}}>
            <div class="SavedJobsTab" style={{position:'relative', left:40,
                                          width:'10%',padding:20,top:29
                                        }}>
              Saved Jobs
            </div>
          </div>
          <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
            <div class="SavedJobsContent" style={{ flex:0.95,position:'relative',
                                                  left:40, overflow:'scroll', maxHeight:400,
                                          }}>
              {
                RenderSavingList()
              }
            </div>
          </div>
        </div>
        <div class="BottomContainer" style={{ display:'flex', flexBasis: 325 }}>
        <div style={{flex:1.5}}>
          <div class="ApplicationStatusTab" style={{ position:'relative', left:60,
                                              width:'10%',padding:20,top:25
                                            }}>
            Application Status
          </div>
        </div>
        <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
          <div class="ApplicationStatusContent" style={{ flex:0.95,position:'relative',
                                                  left:40, overflow:'scroll', maxHeight:300,margin:20,
                                                }}>
              {
                RenderApplicationsList()
              }
          </div>
        </div>
        </div>
    </div>
  )
}

export default SeekerCenterPage;
