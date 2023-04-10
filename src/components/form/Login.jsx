import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Validation from
import validate from "../../function/FormValidation";

//Styles
import styles from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";

//Functions
import { notify } from "../../function/Function";

const Login = () => {
  //push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Homepage";
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("seccus");
      window.location.pathname = "/";
    } else {
      notify("error");
      setTouch({
        email: true,
        password: true,
      });
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className="w-full">
          <h2 className={styles.header}>Log In</h2>
          <div className={styles.formBox}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.email && touch.email
                  ? styles.unValidate
                  : styles.validate
              }
            />
            {errors.email && touch.email && <span>{errors.email}</span>}
          </div>
          <div className={styles.formBox}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.password && touch.password
                  ? styles.unValidate
                  : styles.validate
              }
            />
            {errors.password && touch.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div className={styles.formButtons}>
            <button>Log In</button>
            <Link to="/SignUp"> Sign Up</Link>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
