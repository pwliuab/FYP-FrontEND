import './styles/Login.css'

function LoginPage(){
  return(
    <div style={{width:'500px', height:'700px'}}>
    <div class="LoginFormOutest" style={{height:'8%'}}>
      <div class="break" style={{width:'40%'}}></div>
      <div class="firstRow" style={{width:'60%',paddingBottom:'7px'}}>Log In</div>
      <div class="break" style={{width:'40%'}}></div>
    </div>
    <div class="LoginFormOutest" style={{height:'9%'}}>
      <div class="break" style={{width:'10%'}}></div>
      <div class="CandidateTab" style={{width:'40%'}}>Candidate</div>
      <div class="CompanyTab" style={{width:'40%'}}>Company</div>
      <div class="break" style={{width:'10%'}}></div>
    </div>
    <div class="LoginFormOutest"style={{height:'50%'}} >
      <div class="break" style={{width:'10%'}}></div>
      <div class='inputField' style={{height:'80%',width:'80%'}}>
        <form style={{opacity:1}}>
            <input style={{color:'#000000',fontSize:'20px',width:'400px', height:'70px',marginBottom:'10px' , borderRadius: '20px'}} id="userid" placeholder="Candidate Email" type="text"/>
            <br/>
            <input style={{opacity:1,color:'#000000',fontSize:'20px',width:'400px', height:'70px',marginTop:'10px', borderRadius: '20px'}}  id="password" placeholder="Password" type="text"/>
        </form>
      </div>
      <div class="break" style={{width:'10%'}}></div>
    </div>
    <div class="LoginFormOutest"style={{paddingTop:'30px',height:'20%'}} >
      <div class="break" style={{width:'30%'}}></div>
      <div class="LoginTab" style={{height:'50%',width:'40%'}}>Log in</div>
      <div class="break" style={{width:'30%'}}></div>
    </div>
    <div class="LoginFormOutest"style={{paddingTop:'8px',height:'16.555%'}} >
      <div class="break" style={{width:'30%'}}></div>
      <div class="SignUpTab" style={{height:'50%',width:'40%'}}>Sign Up</div>
      <div class="break" style={{width:'30%'}}></div>
    </div>
    </div>
  );
}




export default LoginPage;
