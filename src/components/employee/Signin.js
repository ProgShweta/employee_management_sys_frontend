import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { setEmployee } from "../../redux/signin/signin.action";

const Signin = ({ setEmployee }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/employee/signin",
        input
      )
      .then((response) => {
        console.log(typeof response.data);
        setEmployee(response.data);
      })
      .then(() => {
        navigate("/employee/dashboard");
      });
  };
  return (
    <>
      <div>
        <h2>Employee Signin</h2>
        <form onSubmit={submitHandler}>
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
          <button style={{backgroundColor:'#385663',color:'white'}}>Signin Page</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmployee: (employee) => dispatch(setEmployee(employee)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
