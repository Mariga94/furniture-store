import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import toast, { Toaster } from "react-hot-toast";

interface RegisterInterface {
  email: string;
  password: string;
}
const Register = () => {
  const [formData, setFormData] = useState<RegisterInterface>({
    email: "",
    password: "",
  });
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (name === "email") {
      setIsValidEmail(EmailValidator.validate(value));
    }
  };
  console.log(formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidEmail) {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(formData);
        toast.success("Registration successful!");
        setFormData({
          email: "",
          password: "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Registration Failed");
        setFormData({
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
        <h2 className="login_title">Sign Up</h2>
        <p>Welcome to Furniture store</p>
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
            value={formData.email}
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
            value={formData.password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className="primary-button" type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
