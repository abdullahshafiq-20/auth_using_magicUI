import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

import { Form, Link as RouterLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FormError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const FormValidate = (formObject) => {
    const errors = {};
    if (!formObject.email) {
      errors.email = "Email is required!";
    }
    if (!formObject.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(FormError).length === 0 && isSubmitting) {
      console.log("Form Submitted Successfully");
    }
  }, [FormError]);

  const loginHandler = (event) => {
    event.preventDefault();


    const formresponse={
      email: email,
      password: password,
    }





    console.log('Form Submitted', formresponse);  
    
  };
  return (
    <>
      <div className={styles.containerlogin}>
        {/* <div className={styles.page1}>
          <h1>Attendify.</h1>
          <p>
            Count your students In, <br />
            Not out.
          </p>
        </div> */}
        <div className={styles.page2}>
          <div className={styles.loginform}>
            <h2>Login to your account</h2>
            <p>Enter email below to login to your account</p>
            <div className={styles.difauth}>
              <button>
                Continue with Google
              </button>
            </div>
            <form onSubmit={loginHandler}>
              <div className={styles.inputfield}>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                <p className={styles.ErrorMessage}>{FormError.email}</p>
              </div>
              <div className={styles.inputfield}>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
                <p className={styles.ErrorMessage}>{FormError.password}</p>
              </div>
              {/* <div className={styles.LoadingButton}>
                <button>hello</button>
              </div> */}
              <div className={loading ? styles.LoadingButton : styles.submitbtn}>
                <button>Login{loading ? <Loader/>: ''}</button>
              </div>
            </form>

            <div className={styles.haveanAcount}>
              <p>
                Don't have an account? <RouterLink to="/signup">Signup</RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
