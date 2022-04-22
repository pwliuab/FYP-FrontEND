import { Layout, Menu, Breadcrumb, Select, Table, Tag, Space, Input } from 'antd';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import './styles/filter.css';
import Navbar from './Navbar';
import { fetchData, getURL, appendData, JOB_POST} from './DataProvider';
import { JOB_CHOICE } from './ConstantVariable'
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


const UploadPage = ({}) => {
  const editor = useRef(null);
  const [job_description_content, setJD] = useState('');
  const [job_requirement_content, setJR] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [qualification, setQualification] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [nature, setNature] = useState('');


  let handleChange = (value, type) => {
    switch (type) {
      case 'salary':
        setSalary(value);
        return;
      case 'nature':
        setNature(value);
        return;
      case 'location':
        setLocation(value);
        return;
      case 'qualification':
        setQualification(value);
        return;
      case 'title':
        setTitle(value);
        return;
      case 'job_description':
        setJD(value);
        return;
      case 'job_requirement':
        setJR(value);
        return;
      case 'type':
        setType(value);
        return;
    }
  }

  const config = {
      readonly: false // all options from https://xdsoft.net/jodit/doc/
  }

  let RenderOption = (key) => {
    let indents  = JOB_CHOICE[key];
    indents = indents.map((item, index) => {
      return(
        <Option value={item}>{item}</Option>
      )
    })
    return indents;
  }
let handleUpload =  async () => {
  let org_id = await localStorage.getItem("org_id");
  let user_id = await localStorage.getItem("user_id");
  let dataList = {
    nature: nature, salary: salary, location: location, qualification: qualification,
    title: title, type: type, job_description: job_description_content,
    job_requirement: job_requirement_content, org_id: org_id, user_id: user_id
  }
 let data = appendData(dataList);
 let response = await fetchData(JOB_POST, 'POST', data, "text")
 if (response.result_code == '200') {
    alert("You have sucessfully upload the job post");
    window.location.reload();
 } else {
   alert("Connection fail, please contact the system administrator");
 }
}

  return (
	<Layout className="layout">
  <div style={{ backgroundColor:'black' }}>
    <Navbar type={"recruiter"}/>
  </div>
	<Content style={{ padding: '0 50px' }}>
		<div className="site-layout-content">
			<div style={{flex:0.2, display:'flex', justifyContent:'center', alignItems:'center'}}>
				<span style={{fontSize:'calc(32px + 1.5vw)', fontWeight:'bold', fontFamily:'Mulish', marginTop:20, position:'relative', top:20}}>Upload Job Post</span>
			</div>

			<div style={{display:'flex', flexDirection:'column', flex:1, margin:70, background:'rgba(33, 130, 94, 0.31)', borderRadius:'40px',}}>

			<br />
			<br />



			<div className="filterPageJobBoard" style={{display:'flex',flex:1, borderTopLeftRadius:'40px', borderTopRightRadius:'40px',}}>

			<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
				<div className="filterPageSearchContent" style={{position:'relative',width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>

				<Input size={'large'} placeholder="Job Title" onBlur={(e)=>{setTitle(e.target.value)}}></Input>
					<div  style={{width:'100%', position:'absolute', backgroundColor:'green', top:'100%', zIndex: 1}}>

					</div>
				</div>
			</div>


				<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div className="filterPageSearchContent" style={{position:'relative',width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>
						<div style={{flex:0.4, }}/>
						<Select defaultValue="Employment Type" size={'large'} style={{ width: '100%' }}  onChange={(e) => {handleChange(e, 'type')}}>
              {RenderOption('type')}
						</Select>
						<div  style={{width:'100%', position:'absolute', backgroundColor:'green', top:'100%', zIndex: 1}}>
						</div>
					</div>
				</div>
				<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Working Location" size={'large'} style={{ width: '100%' }}  onChange={(e) => {handleChange(e, 'location')}}>
              {
                RenderOption('location')
              }
						</Select>
					</div>
				</div>
			</div>

			<br />

			<div className="filterPageJobBoard" style={{display:'flex', flex:1, borderBottomLeftRadius:'40px',borderBottomRightRadius:'40px'}}>

				<div style={{flex:1, backgorundColor:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div  className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Job Industries" size={'large'} style={{ width: '100%' }} onChange={(e) => {handleChange(e, 'nature')}}>
              {RenderOption('nature')}
						</Select>
					</div>
				</div>
				<div style={{flex:1, backgorundColor:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div  className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Level of Qualification" size={'large'} style={{ width: '100%' }} onChange={(e) => {handleChange(e, 'qualification')}}>
              {RenderOption('qualification')}
						</Select>
					</div>
				</div>
				<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Salary" size={'large'} style={{ width: '100%' }} onChange={(e) => {handleChange(e, 'salary')}}>
              {RenderOption('salary')}
						</Select>
					</div>
				</div>
			</div>

			<br />
			<br />

			</div>

<div style={{display:'flex', flexDirection:'column', flex:1, margin:70, background:'rgba(33, 130, 94, 0.31)', borderRadius:'40px',}}>
      <div style={{flex:0.5, display:'flex', justifyContent:'center', alignItems:'center', marginTop:10}}>
        <span style={{fontSize:'calc(32px)', fontWeight:'bold', fontFamily:'Mulish', marginTop:10}}>Upload Job Description</span>
      </div>
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center' , margin:30}}>

      <JoditEditor
          style={{}}
          ref={editor}
          value={job_description_content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setJD(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
      />
      </div>
      <div style={{flex:0.5, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <span style={{fontSize:'calc(32px)', fontWeight:'bold', fontFamily:'Mulish', marginTop:10}}>Upload Job Requirement</span>
      </div>
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center', margin:30}}>

      <JoditEditor
          height= {"600"}
          ref={editor}
          value={job_requirement_content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setJR(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
      />
      </div>
      </div>

      <br />

      <div className="button-css" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
        <Button type="primary" style={{ width: '10%' } } onClick={() => {console.log(nature);handleUpload()}}>Upload</Button>
      </div>

      <br />
      <br />
		</div>

	</Content>
	<Footer style={{ textAlign: 'center' }}>Resume Matching ©2022 Created by HKUST</Footer>
</Layout>
);
}

export default UploadPage;
