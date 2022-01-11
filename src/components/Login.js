import './styles/Login.css'
import React, { useState, useEffect } from 'react';
function Login(props){
  const [activeCandidateBtn, setBtn] = useState(true);
  const [placeholderValue, setPlaceHolder] = useState('Candidate Email');
  const [candidateClassName, setCandidateClassName] = useState('ActiveTab');
  const [companyClassName, setCompanyClassName] = useState('InActiveTab');

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
      <div class="break" style={{width:'10%'}}></div>
      <div class='inputField' style={{height:'80%',width:'80%'}}>
        <form style={{opacity:1}}>
            <input style={{paddingLeft:10,color:'#000000',fontSize:'20px',
                    width:'400px', height:'70px',marginBottom:'10px' ,
                    borderRadius: '20px'
                  }} id="userid" placeholder={placeholderValue}type="text"/>
            <br/>
            <input style={{paddingLeft:10,opacity:1,color:'#000000',
                    fontSize:'20px',width:'400px', height:'70px',
                    marginTop:'10px', borderRadius: '20px'
                    }}  id="password" placeholder="Password" type="text"/>
        </form>
      </div>
      <div class="break" style={{width:'10%'}}></div>
    </div>
      <div class="LoginFormOutest"style={{paddingTop:'30px',height:'16%',left:100}} >
        <div class="break" style={{width:'20%'}}></div>
        <div class="LoginTab" style={{ height:'57%',width:'60%' }}>LOG IN</div>
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




export default Login;
