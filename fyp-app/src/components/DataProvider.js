let URL = "http://143.89.130.207:3000/web_api/";

let USER_API = 'users/';
let MATCHING_API = "matching/";
let JDS_API = "JDS/";
let VALIDATION_API = 'users/validation/validateAccount/validateAccount';

let USER = "USER";
let MATCHING = "MATCHING";
let JDS = "JDS";
// append URL
const getURL = (type) => {
  let url = URL;
  switch(type) {
    case USER:
      url += USER_API;
      break;
    case MATCHING:
      url += MATCHING_API;
      break;
    case JDS:
      url += JDS_API;
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
  } else if (action == "GET") {
    wrappedMethod.method = action;
  } else if (action == "POST") {
    wrappedMethod.method = action;
    wrappedMethod.body = data;
  }

  return wrappedMethod;
}
// get response from server
const fetchData = async (type, action, data) => {
  try {
    var url = getURL(type);
    var method = determineMethod(action, data);

    var res = await fetch(url, method);
    var resData = await res.json();

    return (resData.result_code == 200)? Promise.resolve(resData) : Promise.reject(resData);
  } catch(e) {
    return Promise.reject(e);
  }

}

export { fetchData }
