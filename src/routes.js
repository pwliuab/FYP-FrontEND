import Navbar from './components/testing';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import StartPage from './components/startPage';
import InputPage from './components/inputPage';
import CompanyPage from './components/companyPage';
import SeekerCenterPage from './components/SeekerCenterPage';
import CommunityPage from './components/CommunityPage';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Upload from './components/uploadPage';
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
    path:`${rootPath}/loginForm`,
    component: LoginForm,
    exact: true,
    breadcrumbName: 'LoginForm'
  },
  {
    path:`${rootPath}/registerForm`,
    component: RegisterForm,
    exact: true,
    breadcrumbName: 'RegisterForm'
  },
  {
    path:`${rootPath}/uploadPage`,
    component: Upload,
    exact: true,
    breadcrumbName: 'UploadPage'
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
  {
      path:`${rootPath}/inputPage`,
      component: InputPage,
      exact: true,
      breadcrumbName: 'InputPage'
  },
  {
      path:`${rootPath}/companyPage`,
      component: CompanyPage,
      exact: true,
      breadcrumbName: 'CompanyPage'
  },
  {
    path:`${rootPath}/seekerCenterPage`,
    component: SeekerCenterPage,
    exact: true,
    breadcrumbName: 'SeekerCenterPage'
  },
  {
    path:`${rootPath}/communityPage`,
    component: CommunityPage,
    exact: true,
    breadcrumbName: 'CommunityPage'
  },
];

export default routes;
export { rootPath };
