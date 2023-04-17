import { React, useState ,useEffect } from "react";
import { usePostLoginMutation,usePostRegisterMutation } from "../store/api";

const Login = () => {
  

  const [isRegister,setIsRegister] = useState(false)
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("");

  const [triggerLogin,resultLogin] = usePostLoginMutation()
  const [triggerRegister] = usePostRegisterMutation()

  const handleLogin = () => {
    triggerLogin({username,password});
  }

  
  const handleRegister = () => {
    triggerRegister({ username, password });
  };

  useEffect(() => {
    if(resultLogin.data?.response){
      setUsername(username);
      setPassword(password);  
    }
  
    return () => {
      
    }
  }, [resultLogin.data]) //eslint-disable-line
  

  
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">ChatApp</h2>
        <p className="register-change" onClick={()=>setIsRegister(!isRegister)}>
          {isRegister?"Already a user ?":"Are you a new user?"}
        </p>
      </div>
      
    </div>
  );
};

export default Login;
