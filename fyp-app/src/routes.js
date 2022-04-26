import Navbar from './components/testing';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import SeekerCenterPage from './components/SeekerCenterPage';
import CommunityPage from './components/CommunityPage';
import JobAnalyResultPage from './components/JobAnalyResultPage';
import MatchAnalyPage from './components/MatchAnalyPage';
import StartPage from './components/StartPage';
import SeekerFilterPage from './components/SeekerFilterPage';
import SeekerCommunityPage from './components/SeekerCommunityPage';
import InputPage from './components/inputPage';
import CompanyPage from './components/companyPage'
import RegistrationForm from './components/RegistrationForm'
import UploadPage from './components/uploadPage';

const rootPath = process.env.PUBLIC_URL;
const routes = [
  {
    path:`${rootPath}/hi`,
    component: Navbar,
    exact: true,
    breadcrumbName: 'Navbar'
  },
  {
    path:`${rootPath}/`,
    component: LoginPage,
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
    path:`${rootPath}/inputPage/:jd_id`,
    component: InputPage,
    exact: true,
    breadcrumbName: 'inputPage'
  },
  {
    path:`${rootPath}/inputPage/apply/:jd_id`,
    component: InputPage,
    exact: true,
    breadcrumbName: 'inputPage'
  },
  {
    path:`${rootPath}/RegistrationPage/:type`,
    component: RegistrationForm,
    exact: true,
    breadcrumbName: 'RegistrationPage'
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
  {
    path:`${rootPath}/SeekerCommunityPage/:conditions`,
    component: SeekerCommunityPage,
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
    path:`${rootPath}/MatchAnalyPage/:score1/:score2/:keys`,
    component: MatchAnalyPage,
    exact: true,
    breadcrumbName: 'MatchAnalyPage'
  },
  {
    path:`${rootPath}/startPage`,
    component: StartPage,
    exact: true,
    breadcrumbName: 'StartPage'
  },
  {
    path:`${rootPath}/SeekerFilterPage`,
    component: SeekerFilterPage,
    exact: true,
    breadcrumbName: 'SeekerFilterPage'
  },
  {
    path:`${rootPath}/SeekerCommunityPage`,
    component: SeekerCommunityPage,
    exact: true,
    breadcrumbName: 'SeekerCommunityPage'
  },
  {
    path:`${rootPath}/inputPage`,
    component: InputPage,
    exact: true,
    breadcrumbName: 'InputPage'
  },
  {
    path:`${rootPath}/UploadPage`,
    component: UploadPage,
    exact: true,
    breadcrumbName: 'UploadPage'
  },
  {
    path:`${rootPath}/communityPage`,
    component: CommunityPage,
    exact: true,
    breadcrumbName: 'CommunityPage'
    },
  {
  path:`${rootPath}/CompanyPage`,
  component: CompanyPage,
  exact: true,
  breadcrumbName: 'CommunityPage'
  },
];

export default routes;
export { rootPath };
