'use client'
import FormContainer from "@/Components/multiStepFrom/FormContainer";
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
        // else if(step in toggledSteps) {
        //   const temp = {...toggledSteps}
        //   delete temp[step]
        //   console.log('current step -------->',step)
        //   setToggledSteps(temp)
        // }
    },[step])
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center bg-regiration-img bg-cover bg-center">
        <FormContainer step={step} setStep={setStep} toggledSteps={toggledSteps} setToggledSteps={setToggledSteps} />
      </div>
    </>
  );
}
