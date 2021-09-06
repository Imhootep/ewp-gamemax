
import React, {useState} from 'react';
import logo from './img/logo2.png';
import controller from './img/gamepad.png'
import LoginForm from './components/LoginForm';



function App() {

    const adminUser ={
      email:"fb@admin.com",
      password:"test"
    }

    const [user, setUser] = useState ({name:"", email:""});
    const [error, setError]= useState("");

    const Login = details => {
      console.log(details);

      if(details.email === adminUser.email && details.password === adminUser.password){
        console.log("Logged in")
        setUser({
          email:details.email,
          password:details.password
        })
      } else {
        console.log("Details do not match")
        setError("Email ou Mot de passe incorrect" )
      }
    }

    const Logout =()=>{
      setUser({name:"", email:""});
    }

  return (
    <div className="App">
      {(user.email !=="") ?(
          <div className="welcome">
            <h2>Welcome, <span>{user.email}</span> </h2>
            <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <header className="App-header">
        <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />

        <img src={controller} className="App-controller" alt="controller" />
        </div>
          <LoginForm Login={Login} error={error}/>
        <div className="App-controller2">
        <img src={controller} alt="controller" />
        </div>
          </header>
      )}
      

        </div>
       
  );
}

export default App;
