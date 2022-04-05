import './styles/Navbar.css';
import './styles/input.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import fileImage from '../assets/fileImage.png'
import userimage from './user_icon.png';



function Input(){
  const type = {
    File: { JD: 'JDFile', RESUME: 'resumeFile' },
    Content: { JD: 'Job Description Content', RESUME: 'Resume Content' },
    Value: {JD: 'JobDescription', RESUME: 'Resume'}
  }
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [selectedFiles, setFilesValue] = useState([]);
  const [textContent, setTextContent] = useState([]);
  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
    console.log(selectedFiles);
    console.log(textContent);
  });

  let checkFileDisplay = (id) => {
    for (let item in selectedFiles) {
      if (selectedFiles[item].id == id) return true;
    }
    return false;
  }

  let handleFileUpload = (e) => {
        console.log(selectedFiles);
        console.log(e.target.id);
        if(selectedFiles.length == 0) {
          setFilesValue([{id: e.target.id, file:e.target.files[0]}]);
        } else {
        let tempFiles = selectedFiles.filter(obj => {
            return obj.id != e.target.id;
          })
          tempFiles.push({id: e.target.id, file:e.target.files[0]});
          setFilesValue(tempFiles);
        }
  }

let handleTextInput = (e) => {
    if (textContent.length == 0) {
      setTextContent([{id: e.target.id, content: e.target.value}]);
    } else {
      let tempContents = textContent.filter((item) => {
        return item.id != e.target.id;
      })

      tempContents.push({id: e.target.id, content: e.target.value});
      setTextContent(tempContents);
    }
}

let handleTextMode = (e) => {
  let tempFiles = selectedFiles.filter(obj => {
      return obj.id != e.target.id;
    });
    console.log("this is tempFile" + tempFiles);
  setFilesValue([...tempFiles]);
}

let handleSubmit = async (e) => {
    let data = new FormData();
    for (let i = 0; i < selectedFiles.length; i ++) {
      if (selectedFiles[i].id == type.File.JD) data.append("JD", selectedFiles[i].file);
      else if (selectedFiles[i].id == type.File.RESUME) data.append("CV", selectedFiles[i].file);
    }
    console.log(textContent);
    for (let i = 0; i < textContent.length; i ++) {
      if (textContent[i].id == type.Value.JD) data.append("JDText", textContent[i].content);
      else if (textContent[i].id == type.Value.RESUME) data.append("CVText", textContent[i].content);
    }

    let res = await fetch("http://143.89.130.207:3000/web_api/matching/", {
      method: 'POST',
      body: data,
    })

    let resData = await res.json();
    alert(resData.body);
    console.log(resData);
}

  let renderTextArea = (placeHolder, type) => {

    return (
      <textarea  style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
              fontSize:'24px',
              margin: '20px',
              borderRadius: '10px'
            }} id={type} onBlur={handleTextInput} placeholder={placeHolder} type="text"/>
    )
  }

  let renderFileDisplay = (fileType) => {
    let selectedFileName = "";

    for (let i = 0; i < selectedFiles.length; i ++) {
      if (!selectedFiles[i].file) continue;
      selectedFileName = (selectedFiles[i].id == fileType) ? selectedFiles[i].file.name : selectedFileName;
    }

    console.log(selectedFileName);

    return (
      <div  style={{display:'flex', flexDirection:'row',flex:1, paddingTop: 10,paddingLeft:10, opacity:1, backgroundColor:'white',
              margin: '20px',
              borderRadius: '10px'
            }} id={"container" + fileType}>
            <img src={fileImage} width= "70px" height="70px"/>
            <div style={{display:'flex', flexDirection:'column', height:'65px', justifyContent:'end'}}>
              {selectedFileName}
            </div>
      </div>
    )
  }

  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div style={{ backgroundColor:'black' }}>
        <Navbar/>
      </div>
      <div style={{ display:'flex', flexBasis: 190 }}>
        <div style={{flex:2}}>
          <h1 align='center' style={{ fontSize:48, position:'relative', left:0, top:40 }} >Job-CV Matching</h1>
          <p align='center' style={{ fontSize:24, position:'relative', left:0, top:24 }}>
            Put Your CV And Job Post Below To Get The Score
          </p>
        </div>
      </div>
        <div class='select_title' style={{display: 'flex', flexDirection: 'row', flexBasis: 520, marginRight: 20}}>
              <div style={{display:'flex', flexDirection: 'column', flex:1}}>
                <div style={{display:'flex', flex:1, margin:20, flexDirection:'column', backgroundColor:'#AAD0C1', borderRadius:'20px'}}>
                <input type="file" id={type.File.RESUME} name={type.File.RESUME} style={{opacity:0, fontSize:0, position: 'absolute'}} onChange={handleFileUpload}/>
                <div  id={type.File.RESUME} onClick={handleTextMode} class="selection">
                  <span id={type.File.RESUME} onClick={handleTextMode}  style={{fontSize:22}}>
                    Text
                  </span>
                </div>
                <div class='selection'  style={{cursor:'pointer'}} onClick={() => document.getElementById(type.File.RESUME).click()}>
                  <span style={{fontSize:22}}>
                    Upload File
                  </span>
                </div>
                <div class='selection'>
                  <span style={{fontSize:22}}>
                    Select File from Profile
                  </span>
                </div>
                    {
                      (checkFileDisplay(type.File.RESUME)) ?

                        renderFileDisplay(type.File.RESUME)

                          :

                        renderTextArea(type.Content.RESUME, type.Value.RESUME)
                    }
              </div>
            </div>
            <div style={{display:'flex', flexDirection: 'column', flex:1}}>
              <div style={{display:'flex', flex:1, margin:20, flexDirection:'column', backgroundColor:'#AAD0C1', borderRadius:'20px'}}>
              <input type="file" id={type.File.JD} name={type.File.JD} style={{opacity:0, fontSize:0, position: 'absolute'}} onChange={handleFileUpload}/>
              <div  id={type.File.JD} onClick={handleTextMode} class="selection">
                <span id={type.File.JD} onClick={handleTextMode} style={{fontSize:22}}>
                  Text
                </span>
              </div>
              <div class='selection'  style={{cursor:'pointer'}} onClick={() => document.getElementById(type.File.JD).click()}>
                <span style={{fontSize:22}}>
                  Upload File
                </span>
              </div>
              <div class='selection'>
                <span style={{fontSize:22}}>
                  Select File from Profile
                </span>
              </div>

              {
                (checkFileDisplay(type.File.JD)) ?

                renderFileDisplay(type.File.JD)

                  :

                renderTextArea(type.Content.JD, type.Value.JD)
              }

            </div>
          </div>
        </div>
            <div class='select_title' style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <div style={{display:'flex', flex:1, justifyContent:'end'}}>
                <div class='g_button' style={{ height:'6%',
                width:'25%', margin: 10, padding:22}}>Search From List</div>
              </div>
              <div style={{flex:1, display: 'flex', justifyContent:'start', marginLeft: 10}}>
              <div class='y_button' onClick={handleSubmit} style={{ height:'6%',
                          width:'25%', margin: 10, padding:22}}>Get Result</div>
              </div>
            </div>

    </div>
  );
}

export default Input;
