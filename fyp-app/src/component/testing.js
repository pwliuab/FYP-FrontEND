import './styles/Navbar.css';
import userimage from './user_icon.png';

// userimage == the rightest most icon in the navigation bar
//<li> from top to the bottom in the code represents left to right in the page.
function Navbar(){
  return(
    <ul style={{height:'68px'}}>
    <li><a href="#news"><div>Match</div></a></li>
      <li><a className="active" href="#home">ResumeMatching</a></li>
      <li><a href="#news"><div>Match</div></a></li>
      <li><a href="#contact">Community</a></li>
      <li style={{float:'right', fontSize:'20px'}}><a href="#about">
      <b>User</b>
      <img src={userimage} alt="userIcon" width="40" height="38" style={{padding:'0', border:'none', borderInline:'none', textDecoration:'none'}}/>
      </a>
      </li>
    </ul>
  );
}




export default Navbar;
