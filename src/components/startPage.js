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
      <div style={{position:'relative',left:950, top: 120}}>
        <img src={CircleYellowSVG} style={{ height: 595, width: 680 }} alt="CircleSVG" />
      </div>
      <div style={{position:'relative', left:210, top: -450, fontWeight: '620'}}>
        <span style={{fontSize:80}}>
          Match Resume
        </span>
      </div>
      <div style={{position:'relative', left:210, top: -450, fontWeight: '620'}}>
        <span style={{fontSize:80}}>
          With Job
        </span>
      </div>
      <div style={{position:'relative', left:210, top: -450, fontWeight: '620'}}>
        <span style={{fontSize:80}}>
          Descriptions
        </span>
      </div>
      <div style={{position:'relative', left:210, top: -420, fontWeight: '600'}}>
        <span style={{fontSize:20}}>
          Get Yourself More job interviews, And get Access to the match Result
        </span>
      </div>
      <div style={{position:'relative', left:210, top: -420, fontWeight: '600'}}>
        <span style={{fontSize:20}}>
          of Resume and Job Description. Help with your Resume Rank and Score More.
        </span>
      </div>
      <div style={{position:'relative', left:210, top: -400, fontWeight: '600'}}>
        <span style={{fontSize:20, fontStyle:'italic', textDecoration:'underline'}}><a href="#loginPage">
          Start your journey now.</a>
        </span>
      </div>
    </div>
  );
}

export default Start;
