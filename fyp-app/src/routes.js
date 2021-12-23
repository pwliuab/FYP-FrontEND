import Navbar from './component/testing';
import Login from './component/Login';
import LoginPage from './component/LoginPage'
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
];

export default routes;
export { rootPath };
