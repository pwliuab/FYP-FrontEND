import logo from './logo.svg';
import userimage from './user_icon.png';
import './App.css';
import './Navbar.css';
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Navbar(){
  return(
    <ul>
      <li><a className="active" href="#home">ResumeMatching</a></li>
      <li><a href="#news">Match</a></li>
      <li><a href="#contact">Community</a></li>
      <li style={{float:'right', fontSize:'20px'}}><a href="#about">
      <b>User</b>
      <img src={userimage} alt="userIcon" width="40" height="40"/>
      </a>
      </li>
    </ul>
  );
}

function App() {

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Welcome name="Paul"/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
