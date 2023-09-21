import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import toast, { Toaster } from "react-hot-toast";

interface LoginInterface {
  email: string;
  password: string;
}
const Login = () => {
  const [loginFormData, setLoginFormData] = useState<LoginInterface>({
    email: "",
    password: "",
  });
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setLoginFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (name === "email") {
      setIsValidEmail(EmailValidator.validate(value));
    }
  };
  console.log(loginFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidEmail) {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(loginFormData);
        toast.success("Login successful!");
        setLoginFormData({
          email: "",
          password: "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Login Failed");
        setLoginFormData({
          email: "",
          password: "",
        });
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Invalid email format");
    }
  };
  return (
    <div className="login-container flex-col">
      <Toaster
        toastOptions={{
          success: {
            style: {
              color: "#fff",
              background: "green",
            },
          },
          error: {
            style: {
              color: "#fff",
              background: "red",
            },
          },
        }}
      />
      <h1>Furniture Store</h1>
      <form onSubmit={handleSubmit} className="form flex-col">
        <h2 className="login_title">Sign In</h2>
        <p>Welcome back to Furniture store</p>
        <div className="input-wrapper flex-col">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className={`form_input ${isValidEmail ? "" : "input-error"}`}
            name="email"
            placeholder="youremail@email.com"
            value={loginFormData.email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-wrapper flex-col">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="form_input"
            name="password"
            placeholder="password"
            value={loginFormData.password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className="primary-button" type="submit">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
