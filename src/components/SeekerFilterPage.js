import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Layout, Menu, Breadcrumb, Select, Table, Tag, Space, List, message, Avatar } from 'antd';
import VirtualList from 'rc-virtual-list';
import './styles/filter.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    width: 150
  },
  {
    title: "Email",
    dataIndex: "Email",
    width: 150
  }
];

function SeekerFilterPage() {

const [state, setstate] = useState([]);
const [loading, setloading] = useState(true);

useEffect(() => {
  getData();
}, []);

const getData = async () => {




  await Axios.get("https://jsonplaceholder.typicode.com/comments").then(
    res => {
      setloading(false);
      setstate(
        res.data.map(row => ({
          Name: row.name,
          Email: row.email,
          id: row.id
        }))
      );
    }
  );
};


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
          <span style={{fontSize:'calc(32px + 1.5vw)', fontWeight:'bold', fontFamily:'Mulish', marginTop:20, position:'relative', top:20}}>Job Board</span>
        </div>

        <div style={{display:'flex', flexDirection:'column', flex:1, margin:70, background:'rgba(33, 130, 94, 0.31)', borderRadius:'40px',}}>

        <br />
        <br />

        <div className="filterPageJobBoard" style={{display:'flex',flex:1, borderTopLeftRadius:'40px', borderTopRightRadius:'40px',}}>

        <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className="filterPageSearchContent" style={{position:'relative',width:'60%', backgroundColor:'white', borderRadius: 30, display:'flex', justifyContent:'center', alignItems:'center'}}>

              <Select className="input" mode="tags" size={'large'} style={{ width: '100%' }} placeholder="Job Title, Compony" onChange={handleChange}>
                {children}
              </Select>
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
              <Select className = "select" defaultValue="Job Industries" size={'large'} style={{ width: '100%' }} onChange={handleChange}>
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
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
        </div>

        <br />
        <br />

        </div>


        <div>
          {loading ? (
            "Loading"
          ) : (
            <Table
              columns={columns}
              dataSource={state}
              pagination={{ pageSize: 50 }}
              scroll={{ y: 240 }}
            />
          )}
        </div>

      </div>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Resume Matching ©2022 Created by HKUST</Footer>
  </Layout>
)
}

export default SeekerFilterPage;
