import "./AddEmployee.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const AddEmployee = ({ getToken }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.password.length >= 8) {
      axios
        .post(
          "http://localhost:8000/admin/add",
          input,
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": getToken,
            },
          }
        )
        .then((response) => {
          navigate("/admin/dashboard");
        });
    } else {
      alert("use 8 length for");
    }
  };
  return (
    <>
      <div className="add-employee">
        <h1>Add Employee</h1>
        <div className="addemp" style={{height:'400px',width:'700px',backgroundColor:'#99e7ff'}}>
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
          <button style={{backgroundColor:'#385663',color:'white'}}>Add Employee here</button>
        </form>
      </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
  };
};

export default connect(mapStateToProps, null)(AddEmployee);
