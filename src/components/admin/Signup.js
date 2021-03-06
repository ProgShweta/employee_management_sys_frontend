import { useState } from "react";

import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.password.length >= 8) {
      axios
        .post(
          "http://localhost:8000/admin/signup",
          input
        )
        .then((response) => setAlert(response.data));
    } else {
      setAlert("Password length must be 8 characters");
    }
  };
  return (
    <>
      <div>
        <h2 >Admin Signup</h2>
        <div className="signup" style={{height:'400px',width:'700px',backgroundColor:'#99e7ff'}}>
        <form onSubmit={submitHandler}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={inputHandler}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={inputHandler}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={inputHandler}
          />
          <button style={{backgroundColor:'#385663',color:'white'}}>Signup</button>
          {alert && (
            <div className="alert-message">
              <p>{alert}</p>
              <p>
                <span
                  onClick={() => setAlert("")}
                  style={{ cursor: "pointer" }}
                >
                  &#10005;
                </span>
              </p>
            </div>
          )}
        </form>
        </div>
      </div>
    </>
    
  );
};

export default Signup;
