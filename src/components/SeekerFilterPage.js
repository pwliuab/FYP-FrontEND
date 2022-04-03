import { Layout, Menu, Breadcrumb, Select, Table, Tag, Space } from 'antd';
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
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const SeekerFilterPage = () => (
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

              <Select mode="tags" size={'large'} style={{ width: '100%' }} placeholder="Job Title, Compony" onChange={handleChange}>
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
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
        </div>

        <br />
        <br />

        </div>


        <div>
        <Table columns={columns} dataSource={data}></Table>
        </div>

      </div>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Resume Matching ©2022 Created by HKUST</Footer>
  </Layout>
);

export default SeekerFilterPage;
