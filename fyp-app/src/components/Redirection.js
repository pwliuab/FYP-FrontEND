const rootPath = process.env.PUBLIC_URL;

const JBSeeker  = {
  type: 'job_seeker',
  centerPage: `${rootPath}/SeekerCenterPage`,
  communityPage: `${rootPath}/SeekerCommunityPage`,
  filterPage: `${rootPath}/SeekerFilterPage`
}

const PUBLIC_URL = {
  loginPage: `${rootPath}/`,
  RegistrationPage: `${rootPath}/RegistrationPage/`,
  multipleResultPage: `${rootPath}/JobAnalyResultPage`,
  singleResultPage: `${rootPath}/MatchAnalyPage`,
  inputPage: `${rootPath}/inputPage`,
  uploadPage: `${rootPath}/uploadPage`,
}
// const parameterList = {
//   RegistrationPage: { type: null },
//   multipleResultPage: {id: null},
//   singleResultPage: {email: }
// }
const HRrecruiter = {
  type: 'recruiter',
  centerPage: `${rootPath}/companyPage`,
  communityPage: `${rootPath}/communityPage`,
}

const getPublicURLPath = (path) => {
  for (let keyPath in PUBLIC_URL) {
    if (keyPath === path) return PUBLIC_URL[path];
  }
  return PUBLIC_URL.loginPage;
}

const getURLPath = (path, type) => {
  const PersonURLs = (type == HRrecruiter.type) ? HRrecruiter :
                 ( type == JBSeeker.type) ? JBSeeker : null;
  if (!PersonURLs) return PUBLIC_URL.loginPage;

  for (let keyPath in PersonURLs) {

    if (keyPath == path) return PersonURLs[path];
  }

  return getPublicURLPath(path);
}

const RedirectTo = (path, type, params="") => {
  let urlPath = getURLPath(path, type) + params;
  console.log('URL:' + urlPath);
  return urlPath;

}
export  { RedirectTo }
