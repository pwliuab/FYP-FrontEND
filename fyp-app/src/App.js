import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// function Navbar(){
//   return(
//     <ul style={{height:'73px'}}>
//       <li><a className="active" href="#home">ResumeMatching</a></li>
//       <li><a href="#news"><div>Match</div></a></li>
//       <li><a href="#contact">Community</a></li>
//       <li style={{float:'right', fontSize:'20px'}}><a href="#about">
//       <b>User</b>
//       <img src={userimage} alt="userIcon" width="40" height="38" style={{padding:'0', border:'none', borderInline:'none', textDecoration:'none'}}/>
//       </a>
//       </li>
//     </ul>
//   );
// }

function App() {

  return (
    <div style={{backgroundColor:'#E8F3EF'}}>
      {renderRoutes(routes)}
    </div>

  );
}

export default App;
