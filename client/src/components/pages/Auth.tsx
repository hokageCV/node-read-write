import React, { useState } from "react";
import FormField from "../layouts/FormField";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import { SERVER_URL } from "../../constants";
import { usePostsStore } from "../../hooks/usePostsStore";

interface AuthProps {
  name?: string;
  email: string;
  password: string;
}

const initialFormFieldData = { name: "", email: "", password: "" };

export default function Auth() {
  const [formData, setFormData] = useState(initialFormFieldData);
  const navigate = useNavigate();

  const userData = useAuthStore((state) => state.userData);
  const setUserData = useAuthStore((state) => state.setUserData);

  const [isSignUp, setIsSignUp] = useState(false);
  const toggleIsSignUp = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

  async function signUp({ name, email, password }: AuthProps) {
    try {
      const response = await fetch(`${SERVER_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const createdUser = await response.json();

      setUserData(createdUser.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function signIn({ email, password }: AuthProps) {
    try {
      const response = await fetch(`${SERVER_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const signedInUser = await response.json();
      console.log("🚀 ⚡ file: Auth.tsx:53 ⚡ signIn ⚡ signedInUser:", signedInUser);

      setUserData(signedInUser.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { name, email, password } = formData;

    if (isSignUp) await signIn({ email, password });
    else await signUp({ name, email, password });

    navigate("/write", { replace: true });
  };

  return (
    <div className="flex justify-center content-center items-center flex-col w-8/12 mx-auto mt-10">
      <form
        className="flex justify-center content-center items-center flex-col w-8/12 mx-auto mt-10"
        onSubmit={handleSubmit}
      >
        {!isSignUp && (
          <FormField
            label="Name"
            type="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        )}
        <FormField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          placeholder="password?"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="btn bg-[#B48EAD] hover:bg-[#a4768c] text-slate-900 w-max max-w-xs mt-4">
          Submit
        </button>
      </form>
      <button
        className="btn btn-sm bg-baseBG hover:bg-baseBG mt-5 text-slate-900 "
        onClick={toggleIsSignUp}
      >
        {!isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}
