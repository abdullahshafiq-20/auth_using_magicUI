import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Otp = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const { email } = location.state || {};

  const otpHandler = (event) => {
    event.preventDefault();
    // console.log("Form Submitted", email);
    // console.log("Form Submitted", otp);

    const formresponse = {
      otp: otp,
      email: email,
    };

    const apiurl = "https://authapi-production-4e0d.up.railway.app/verifyOTP";

    try {
      fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formresponse),
      }).then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("Otp Verified");
        } else {
          console.log("Otp Verification Failed");
        }
      });
      
    } catch (error) {
      console.log("Otp Verification Failed");
      
    }



  };

  return (
    <>
      <div>otp</div>
      <form action="" onSubmit={otpHandler}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter otp sent to your mail"
        />
        <button>Submit</button>
      </form>

      <h1>{email}</h1>
    </>
  );
};
