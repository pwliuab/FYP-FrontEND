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
import ForgetPassword from './components/forgetPage';
import UploadPage from './components/uploadPage';
import JobAnalyResultPage from './components/JobAnalyResultPage';
import MatchAnalyPage from './components/MatchAnalyPage';
import SeekerCommunityPage from './components/SeekerCommunityPage';
import SeekerFilterPage from './components/SeekerFilterPage';
import Test from './components/test';
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
    component: UploadPage,
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
  {
    path:`${rootPath}/JobAnalyResultPage`,
    component: JobAnalyResultPage,
    exact: true,
    breadcrumbName: 'JobAnalyResultPage'
  },
  {
    path:`${rootPath}/MatchAnalyPage`,
    component: MatchAnalyPage,
    exact: true,
    breadcrumbName: 'MatchAnalyPage'
  },
  {
    path:`${rootPath}/SeekerCommunityPage`,
    component: SeekerCommunityPage,
    exact: true,
    breadcrumbName: 'SeekerCommunityPage'
  },
  {
    path:`${rootPath}/SeekerFilterPage`,
    component: SeekerFilterPage,
    exact: true,
    breadcrumbName: 'SeekerFilterPage'
  },
  {
    path:`${rootPath}/forgetPassword`,
    component: ForgetPassword,
    exact: true,
    breadcrumbName: 'ForgetPassword'
  },
  {
    path:`${rootPath}/test`,
    component: Test,
    exact: true,
    breadcrumbName: 'Test'
  },
];

export default routes;
export { rootPath };
