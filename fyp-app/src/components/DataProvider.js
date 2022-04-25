let URL = "http://143.89.130.207:3000/web_api/";

let USER_API = 'users/';
let MATCHING_API = "matching/";
let JDS_API = "JDS/";
let VALIDATION_API = 'users/validation/validateAccount/validateAccount';

let JOB_POST_API  = "job_post/";
let CV_API = "cv_resume/"

let INFORMATION_API = "Information/";
let SAVING_API = "saving/";
let APPLICATION_API = "application/";
let MODEL_API = "modelMatching/"

// name
let USER = "USER";
let MATCHING = "MATCHING";
let JDS = "JDS";
let JOB_POST = "JOB_POST";
let CV = "CV";
let SAVING = "SAVING";
let APPLICATION = "APPLICATION";
let INFORMATION = "INFORMATION";

let MODEL = "MODEL"

// append URL
const getURL = (type) => {
  let url = URL;
  // path('job_post/from_user/<int:user_id>/<str:type>', views.JobPost.as_view()),
  // path('job_post/from_company/<str:org_id>/<str:type>', views.JobPost.as_view()),
  // path('job_post/all', views.JobPost.as_view()),
  // path('job_post/', views.JobPost.as_view()),
  // path('job_post/<int:JD_id>/<str:JD_type>', views.JobPost.as_view()),

  switch (type) {
    case USER:
      url += USER_API;
      break;
    case MATCHING:
      url += MATCHING_API;
      break;
    case JDS:
      url += JDS_API;
      break;
    case JOB_POST:
      url += JOB_POST_API;
      break;
    case CV:
      url += CV_API;
      break;
    case APPLICATION:
      url += APPLICATION_API;
      break;
    case SAVING:
      url += SAVING_API;
      break;
    case INFORMATION:
      url += INFORMATION_API;
      break;
    case MODEL:
      url += MODEL_API
      break;
  }

  return url;
}
// attach data or headers according to their action
const determineMethod = (action, data) => {
  let wrappedMethod = {};

  if (action == "PUT") {
    wrappedMethod.method = action;
    wrappedMethod.body = data;
    wrappedMethod.credentials = 'include';

  } else if (action == "GET") {
    wrappedMethod.method = action;
    wrappedMethod.credentials = 'include';

  } else if (action == "POST") {
    wrappedMethod.method = action;
    wrappedMethod.body = data;
    wrappedMethod.credentials = 'include';
  }

  return wrappedMethod;
}
// get response from server
const appendData = (dataList) => {
  let data = new FormData();
  for (let key in dataList) {
    data.append(key, dataList[key]);
  }
  return data;
}

const fetchData = async (type, action, data, params="") => {
  try {
    var url = getURL(type) + params;
    console.log(url);
    var method = determineMethod(action, data);

    var res = await fetch(url, method);
    var resData = await res.json();

    return (resData.result_code == 200)? Promise.resolve(resData) : Promise.reject(resData);
  } catch(e) {
    return Promise.reject(e);
  }

}

export { fetchData, getURL, appendData,  MATCHING, CV, INFORMATION_API, APPLICATION, INFORMATION, SAVING, JOB_POST, MODEL}
