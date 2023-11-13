"use client";
import CircularProgressBarButton from "@/Components/Global/CircularProgressButton";
import { loginUser } from "@/service/user";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();
  const [credentials, setCrendtials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      console.log("payload ", credentials);
      const result = await loginUser(credentials);
      console.log("result", result);
      localStorage.setItem("e-auth-token",result?.access);
      router.push("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleOnChange = (e) => {
    setCrendtials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-[50%] flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-[50%] ">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleOnChange}
            placeholder="Enter your username"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleOnChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        {/* <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Login
          </button> */}
        <CircularProgressBarButton
          text={"Login"}
          isLoading={isLoading}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
