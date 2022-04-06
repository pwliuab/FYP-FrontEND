import './styles/Navbar.css';
import userimage from './user_icon.png';
import { NavLink, Link } from 'react-router-dom';
import { RedirectTo } from './Redirection';
// userimage == the rightest most icon in the navigation bar
//<li> from top to the bottom in the code represents left to right in the page.
function Navbar({ type }){
  console.log(type);
  let root = process.env.PUBLIC_URL;
  return(
    <ul style={{height:'73px'}}>
      <li><NavLink to={RedirectTo('inputPage', type)}>ResumeMatching</NavLink></li>
      <li><NavLink to={RedirectTo('communityPage', type)}>Community</NavLink></li>
      {
        RedirectTo('filterPage', type) == `${root}/` ? null : <li><NavLink to={RedirectTo('filterPage', type)}>Match</NavLink></li>
      }
      <li><NavLink to={RedirectTo('centerPage', type)}>Center</NavLink></li>
      <li style={{float:'right', fontSize:'20px'}}><Link to={RedirectTo('centerPage', type)}>
      <b>User</b>
      <img src={userimage} alt="userIcon" width="40" height="38" style={{padding:'0', border:'none', borderInline:'none', textDecoration:'none'}}/>
      </Link>
      </li>
    </ul>
  );
}




export default Navbar;
