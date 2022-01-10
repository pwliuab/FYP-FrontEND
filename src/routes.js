import Navbar from './components/testing';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import StartPage from './components/startPage';
// import SeekerCenterPage from './component/SeekerCenterPage';
// import CommunityPage from './component/CommunityPage';
const rootPath = process.env.PUBLIC_URL;
const routes = [

  {
    path:`${rootPath}/hi`,
    component: Navbar,
    exact: true,
    breadcrumbName: 'Navbar'
  },
  {
    path:`${rootPath}/login`,
    component: Login,
    exact: true,
    breadcrumbName: 'LoginPage'
  },
  {
    path:`${rootPath}/loginPage`,
    component: LoginPage,
    exact: true,
    breadcrumbName: 'LoginPage'
  },
  {
      path:`${rootPath}/startPage`,
      component: StartPage,
      exact: true,
      breadcrumbName: 'StartPage'
    },
  // {
  //   path:`${rootPath}/SeekerCenterPage`,
  //   component: SeekerCenterPage,
  //   exact: true,
  //   breadcrumbName: 'SeekerCenterPage'
  // },
  // {
  //   path:`${rootPath}/CommunityPage`,
  //   component: CommunityPage,
  //   exact: true,
  //   breadcrumbName: 'CommunityPage'
  // },
];

export default routes;
export { rootPath };
