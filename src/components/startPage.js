import './styles/Navbar.css';
import CircleGreenSVG from '../assets/circle.svg';
import CircleYellowSVG from '../assets/yellowCircle.svg';
import userimage from './user_icon.png';

function Start(){
  return(
    <div style={{display: 'flex', flexDirection:'column'}}>
      <div style={{flex:1,top:0 ,width:'100%'}}>
        <ul style={{height:'68px'}}>
            <li><a href="#news"><div>Match</div></a></li>
            <li><a className="active" href="#home">ResumeMatching</a></li>
            <li><a href="#news"><div>Match</div></a></li>
            <li><a href="#contact">Community</a></li>
            <li style={{float:'right', fontSize:'20px'}}><a href="#loginPage">
              login/Register
            </a>
            </li>
        </ul>
      </div>
      <div style={{position:'relative',left:1000, top: 180}}>
        <img src={CircleYellowSVG} style={{ height: 630, width: 720 }} alt="CircleSVG" />
      </div>
      <div style={{position:'relative', left:300, top: -450, fontWeight: '600'}}>
        <span style={{fontSize:80}}>
          Match Resume
        </span>
      </div>
      <div style={{position:'relative', left:300, top: -450, fontWeight: '600'}}>
        <span style={{fontSize:80}}>
          With Job
        </span>
      </div>
      <div style={{position:'relative', left:300, top: -450, fontWeight: '600'}}>
        <span style={{fontSize:80}}>
          Descriptions
        </span>
      </div>
      <div style={{position:'relative', left:300, top: -450, fontWeight: '600'}}>
        <span style={{fontSize:20}}>
          Get Yourself More job interviews, And get Access to the match Result
        </span>
      </div>
      <div style={{position:'relative', left:300, top: -450, fontWeight: '600'}}>
        <span style={{fontSize:20}}>
          of Resume and Job Description. Help with your Resume Rank and Score More.
        </span>
      </div>
    </div>
  );
}




export default Start;
