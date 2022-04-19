import { Layout, Menu, Breadcrumb, Select, Table, Tag, Space, Input } from 'antd';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import './styles/filter.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const onChange = e => {
  console.log('Change:', e.target.value);
};

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const UploadPage = ({}) => {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
      readonly: false // all options from https://xdsoft.net/jodit/doc/
  }


  return (
	<Layout className="layout">
	<Header>
		<div className="logo" />
		<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
			<Menu.Item disabled = "true">Resume Matching</Menu.Item>
			<Menu.Item>Match</Menu.Item>
			<Menu.Item>Community</Menu.Item>
		</Menu>
	</Header>
	<Content style={{ padding: '0 50px' }}>
		<div className="site-layout-content">
			<div style={{flex:0.2, display:'flex', justifyContent:'center', alignItems:'center'}}>
				<span style={{fontSize:'calc(32px + 1.5vw)', fontWeight:'bold', fontFamily:'Mulish', marginTop:20, position:'relative', top:20}}>Upload Job Description</span>
			</div>

			<div style={{display:'flex', flexDirection:'column', flex:1, margin:70, background:'rgba(33, 130, 94, 0.31)', borderRadius:'40px',}}>

			<br />
			<br />



			<div className="filterPageJobBoard" style={{display:'flex',flex:1, borderTopLeftRadius:'40px', borderTopRightRadius:'40px',}}>

			<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
				<div className="filterPageSearchContent" style={{position:'relative',width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>

				<Input size={'large'} placeholder="Job Title"></Input>
					<div  style={{width:'100%', position:'absolute', backgroundColor:'green', top:'100%', zIndex: 1}}>

					</div>
				</div>
			</div>


				<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div className="filterPageSearchContent" style={{position:'relative',width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>
						<div style={{flex:0.4, }}/>
						<Select defaultValue="Employment Type" size={'large'} style={{ width: '100%' }}  onChange={handleChange}>
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="disabled" disabled>
								Disabled
							</Option>
							<Option value="Yiminghe">yiminghe</Option>
						</Select>
						<div  style={{width:'100%', position:'absolute', backgroundColor:'green', top:'100%', zIndex: 1}}>
						</div>
					</div>
				</div>
				<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Working Location" size={'large'} style={{ width: '100%' }} onChange={handleChange}>
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="disabled" disabled>
								Disabled
							</Option>
							<Option value="Yiminghe">yiminghe</Option>
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
						<Select defaultValue="Job Industries" size={'large'} style={{ width: '100%' }} onChange={handleChange}>
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="disabled" disabled>
								Disabled
							</Option>
							<Option value="Yiminghe">yiminghe</Option>
						</Select>
					</div>
				</div>
				<div style={{flex:1, backgorundColor:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div  className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Level of Qualification" size={'large'} style={{ width: '100%' }} onChange={handleChange}>
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="disabled" disabled>
								Disabled
							</Option>
							<Option value="Yiminghe">yiminghe</Option>
						</Select>
					</div>
				</div>
				<div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div className="filterPageSearchContent" style={{width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>
						<div style={{flex:0.8, }}/>

						<div style={{flex:0.4, }}/>
						<Select defaultValue="Salary" size={'large'} style={{ width: '100%' }} onChange={handleChange}>
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="disabled" disabled>
								Disabled
							</Option>
							<Option value="Yiminghe">yiming</Option>
						</Select>
					</div>
				</div>
			</div>

			<br />
			<br />

			<div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
      <JoditEditor
          style={{}}
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
      />
			</div>

			<br />

			<div className="button-css" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
				<Button type="primary" style={{ width: '10%' }}>Upload</Button>
			</div>

			<br />
			<br />

			</div>

<div style={{display:'flex', flexDirection:'column', flex:1, margin:70, background:'rgba(33, 130, 94, 0.31)', borderRadius:'40px',}}>

<br /><br /><br />
			<div className="dragger-css" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
				<Dragger style={{ width:'100%' }} {...props}>
			    <p className="ant-upload-drag-icon">
			      <InboxOutlined />
			    </p>
			    <p className="ant-upload-text">Click or drag file to this area to upload</p>
			    <p className="ant-upload-hint">
			      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
			      band files
			    </p>
			  </Dragger>


			</div>

			<br /><br />


			<div className="button-css" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
				<Button type="primary" style={{ width: '10%' }}>Upload File</Button>
			</div>


			<br />
			<br /><br />

			</div>

		</div>

	</Content>
	<Footer style={{ textAlign: 'center' }}>Resume Matching ©2022 Created by HKUST</Footer>
</Layout>
);
}

export default UploadPage;
