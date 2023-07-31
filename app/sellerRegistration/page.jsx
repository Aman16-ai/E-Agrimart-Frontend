'use client'
import StepIndicator from "@/Components/StepIndicator";
import React, { useEffect } from "react";
import { useState } from "react";
const stepsName = {1 : 'Personal Details', 2 : 'Address', 3 : "Soil and Crops Details"}
export default function SellerRegistration() {
    const [step,setStep] = useState(1); 
    const [toggledSteps,setToggledSteps] = useState({})

    useEffect(()=> {
        if(!(step in toggledSteps)) {
            setToggledSteps({...toggledSteps,[step]:true})
        }
    },[step])
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center bg-regiration-img bg-cover bg-center">
        <div className="w-2/5 h-3/4 shadow-2xl rounded-2xl bg-white flex flex-col items-center">
            <h4 className="text-2xl font-semibold mt-2" >{stepsName[step]}</h4>
            <div className="w-full h-[50px] mt-2 flex justify-evenly">
                <StepIndicator stepNo={1} isToggle={step === 1 || toggledSteps[1]}/>
                <StepIndicator stepNo={2} isToggle={step === 2 || toggledSteps[2]}/>
                <StepIndicator stepNo={3} isToggle={step === 3 || toggledSteps[3]}/>
            </div>
        </div>
      </div>
    </>
  );
}
