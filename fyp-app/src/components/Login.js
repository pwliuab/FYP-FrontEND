import './styles/Login.css'
import React, { useState, useEffect } from 'react';
function Login(props){
  const [activeCandidateBtn, setBtn] = useState(true);
  const [placeholderValue, setPlaceHolder] = useState('Candidate Email');
  const [candidateClassName, setCandidateClassName] = useState('ActiveTab');
  const [companyClassName, setCompanyClassName] = useState('InActiveTab');
  const [email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
  	setEmail(e.target.value);
  	setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
  	setPassword(e.target.value);
  	setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
  	e.preventDefault();
  	if (email === '' || userPassword === '') {
  	setError(true);
    alert('please enter your information');
  	} else {
  	setSubmitted(true);
  	setError(false);
  	}
  };
    // Showing error message if error is true
    const renderErrorMessage = () => {
    	return (
    	<span style={{color: 'red', fontSize:34, }}
        className="error">
    		Please enter all the fields
    	</span>
    	);
    };
  useEffect(() => {
    // handlechange is a function passed by parent, the page who calls it. (check whether tab is clicked to switch mode)
    // candidateClassName, setCompanyClassName are the css changes when mode is switch
    if(activeCandidateBtn){
        setCandidateClassName('ActiveTab');
        setCompanyClassName('InActiveTab');
        setPlaceHolder('Candidate Email');
        props.handleChange(true);
    } else {
      setCandidateClassName('InActiveTab');
      setCompanyClassName('ActiveTab');
      setPlaceHolder('Company Email');
      props.handleChange(false);
    }

    if (!(email === '' || userPassword === '')) setError(false);
  });
  //
  return(
    <div style={{width:'800px', height:'800px', backgroundColor:'#E8F3EF', position:'relative', left:20}}>
      <div class="LoginFormOutest" style={{height:'8%'}}>
        <div class="break" style={{width:'40%'}}></div>
        <div class="firstRow"
        style={{fontWeight:'bold',
          fontSize:'48px',
          fontFamily: 'Mulish',
          width:'60%',
          paddingBottom:'7px',
          position:'relative',
          left:175, top:-20
        }}>
          LOG IN
        </div>
        <div class="break" style={{ width:'40%' }}></div>
      </div>
      <div class="LoginFormOutest" style={{ height:'9%',left:100 }}>
        <div class="break" style={{width:'10%'}}></div>
        <div class={candidateClassName} style={{ width:'40%',fontWeight:'bold' }}
         onClick={()=>{if(!activeCandidateBtn)setBtn(true) }}>
          Candidate
        </div>
        <div class={companyClassName} style={{ width:'40%',fontWeight:'bold', }}
         onClick={()=>{if(activeCandidateBtn)setBtn(false) }}>
          Company
         </div>
        <div class="break" style={{ width:'10%' }}></div>
      </div>
    <div class="LoginFormOutest"style={{height:'50%',left:100}} >
      <div class="break" style={{width:'10%'
    }}></div>
      <div class='inputField' style={{height:'80%',width:'80%'}}>

        <form style={{opacity:1}}>
        {
            (error) ?
            renderErrorMessage()
              :
            null
        }
            <br/>
            <input style={{paddingLeft:10,color:'#000000',fontSize:'20px',
                    width:'400px', height:'70px',marginBottom:'10px' ,
                    borderRadius: '20px'
                  }} id="userid" onChange={handleEmail} placeholder={placeholderValue}type="text"/>
            <br/>
            <input style={{paddingLeft:10,opacity:1,color:'#000000',
                    fontSize:'20px',width:'400px', height:'70px',
                    marginTop:'10px', borderRadius: '20px'
                  }}  id="password" onChange={handlePassword}  placeholder="Password" type="password"/>
        </form>
      </div>
      <div class="break" style={{width:'10%'}}></div>
    </div>
      <div class="LoginFormOutest"style={{paddingTop:'30px',height:'16%',left:100}} >
        <div class="break" style={{width:'20%'}}></div>
        <div class="LoginTab" style={{ height:'57%',width:'60%' }} onClick={handleSubmit}>LOG IN</div>
        <div class="break" style={{ width:'20%' }}></div>
      </div>
      <div class="LoginFormOutest"style={{ paddingTop:'0px',height:'14.555%',left:100 }} >
        <div class="break" style={{ width:'20%' }}></div>
        <div class="SignUpTab" style={{ height:'50%',width:'60%' }}>SIGN UP</div>
        <div class="break" style={{ width:'20%' }}></div>
      </div>
      <div style={{ position:'relative',fontSize:20, left: 380,
            fontWeight:'300', top :-20,height:'2.555%',
            fontFamily:'Mulish'
           }} >
          Forget Password?
      </div>
    </div>
  );
}




// export default Login;
//
// import './styles/Login.css'
// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'semantic-ui-react';
// import { useForm } from "react-hook-form";
// import './styles/loginForm.css'
// import './styles/registerForm.css'
//
// function Login(props){
//   const [activeCandidateBtn, setBtn] = useState(true);
//   const [placeholderValue, setPlaceHolder] = useState('Candidate Email');
//   const [candidateClassName, setCandidateClassName] = useState('ActiveTab');
//   const [companyClassName, setCompanyClassName] = useState('InActiveTab');
//
//
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//
//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
//
//   // Handling the name change
//   const handleName = (e) => {
//   	setName(e.target.value);
//   	setSubmitted(false);
//   };
//
//   // Handling the email change
//   const handleEmail = (e) => {
//   	setEmail(e.target.value);
//   	setSubmitted(false);
//   };
//
//   // Handling the password change
//   const handlePassword = (e) => {
//   	setPassword(e.target.value);
//   	setSubmitted(false);
//   };
//
//   // Handling the form submission
//   const handleSubmit = (e) => {
//   	e.preventDefault();
//   	if (name === '' || email === '' || password === '') {
//   	setError(true);
//   	} else {
//   	setSubmitted(true);
//   	setError(false);
//   	}
//   };
//
//   // Showing success message
//   const successMessage = () => {
//   	return (
//   	<div
//   		className="success"
//   		style={{
//   		display: submitted ? '' : 'none',
//   		}}>
//   		<h1>User {name} successfully registered!!</h1>
//   	</div>
//   	);
//   };
//
//   // Showing error message if error is true
//   const errorMessage = () => {
//   	return (
//   	<div
//   		className="error"
//   		style={{
//   		display: error ? '' : 'none',
//   		}}>
//   		<h1>Please enter all the fields</h1>
//   	</div>
//   	);
//   };
//
//   useEffect(() => {
//     if(activeCandidateBtn){
//         setCandidateClassName('ActiveTab');
//         setCompanyClassName('InActiveTab');
//         setPlaceHolder('Candidate Email');
//         props.handleChange(true);
//     } else {
//       setCandidateClassName('InActiveTab');
//       setCompanyClassName('ActiveTab');
//       setPlaceHolder('Company Email');
//       props.handleChange(false);
//     }
//   });
//
//   return(
//     <div style={{width:'800px', height:'800px', backgroundColor:'#E8F3EF', position:'relative', left:20}}>
//       <div class="LoginFormOutest" style={{height:'8%'}}>
//         <div class="break" style={{width:'40%'}}></div>
//         <div class="firstRow"
//         style={{fontWeight:'bold',
//           fontSize:'48px',
//           fontFamily: 'Mulish',
//           width:'60%',
//           paddingBottom:'7px',
//           position:'relative',
//           left:175, top:-20
//         }}>
//           LOG IN
//         </div>
//         <div class="break" style={{ width:'40%' }}></div>
//       </div>
//       <div class="LoginFormOutest" style={{ height:'9%',left:100 }}>
//         <div class="break" style={{width:'10%'}}></div>
//         <div class={candidateClassName} style={{ width:'40%',fontWeight:'bold' }}
//          onClick={()=>{if(!activeCandidateBtn)setBtn(true) }}>
//           Candidate
//         </div>
//         <div class={companyClassName} style={{ width:'40%',fontWeight:'bold', }}
//          onClick={()=>{if(activeCandidateBtn)setBtn(false) }}>
//           Company
//          </div>
//         <div class="break" style={{ width:'10%' }}></div>
//       </div>
//     <div class="LoginFormOutest"style={{height:'50%',left:100}} >
//       <div class="break" style={{width:'10%'}}></div>
//       <div class='inputField' style={{height:'80%',width:'80%'}}>
//       <div className="form">
//
//
//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>
//
//       <form style={{ paddingTop:-3000}}>
//         {/* Labels and inputs for form data */}
//
//         <label className="label" style={{ paddingTop:130 }}>Email</label>
//         <input onChange={handleEmail} className="input"
//         value={email} type="email" />
//
//         <label className="label">Password</label>
//         <input onChange={handlePassword} className="input"
//         value={password} type="password" />
//
//       </form>
//       </div>
//       </div>
//       <div class="break" style={{width:'10%'}}></div>
//     </div>
//       <div class="LoginFormOutest"style={{paddingTop:'30px',height:'16%',left:100}} >
//         <div class="break" style={{width:'20%'}}></div>
//         <div class="LoginTab" onClick={handleSubmit} style={{ height:'57%',width:'60%' }}>LOG IN</div>
//         <div class="break" style={{ width:'20%' }}></div>
//       </div>
//       <div class="LoginFormOutest"style={{ paddingTop:'0px',height:'14.555%',left:100 }} >
//         <div class="break" style={{ width:'20%' }}></div>
//         <a href="#LoginForm" class="SignUpTab" style={{ height:'50%',width:'60%' }} ><div>SIGN UP</div></a>
//         <div class="break" style={{ width:'20%' }}></div>
//       </div>
//       <div style={{ position:'relative',fontSize:20, left: 380,
//             fontWeight:'300', top :-20,height:'2.555%',
//             fontFamily:'Mulish'
//            }} >
//           Forget Password?
//       </div>
//     </div>
//   );
// }

export default Login;
