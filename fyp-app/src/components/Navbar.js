import './styles/Navbar.css';
import userimage from './user_icon.png';
import { NavLink, Link } from 'react-router-dom';
// userimage == the rightest most icon in the navigation bar
//<li> from top to the bottom in the code represents left to right in the page.
function Navbar({ type }){
  console.log(type);
  let root = process.env.PUBLIC_URL;
  return(
    <ul style={{height:'73px'}}>
      <li><NavLink to={`${root}/inputPage`}>ResumeMatching</NavLink></li>
      <li><NavLink to={`${root}/SeekerCommunityPage`}>Community</NavLink></li>
      <li><NavLink to={`${root}/SeekerFilterPage`}>Match</NavLink></li>
      <li><NavLink to={`${root}/SeekerCenterPage`}>Center</NavLink></li>
      <li style={{float:'right', fontSize:'20px'}}><Link to={`${root}/SeekerCenterPage`}>
      <b>User</b>
      <img src={userimage} alt="userIcon" width="40" height="38" style={{padding:'0', border:'none', borderInline:'none', textDecoration:'none'}}/>
      </Link>
      </li>
    </ul>
  );
}




export default Navbar;
