import Navbar from './Navbar';
import './styles/UserCenterPage.css';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';

import Axios from "axios";
import { Layout, Menu, Breadcrumb, Select, Table, Tag, Space, List, message, Avatar } from 'antd';
import VirtualList from 'rc-virtual-list';

const jobColumns = [
  {
    dataIndex: "Name",
    width: 150
  },
];

const applicationColumns = [
  {
    dataIndex: "Name",
    width: 150
  },
];

export  function SeekerCenterPage(){

  const [state1, setstate1] = useState([]);
  const [loading1, setloading1] = useState(true);
  const [state2, setstate2] = useState([]);
  const [loading2, setloading2] = useState(true);

  useEffect(() => {
    getData1();
  }, []);
  useEffect(() => {
    getData2();
  }, []);

  const getData1 = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/comments").then(
      res => {
        setloading1(false);
        setstate1(
          res.data.map(row => ({
            Name: row.name,
          }))
        );
      }
    );
  };
  const getData2 = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/users").then(
      res => {
        setloading2(false);
        setstate2(
          res.data.map(row => ({
            Name: row.name,
          }))
        );
      }
    );
  };

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
        <div class="TopContainer" style={{ backgroundColor:'black' }}>
          <Navbar/>
        </div>
        <div class="SecondContainer" style={{ display:'flex', flexBasis: 200 }}>
          <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
            <div style={{ flex:1, paddingBottom:50, }}>
              <img src={UserIconSVG} style={{height:'90%',
                                        position:'relative', left: 40, top: 45
                                      }} alt="UserIconSVG" />
            </div>
            <div style={{flex:4}}>
              <h1>CV MATCHING USER NAME</h1>
              <p style={{ fontSize:25, fontFamily:'Open Sans' }}>School: Hong Kong University of Science and Technology<br/>
                Major: BEng in Computer Science<br/>
                Year: 2018 - 2022
              </p>
            </div>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
            <div class="GetScoreButton" style={{ height:'35%', position:'relative', left:100,
                                          width:'55%', margin:10, top:30,padding:2
                                        }}>
              Get Your CV Score
            </div>
            <div class="LogoutButton" style={{ height:'35%', position:'relative', left:100,
                                        width:'55%', margin: 10, top:30,padding:2
                                      }}>
              Logout
            </div>
          </div>
        </div>
        <div class="ThirdContainer" style={{ display:'flex', flexDirection:'column' ,flexBasis: 325 }}>
          <div style={{flex:1.5}}>
            <div class="SavedJobsTab" style={{position:'relative', left:40,
                                          width:'10%',padding:20, top: 70
                                        }}>
              Saved Jobs
            </div>
          </div>
          <br/><br/><br/><br/>
          <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
            <div class="SavedJobsContent" style={{ flex:0.95,position:'relative',
                                                  left:40}}>
                {loading1 ? (
                  "Loading"
                ) : (
                  <Table
                    showHeader={false}
                    columns={jobColumns}
                    dataSource={state1}
                    pagination={ false }
                    scroll={{ y: 140  }}
                  />
                )}
            </div>
          </div>
        </div>
        <div class="BottomContainer" style={{ display:'flex', flexBasis: 325 }}>
        <div style={{flex:1.5}}>
          <div class="ApplicationStatusTab" style={{ position:'relative', left:40,
                                              width:'10%',padding:20, top: 70
                                            }}>
            Application Status
          </div>
        </div>
        <br/><br/><br/><br/>
        <div style={{ display:'flex',flex:4, flexDirection:'row' }}>
          <div class="ApplicationStatusContent" style={{ flex:0.95,position:'relative',
                                                  left:40
                                                }}>
            {loading2 ? (
              "Loading"
            ) : (
              <Table
                showHeader={false}
                columns={applicationColumns}
                dataSource={state2}
                pagination={ false }
                scroll={{ y: 140  }}
              />
            )}
          </div>
        </div>
        </div>
    </div>
  )
}

export default SeekerCenterPage;
