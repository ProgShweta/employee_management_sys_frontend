import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <h1 className="title"> Welcome to Employee Management System</h1>
      <Link className="button" to="/admin">
        Admin 
      </Link>
      <Link className="button" to="/employee">
        Employee
      </Link>
    </>
  );
};

export default Homepage; 
