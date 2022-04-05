import Navbar from './Navbar';
import './styles/UserCenterPage.css';
import './styles/JobFilterPage.css';
import React, { useState, useEffect } from 'react';
import UserIconSVG from '../assets/Shape.svg';
import LeftIconSVG from '../assets/Left.svg';
import SearchIconSVG from '../assets/Search.svg';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export  function SeekerFilterPage(){
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [isOpenList, handleListChange] = useState([false, false, false, false, false, false]);
  const [currentOpenList, handleCurrentOpenList] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    let handleUnfocus = (e) => {
        if (e.target.id.includes("dropDown")) {
          let dropDownID = e.target.id.split('dropDown')[1];
          let newList = [...isOpenList];

          if (currentOpenList != "") newList[parseInt(currentOpenList)] = !newList[parseInt(currentOpenList)];

          if (dropDownID != currentOpenList) newList[parseInt(dropDownID)] = !newList[parseInt(dropDownID)];

          handleListChange(newList);
          // if the currentOpen id is not "clicked" one, we update the list to other id
          // else we turn it to "" close it.
          if (currentOpenList != dropDownID) handleCurrentOpenList(dropDownID);
          else handleCurrentOpenList("")

        } else if (currentOpenList != "") {
           let newList = [...isOpenList];
           newList[parseInt(currentOpenList)] = false;
           handleListChange(newList);
           handleCurrentOpenList("");

        }
    }
    window.addEventListener('click', handleUnfocus);
    return () => {
        window.removeEventListener('click', handleUnfocus);
    }
  });

  let renderDropDownList = () => {
    let resultRender = ["Company A", "Company A", "Company A", "Company A", "Company A", "Company B", "Company C","Company C","Company C","Company C","Company C","Company C",];
    let listStyles = { maxWidth: '100%',minHeight: 50,display:'flex', justifyContent: "center", alignItems: "center", borderRadius: 20};
    resultRender = resultRender.map( (item) => {
      return <div className="listContent" style={listStyles}> {item} </div>
    })
    return (
      <div className="filterDropDown" style={{display:'flex', flexDirection:'column',width:'100%', position:'absolute', top:'100%', height:400, zIndex: 1}}>
        {resultRender}
      </div>
    );
  }

  let renderSearchContent = () => {

    return (
      <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div  className="filterPageSearchContent" style={{position:'relative', width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img id="dropDown0" src={SearchIconSVG} style={{marginLeft:2, height:40, width:40,}} alt="LeftIconSVG" />
          <div style={{flex:0.4, }}/>
          <span style={{fontSize:'26px', color:'#241C1C', fontFamily:'Mulish', fontStyle:'normal'}}>Job Title, Compony</span>
          <div style={{flex:0.4}}/>
          {
            isOpenList[0] ?
            renderDropDownList()
            :
            null
          }
        </div>
      </div>
    )
  }

  return(
    <div  style={{ display: 'flex', flexDirection:'column' }}>
        <div class="TopContainer" style={{ backgroundColor:'black' }}>
          <Navbar/>
        </div>
        <div className="filterPage">

          <div style={{flex:0.2, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <span style={{fontSize:'calc(32px + 1.5vw)', fontWeight:'bold', fontFamily:'Mulish', marginTop:20, position:'relative', top:20}}>Job Board</span>
          </div>

          <div style={{display:'flex', flexDirection:'column', flex:1, margin:70, background:'rgba(33, 130, 94, 0.31)', borderRadius:'40px',}}>

            <div className="filterPageJobBoard" style={{display:'flex',flex:1, borderTopLeftRadius:'40px', borderTopRightRadius:'40px',}}>
                {
                  renderSearchContent()
                }
              <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="filterPageSearchContent" style={{position:'relative',width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{flex:0.8, }}/>
                  <span style={{fontSize:'26px', color:'#241C1C', fontFamily:'Mulish', fontStyle:'normal'}}>Employment Type</span>
                  <div style={{flex:0.4, }}/>
                  <img id="dropDown1" src={LeftIconSVG} style={{flex:0.1, marginRight:10, height:40, width:40, transform:'rotate(90deg)scale(-1,1)', cursor:'pointer'}} alt="LeftIconSVG" />
                  {
                    isOpenList[1] ?
                    renderDropDownList()
                    :
                    null
                  }
                </div>
              </div>
              <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="filterPageSearchContent" style={{position:"relative", width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{flex:0.8, }}/>
                  <span style={{fontSize:26, color:'#241C1C', fontFamily:'Mulish', fontStyle:'normal'}}>Working Location</span>
                  <div style={{flex:0.4, }}/>
                  <img id="dropDown2" src={LeftIconSVG} style={{flex:0.1, marginRight:10, height:40, width:40, transform:'rotate(90deg)scale(-1,1)', cursor:'pointer'}} alt="LeftIconSVG" />
                  {
                    isOpenList[2] ?
                    renderDropDownList()
                    :
                    null
                  }
                </div>
              </div>
            </div>

            <div className="filterPageJobBoard" style={{display:'flex', flex:1, borderBottomLeftRadius:'40px',borderBottomRightRadius:'40px'}}>

              <div style={{flex:1, backgorundColor:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div  className="filterPageSearchContent" style={{position:'relative', width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{flex:0.8, }}/>
                  <span style={{fontSize:26, color:'#241C1C', fontFamily:'Mulish', fontStyle:'normal'}}>Job Industries</span>
                  <div style={{flex:0.4, }}/>
                  <img id="dropDown3" src={LeftIconSVG} style={{flex:0.1, marginRight:10, height:40, width:40, transform:'rotate(90deg)scale(-1,1)', cursor:'pointer'}} alt="LeftIconSVG" />
                  {
                    isOpenList[3] ?
                    renderDropDownList()
                    :
                    null
                  }
                </div>
              </div>
              <div style={{flex:1, backgorundColor:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div  className="filterPageSearchContent" style={{position:'relative', width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{flex:0.8, }}/>
                  <span style={{fontSize:26, color:'#241C1C', fontFamily:'Mulish', fontStyle:'normal'}}>Level of Qualification</span>
                  <div style={{flex:0.4, }}/>
                  <img id="dropDown4" src={LeftIconSVG} style={{flex:0.1, marginRight:10, height:40, width:40, transform:'rotate(90deg)scale(-1,1)', cursor:'pointer'}} alt="LeftIconSVG" />
                  {
                    isOpenList[4] ?
                    renderDropDownList()
                    :
                    null
                  }
                </div>
              </div>
              <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="filterPageSearchContent" style={{position:'relative', width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{flex:0.8, }}/>
                  <span style={{fontSize:26, color:'#241C1C', fontFamily:'Mulish', fontStyle:'normal'}}>Salary</span>
                  <div style={{flex:0.4, }}/>
                  <img id="dropDown5" src={LeftIconSVG} style={{flex:0.1, marginRight:10, height:40, width:40, transform:'rotate(90deg)scale(-1,1)', cursor:'pointer'}} alt="LeftIconSVG" />
                  {
                    isOpenList[5] ?
                    renderDropDownList()
                    :
                    null
                  }
                </div>
              </div>
            </div>

          </div>
          <div style={{display:'flex', flex:1, justifyContent:'center'}}>
            <div style={{padding:10 ,backgroundColor:'black', height:'25%', width:'25%', borderRadius:50, margin:10, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <span style={{color:'white', fontSize: 30, fontWeight:'bold', fontFamily:'Mulish',}}>SEARCH</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SeekerFilterPage;
