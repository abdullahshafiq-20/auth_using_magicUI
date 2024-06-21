import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

import { Form, Link as RouterLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      console.log("Please fill all the fields");
      // navigate("/otpverification');
      return;
    }
    const formresponse = {
      user_name: username,
      email: email,
      password: password,
    };
    sendSignupReq(formresponse);

    console.log("Form Submitted", formresponse);
  };

  const sendSignupReq = async (formresponse) => {
    const apiurl = "https://authapi-production-4e0d.up.railway.app/signup";
    try {
      setLoading(true);
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formresponse),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setLoading(false);
        console.log("Signup Successfull");
        navigate("/otpverification" ,{ state: { email: email } });
      } else {
        setLoading(false);
        console.log("Signup Failed");
      }
    } catch (error) {
      setLoading(false);
      console.log("Signup Failed");
    }
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
            <h2>Welcome! test auth API</h2>
            <p>Sign up to test auth api.</p>
            <div className={styles.difauth}>
              <button>Continue with Google</button>
            </div>
            <form onSubmit={loginHandler}>
              <div className={styles.inputfield}>
                <p>Username</p>
                <input
                  type="text"
                  placeholder="abdullahshafiq"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                {/* <p className={styles.ErrorMessage}>{FormError.email}</p> */}
              </div>
              <div className={styles.inputfield}>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <p className={styles.ErrorMessage}>{FormError.email}</p> */}
              </div>
              <div className={styles.inputfield}>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <p className={styles.ErrorMessage}>{FormError.password}</p> */}
              </div>
              {/* <div className={styles.LoadingButton}>
                <button>hello</button>
              </div> */}
              <div
                className={loading ? styles.LoadingButton : styles.submitbtn}
              >
                <button>Signup{loading ? <Loader /> : ""}</button>
              </div>
            </form>

            <div className={styles.haveanAcount}>
              <p>
                Already have an account? <RouterLink to="/">Login</RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
