import Navbar from './component/testing';
import Login from './component/Login';
import LoginPage from './component/LoginPage';
import SeekerCenterPage from './component/SeekerCenterPage';
import CommunityPage from './component/CommunityPage';
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
    path:`${rootPath}/SeekerCenterPage`,
    component: SeekerCenterPage,
    exact: true,
    breadcrumbName: 'SeekerCenterPage'
  },
  {
    path:`${rootPath}/CommunityPage`,
    component: CommunityPage,
    exact: true,
    breadcrumbName: 'CommunityPage'
  },
];

export default routes;
export { rootPath };
