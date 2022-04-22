
const JBSeekerType = "job_seeker";
const HRrecruiterType = "recruiter";
const USER_EMAIL_COOKIE = "user_email"; // for legal uesr validation
const USER_ID_COOKIE = "user_id"; // for data fetching
const USER_TYPE_COOKIE = "user_type";
const USER_ORG_COOKIE = "org_id";
// labels = {'hr':0,
//           'designer':1,
//           'information-technology':2,
//           'teacher':3,
//           'business-development':4,
//           'healthcare':5,
//           'sales':6,
//           'consultant':7,
//           'finance':8,
//           'engineering':9,
//           'accountant':10,
//           'public-relations':11,
//           'arts':12
//           }
const JOB_CHOICE = {
  salary: ["10k - 20k", "20k - 30k", "30k - 40k", ">50k"],
  location: ["Hong kong", "Mainland China", "Singapore", "Japan", "America"],
  nature: ["information-technology", 'hr', 'designer', 'teacher', 'business-development', 'healthcare', 'sales', 'consultant', 'finance',
  'engineering', 'accountant', 'public-relations', 'arts'],
  type: ['part-time', 'full-time', 'intern'],
  qualification: ['Undergrad', 'Postgrad']
}



export { JBSeekerType, HRrecruiterType, USER_EMAIL_COOKIE, USER_ID_COOKIE, USER_TYPE_COOKIE, JOB_CHOICE, USER_ORG_COOKIE}
