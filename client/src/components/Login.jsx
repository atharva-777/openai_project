import { React, useState } from "react";

const Login = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const [uname, setuname] = useState("");
  const [pass, setpass] = useState("");

  const db = [
    {
      username: "atharva",
      password: "123",
    },
    {
      username: "jack",
      password: "1234",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    var data = {
      name: uname,
      pass: pass,
    };

    const userData = db.find((user) => user.username === data.name);

    if (userData) {
      if (userData.password !== data.pass) {
        console.log("wrong password");
      } else {
        setSubmitted(true);
      }
    } else {
      console.log("wrong username");
    }
  };

  const renderForm = (
    <div className="form">
      <form>
        <div className="input">
          <label>Username</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setuname(event.target.value);
            }}
            required
          />
        </div>

        <div className="input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpass(event.target.value);
            }}
            required
          />
        </div>
        <div className="button">
          <button onClick={(event) => handleSubmit(event)}>Submit</button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <div className="login-form">
        <div>Sign In</div>
        {isSubmitted ? <div>Successfully signed in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
