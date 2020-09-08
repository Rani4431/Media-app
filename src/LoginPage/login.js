import React,{Component} from 'react';
import './login.css'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
userName:[],
passWord:'',
error:''
        }
    }
    componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));

      if (localStorage.getItem('user')) {
          this.setState({
            userName: this.userData.name,
            passWord: this.userData.email,
          })
      } else {
          this.setState({
            userName: [],
            passWord: '',
          })
      }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
}

 


    handleSubmit=() =>{
    const {userName,passWord}=this.state
        if (!userName) {
          return this.setState({ error: 'Username is required' });
        }
    
        if (!passWord) {
          return this.setState({ error: 'Password is required' });
        }
        else{
          this.props.history.push({ pathname: "/mediapage" });
         
        }      }
    
    handleUserNameChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    handlePassWordChange=(e)=>{
        this.setState({
            passWord:e.target.value
        })
    }
    
    dismissError=()=> {
        this.setState({ error: '' });
      }
    
render(){
    const {userName,passWord,error}=this.state
    return(
        <div className="loginpage">
            <div className="login">
  <h1 className="header">Tune</h1>
  <form>
  {
            error &&
            <h3 className="errormsg" onClick={()=>this.dismissError}>
              <button onClick={()=>this.dismissError} className="errormsg">✖</button>
              {error}
            </h3>
          }

      <p className="text-header">Login As Existing User</p>
    <input type="text"  name="login" value={userName} placeholder="Username" onChange={(e)=>this.handleUserNameChange(e)}/>
    <input type="password"  name="password" value={passWord} placeholder="Password" onChange={(e)=>this.handlePassWordChange(e)}/>

    <p>  
    <button type="submit" className="signUpButton" >Sign Up</button>
    <button type="button" className="signInButton" onClick={()=>this.handleSubmit()}>Sign In</button></p>

   </form>
</div>





        </div>
    )
}

}
export default Login;