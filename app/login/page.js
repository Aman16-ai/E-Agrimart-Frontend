import CircularProgressBarButton from "@/Components/Global/CircularProgressButton";
import React from "react";
import LoginForm from "./Components/LoginForm";

export default function Login() {
  return (
    <div className="w-screen h-screen flex">
      <div className="relative overflow-hidden bg-hero-pattern bg-no-repeat bg-cover bg-center w-[50%] h-screen">
        <div
          className="absolute w-full h-full bottom-0 top-0 right-0 overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="flex flex-col h-full z-1 items-center justify-center">
            <h2 className="text-white text-6xl font-semibold">Welcome Back!</h2>
            <h3 className="text-white text-xl mt-1">
              Login into your E-Agrimart Account
            </h3>
          </div>
        </div>
      </div>
      <LoginForm/>
      
    </div>
  );
}
