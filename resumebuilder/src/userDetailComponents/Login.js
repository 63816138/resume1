import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () =>  {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [login,setlogin]=useState("/login");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if(formData.username==="Mugesh129" && formData.password==="1234"){
      setlogin("/home");
    }
    else{
      setlogin("/login");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <div style={styles.formGroup}>
        <label htmlFor="username" style={styles.label}>
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={{alignItems:"center",justifyContent:"center"}}>
        <Link onClick={handleLogin} to={login}>
          Login
        </Link>
        <Link  to="/signup/personalinfo">
            Sign Up
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  linkContainer: {
    marginTop: "15px",
    textAlign: "center",
  },
  link: {
    margin: "0 10px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Login;