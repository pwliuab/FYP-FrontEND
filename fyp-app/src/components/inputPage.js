import './styles/Navbar.css';
import './styles/input.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import fileImage from '../assets/fileImage.png'
import userimage from './user_icon.png';
import { USER_TYPE_COOKIE, JOB_CHOICE} from './ConstantVariable';
import { RedirectTo } from './Redirection';
import { useHistory } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Select, Table, Tag, Space, Input } from 'antd';
import { FileUploader } from "react-drag-drop-files";
import { fetchData, appendData, MODEL, APPLICATION, CV, RESULT, JOB_POST} from "./DataProvider";
import ReactLoading from 'react-loading';

let { Option } = Select;

const fileTypes = ["PDF"];


function InputPage(props) {
  let history = useHistory();
  const [file, setFile] = useState(null);
  const [jd, setJD] = useState("");
  const [jr, setJR] = useState("");
  const handleChange = (file) => {
    setFile(selectedFiles[0].file);
  };
  const type = {
    File: { JD: 'JobDescription', RESUME: 'Resume', JR:"JobRuirement"},
    Content: { JD: 'Job Description Content', RESUME: 'Resume Content', JR:"Job Ruirement Content" },
    Value: {JD: 'JobDescription', RESUME: 'Resume', JR:"JobRuirement"}
  }
  const [activeCandidateBtn, handleBtnChange] = useState(true);
  const [selectedFiles, setFilesValue] = useState([]);
  const [textContent, setTextContent] = useState([]);
  const [jobFileMode, setJobFileMode] = useState(false);
  const [jbType, setJbType] = useState('hr');
  const [nature, setNature] = useState('');
  const [loading, setLoading] = useState(false);
  let RenderOption = (key) => {
    let indents  = JOB_CHOICE[key];
    indents = indents.map((item, index) => {
      return(
        <Option value={item}>{item}</Option>
      )
    })
    return indents;
  }


  // const [JRText, setJRText] = useState("");
  // const [JDText, setJDText] = useState("");
  //
  // const [CVText, setCVText] = useState("");
  // const [ResumeMode, setResumeMod] = useState("text");
  //
  // const [JRFiles, setJRFiles] = useState([]);
  // const [JDFiles, setJDFiles] = useState([]);
  //
  // const [JobPostMode, setJobPostMode] = useState("text");
  // const [ResumeMode, setResumeMode] = useState("text");


  useEffect(() => {
    document.body.style.backgroundColor = '#E8F3EF';
    document.body.style.overflowX = 'hidden';
    console.log(selectedFiles);
    console.log(textContent);
  });

  useEffect(() => {
    console.log(props.match.params.jd_id);
    let handleFetch = async () => {
      try {
        let resData = await fetchData(JOB_POST, 'GET', "", "by_jd_id/" + props.match.params.jd_id);
        console.log("erewrpwelkr[wekrwerkpweorkweporkwope]")
        setTextContent([{id :type.Value.JD,  content: resData.data[0][0].job_description}, {id :type.Value.JR,  content:resData.data[0][0].job_requirement}])
        setNature({value:resData.data[0][0].nature, label:resData.data[0][0].nature});
        setJbType(resData.data[0][0].nature);
        setJR(resData.data[0][0].job_requirement);
        setJD(resData.data[0][0].job_description);
      } catch(e) {
        console.log(e);
      }
    }
    if (props.match.params.jd_id) {
      handleFetch();
    }
  }, [])

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
          setFile(e.target.files[0]);
        }
        let tempContents = textContent.filter((item) => {
          return item.id != e.target.id;
        });
        setTextContent(tempContents);
  }

let handleFilesUpload = (id, file) => {
  if(selectedFiles.length == 0) {
    setFilesValue([{id: id, file:file}]);
  } else {
  let tempFiles = selectedFiles.filter(obj => {
      return obj.id != id;
    })
    tempFiles.push({id: id, file: file});
    setFilesValue(tempFiles);
  }

  let tempContents = textContent.filter((item) => {
    return item.id != id;
  });

  setTextContent(tempContents);
}



let renderFileArea = () => {
    let indents = [];

    indents.push(
      <div  style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                       fontSize:'24px',
                       margin: '20px',
                       borderRadius: '10px',
                       backgroundColor: 'white'
                     }}>
        <FileUploader handleChange={(file) => {
          handleFilesUpload(type.File.JD, file);
        }} name="file" types={fileTypes} />
        {renderFileDisplay(type.File.JD)}
      </div>
    );

    indents.push(
      <div  style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                       fontSize:'24px',
                       margin: '20px',
                       borderRadius: '10px',
                       backgroundColor: 'white'
                     }}>
            <FileUploader handleChange={(file) => {
              handleFilesUpload(type.File.JR, file);
            }} name="file" types={fileTypes} />
            {renderFileDisplay(type.File.JR)}
      </div>
    );
  return indents
}

let handleTextIDInput = (id, value) => {
  if (textContent.length == 0) {
    setTextContent([{id: id, content: value}]);
  } else {
      let tempContents = textContent.filter((item) => {
        return item.id != id;
      })

      tempContents.push({id: id, content: value});
      setTextContent(tempContents);
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

let handleTextIDMode = (id1, id2) => {
  let tempFiles = selectedFiles.filter(obj => {
      return obj.id != id1 && obj.id != id2;
    });
    console.log("this is tempFile" + tempFiles);
    setFilesValue([...tempFiles]);
}


let renderButton = () => {
  if (props.match.path == '/fyp/inputPage/apply/:jd_id') {
    return (
      <div style={{display:'flex', flex:1, justifyContent:'end'}}>
          <div class='g_button' style={{ height:'6%',
          width:'25%', margin: 10, padding:22}}
          onClick={async () => {
            let data = {};

            data = appendData({user_id: localStorage.getItem('user_id'), job_description_id: props.match.params.jd_id, status: 'waiting'})
            try {
              let responseData  = await fetchData(APPLICATION, 'POST', data, 'by_user_id/' + localStorage.getItem('user_id'))
              handleMatchAndStore();
              console.log(responseData);
            } catch(e) {
              alert("You have applied this job already, click get Result to get corresponding result");
            }

          }}
          >Apply and Match</div>
        </div>
    )
  } else if (props.match.params) {
    return (
      <div style={{display:'flex', flex:1, justifyContent:'end'}}>
          <div class='g_button' style={{ height:'6%',
          width:'25%', margin: 10, padding:22}}
          onClick={()=>{
            history.push(RedirectTo('filterPage', localStorage.getItem(USER_TYPE_COOKIE), ""))
          }}
          >Search From List</div>
        </div>
    )
  }
  return  null;
}

let handleMatchAndStore = async (e) => {
    let jddata = new FormData();
    let cvdata = new FormData();
    let isJPText = false;
    let isCVText = false;
    let data = {};
    for (let i = 0; i < selectedFiles.length; i ++) {
      if (selectedFiles[i].id == type.File.JD) jddata.append("JD", selectedFiles[i].file);
      else if (selectedFiles[i].id == type.File.RESUME) {
         cvdata.append("CV", selectedFiles[i].file)
         data['file'] = selectedFiles[i].file;
       }
      else if (selectedFiles[i].id == type.File.JR) jddata.append("JR", selectedFiles[i].file);
    }
    console.log(textContent);
    console.log(selectedFiles);
    for (let i = 0; i < textContent.length; i ++) {
      if (textContent[i].id == type.Value.JD) {
         jddata.append("JD", textContent[i].content);
         isJPText = true;
       }
        else if (textContent[i].id == type.Value.RESUME) {
          cvdata.append("CV", textContent[i].content);
          isCVText = true;
        }
          else if (textContent[i].id == type.Value.JR) {
            jddata.append("JR", textContent[i].content);
            isJPText = true;
          }
    }

    jddata.append('type', jbType);
    cvdata.append('type', 'designer');
    for(var pair of jddata.entries()) {

      console.log(pair[0]+ ', '+ pair[1]);

    }
    for(var pair of cvdata.entries()) {

      console.log(pair[0]+ ', '+ pair[1]);

    }
    let jdType = (isJPText)? 'text' : 'file';
    let cvType = (isCVText)? 'text' : 'file';
    console.log('cvType:' + cvType);
    console.log('jdType:' + jdType);
    // resume databaes format
    data['user_id'] = localStorage.getItem('user_id');
    data['info'] = "not applicable";
    data['education'] = 'not applicable'
    data['extra_activity'] = 'not applicable';
    data['additional_info'] = 'not applicable';
    let resume = appendData(data);

    for(var pair of resume.entries()) {

      console.log(pair[0]+ ', '+ pair[1]);

    }

    try {
      let [r1, r2, resumeResponse] = await Promise.all([
        fetchData(MODEL, 'POST', jddata, 'JD/' + jdType),
        fetchData(MODEL, 'POST', cvdata, 'cvModel/cvModel/' + cvType),
        fetchData(CV, 'POST', resume, ""),
      ]);


      console.log(r1);
      console.log(r2);
      let dt = appendData({jd_output: r1.jd_output, cv_output: r2.cv_output, jd_df: r1.jd_df, cv_df: r2.cv_df});
      setLoading(true);
      let r3 = await fetchData(MODEL, 'POST', dt, 'result');
      console.log(r3);
      // append the data format
      let aspects = r3.aspects;
      let result_option = {};
      let partial_score = JSON.parse(r3.partial_score);
      for (let i = 0; i < aspects.length; i ++) {
        result_option[aspects[i]] = partial_score[i];
      }
      console.log(result_option);
      let resultData = appendData({cv_id: resumeResponse.data.id, result_option: JSON.stringify(result_option),job_description_id: props.match.params.jd_id, result_score: parseInt(JSON.parse(r3.overall_score)[0][0])})
      let r4 = await fetchData(RESULT, 'POST', resultData, '');
      setLoading(false);

      history.push(RedirectTo('singleResultPage', localStorage.getItem(USER_TYPE_COOKIE), "/" + r3.overall_score + "/" + r3.partial_score + "/" + r3.aspects));
      // console.log("=========================================")
  }
  catch(e) {
    console.log(e);
    alert("server error, please contact the admin")
  }
    // alert(resData.body);
    // console.log(resData);
}

let handleSubmit = async (e) => {
    let jddata = new FormData();
    let cvdata = new FormData();
    let isJPText = false;
    let isCVText = false;
    for (let i = 0; i < selectedFiles.length; i ++) {
      if (selectedFiles[i].id == type.File.JD) jddata.append("JD", selectedFiles[i].file);
      else if (selectedFiles[i].id == type.File.RESUME) cvdata.append("CV", selectedFiles[i].file);
      else if (selectedFiles[i].id == type.File.JR) jddata.append("JR", selectedFiles[i].file);
    }
    console.log(textContent);
    console.log(selectedFiles);
    for (let i = 0; i < textContent.length; i ++) {
      if (textContent[i].id == type.Value.JD) {
         jddata.append("JD", textContent[i].content);
         isJPText = true;
       }
        else if (textContent[i].id == type.Value.RESUME) {
          cvdata.append("CV", textContent[i].content);
          isCVText = true;
        }
          else if (textContent[i].id == type.Value.JR) {
            jddata.append("JR", textContent[i].content);
            isJPText = true;
          }
    }

    jddata.append('type', jbType);
    cvdata.append('type', 'designer');
    for(var pair of jddata.entries()) {

      console.log(pair[0]+ ', '+ pair[1]);

    }
    for(var pair of cvdata.entries()) {

      console.log(pair[0]+ ', '+ pair[1]);

    }
    // let res = await fetch("http://143.89.130.207:3000/web_api/matching/", {
    //   method: 'POST',
    //   body: data,
    // })
    // let resData = await res.json();
    try {

      let jdType = (isJPText)? 'text' : 'file';
      let cvType = (isCVText)? 'text' : 'file';
      console.log('cvType:' + cvType);
      console.log('jdType:' + jdType);
        setLoading(true);
        let [r1, r2] = await Promise.all([
          fetchData(MODEL, 'POST', jddata, 'JD/' + jdType),
          fetchData(MODEL, 'POST', cvdata, 'cvModel/cvModel/' + cvType),
        ]);
        console.log(r1);
        console.log(r2);
        let dt = appendData({jd_output: r1.jd_output, cv_output: r2.cv_output, jd_df: r1.jd_df, cv_df: r2.cv_df});
        let r3 = await fetchData(MODEL, 'POST', dt, 'result');
        console.log(r3);
        console.log("=========================================")
        setLoading(false);
        history.push(RedirectTo('singleResultPage', localStorage.getItem(USER_TYPE_COOKIE), "/" + r3.overall_score + "/" + r3.partial_score + "/" + r3.aspects));
        console.log("=========================================")


    } catch (e) {
      alert('system error, please check whether you fill in all the information')
      setLoading(false);

    }

    // alert(resData.body);
    // console.log(resData);
}

  let renderTextArea = (placeHolder, types) => {
      let indents = [];
      if (types != type.Value.JD) {
        indents.push(
           <textarea  style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                            fontSize:'24px',
                            margin: '20px',
                            borderRadius: '10px'
                          }} id={types} onBlur={handleTextInput} placeholder={placeHolder} type="text"/>
                        )
      } else {
          indents.push(
            (props.match.params.jd_id)?
            <textarea disabled={true} style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                             fontSize:'24px',
                             margin: '20px',
                             borderRadius: '10px'
                           }} id={type.Value.JD} value={jd} onBlur={handleTextInput} placeholder={placeHolder} type="text"/>
                           :
                           <textarea    style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                                            fontSize:'24px',
                                            margin: '20px',
                                            borderRadius: '10px'
                                          }} id={type.Value.JD} onBlur={handleTextInput} placeholder={type.Content.JD} type="text"/>
          );
          console.log(props.match.params.jd_id);
          indents.push(
            (props.match.params.jd_id)?
                <textarea disabled={true}   style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                                         fontSize:'24px',
                                         margin: '20px',
                                         borderRadius: '10px'
                                       }} id={type.Value.JR} value={jr} onBlur={handleTextInput} placeholder={type.Content.JR} type="text"/>

                                        :

            <textarea  style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                             fontSize:'24px',
                             margin: '20px',
                             borderRadius: '10px'
                           }} id={type.Value.JR} onBlur={handleTextInput} placeholder={type.Content.JR} type="text"/>
          );

      }

      return indents;
  }

  let renderFileDisplay = (fileType) => {
    let selectedFileName = "";

    for (let i = 0; i < selectedFiles.length; i ++) {
      if (!selectedFiles[i].file) continue;
      selectedFileName = (selectedFiles[i].id == fileType) ? selectedFiles[i].file.name : selectedFileName;
    }

    console.log(selectedFileName);
    if (selectedFileName == "") return null;
    return (
      <div  style={{display:'flex', flexDirection:'row',flex:1, paddingTop: 10,paddingLeft:10, opacity:1, backgroundColor:'white',
              margin: '20px',
              borderRadius: '10px',
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
        <Navbar type={localStorage.getItem(USER_TYPE_COOKIE)}/>
      </div>
      {
        (loading)?
        <div stlye={{position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{position:'absolute', left:750, zIndex:1}}>
            <ReactLoading  type={"spinningBubbles"} color="green" height={667} width={375} />
          </div>
        </div>
        :
        null
      }

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
                  <span id={type.File.RESUME} onClick={handleTextMode}  style={{fontSize:22, cursor:'pointer'}}>
                    Click me to Upload Text
                  </span>
                </div>
                <div class='selection'  style={{cursor:'pointer'}} onClick={() => {
                  document.getElementById(type.File.RESUME).click();
                }}>
                  <span style={{fontSize:22}}>
                    Click me to Upload File
                  </span>
                </div>
                <div class='selection'>

                </div>

                    {
                      (checkFileDisplay(type.File.RESUME)) ?

                        <div style={{flex:1, paddingTop: 10,paddingLeft:10, opacity:1,color:'#000000',
                                         fontSize:'24px',
                                         margin: '20px',
                                         borderRadius: '10px',
                                         backgroundColor: 'white'}}>
                          <FileUploader handleChange={(file) => {
                            handleFilesUpload(type.File.RESUME, file);
                          }} name="file" types={fileTypes} />
                          {
                            renderFileDisplay(type.File.RESUME)
                          }
                        </div>
                          :

                          renderTextArea(type.Content.RESUME, type.Value.RESUME)

                    }
              </div>
            </div>
            <div style={{display:'flex', flexDirection: 'column', flex:1}}>
              <div style={{display:'flex', flex:1, margin:20, flexDirection:'column', backgroundColor:'#AAD0C1', borderRadius:'20px'}}>
              <input type="file" id={type.File.JD} name={type.File.JD} style={{opacity:0, fontSize:0, position: 'absolute'}} onChange={handleFileUpload}/>
              <div  id={type.File.JD} onClick={(e) => {handleTextIDMode(type.File.JD, type.File.JR); setJobFileMode(false);}} class="selection">
                <span id={type.File.JD} onClick={handleTextMode} style={{fontSize:22, cursor:'pointer'}}>
                  Click me to upload Text
                </span>
              </div>
              <div class='selection'  style={{cursor:'pointer'}} onClick={() => {
                if (props.match.params.jd_id) return;
                setJobFileMode(true)
              }}>
                <span style={{fontSize:22}}>
                  Click me to Upload File
                </span>
              </div>
              <div class='selection'>
              <Select disabled={ (props.match.params.jd_id)? true : false}defaultValue="Job Industries" size={'large'} style={{ width: '100%', borderRadius:50 }} value={jbType}  onChange={(e) => {
                setJbType(e);
              }}>
                {RenderOption('nature')}
              </Select>
              </div>

              {
                (jobFileMode) ?

                  renderFileArea()
                  :
                renderTextArea(type.Content.JD, type.Value.JD)
              }

            </div>
          </div>
        </div>
            <div class='select_title' style={{display: 'flex', flexDirection: 'row', flex: 1}}>
{             localStorage.getItem(USER_TYPE_COOKIE) == "job_seeker" ?
                renderButton()
              :
                <div style={{display:'flex', flex:0.67, justifyContent:'end'}}>
                </div>
  }
              <div style={{flex:1, display: 'flex', justifyContent:'start', marginLeft: 10}}>
              <div class='y_button' onClick={handleSubmit} style={{ height:'6%',
                          width:'25%', margin: 10, padding:22}}
                          >Get Result</div>
              </div>
            </div>

    </div>
  );
}

export default InputPage;
