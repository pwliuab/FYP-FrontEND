import Navbar from './component/testing';
import LoginPage from './component/Login'
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
    component: LoginPage,
    exact: true,
    breadcrumbName: 'LoginPage'
  },
];

export default routes;
export { rootPath };
