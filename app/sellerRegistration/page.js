'use client'
import StepIndicator from "@/Components/StepIndicator";
import PersonalDetails from "@/Components/multiStepFrom/PersonalDetails";
import { Button } from "@mui/material";
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
        <div className="w-2/5 h-[auto] shadow-2xl rounded-2xl bg-white flex flex-col items-center">
            <h4 className="text-2xl font-semibold mt-2" >{stepsName[step]}</h4>
            <div className="w-full h-[50px] mt-5 flex justify-evenly">
                <StepIndicator stepNo={1} isToggle={step === 1 || toggledSteps[1]}/>
                <StepIndicator stepNo={2} isToggle={step === 2 || toggledSteps[2]}/>
                <StepIndicator stepNo={3} isToggle={step === 3 || toggledSteps[3]}/>
            </div>
            <div className="flex flex-col justify-center mt-7">
              <PersonalDetails/>
            </div>
            <div className="w-[77%] h-[auto] justify-between flex mb-7">
                <Button variant="text" className={`w-[120px] h-[50px] font-semibold ${step === 1 ? 'hidden' :"relative"}`}>Back</Button>
                <Button variant="contained" onClick={e => setStep(prev => prev+1)} className="bg-btn-secondary w-[120px] h-[50px]">Next</Button>
            </div>
        </div>
      </div>
    </>
  );
}