import React, { useEffect } from "react";
import StepIndicator from "../StepIndicator";
import { Button } from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import CropsAndSoilDetails from "./cropsAndSoilDetails";
import { selectFormState, selectToken } from "@/store/slices/multistepFormSlice";
import { useDispatch, useSelector } from "react-redux";
import {selectUserState } from "@/store/slices/loginSlice";
import { registerUserThunk } from "@/store/slices/multistepFormSlice";
import { useRouter } from "next/navigation";
import { selectIsAuthenticated } from "@/store/slices/UserSlice";
const stepsName = {
  1: "Personal Details",
  2: "Address",
  3: "Soil and Crops Details",
};
export default function FormContainer({
  step,
  setStep,
  toggledSteps,
  setToggledSteps,
}) {
  const router = useRouter()
  const formData = useSelector(selectFormState)
  // const {token,isAuthenticated} = useSelector(selectUserState)
  const token = useSelector(selectToken)

  const dispatch = useDispatch()
  const getStepComponent = () => {
    if(step === 1) {
      return <PersonalDetails/>
    }
    else if(step === 2) {
      return <AddressDetails/>
    }
    else {
      return <CropsAndSoilDetails/>
    }
  }

  useEffect(()=> {
    if(token !== null && token !== undefined && token !== '' && token !== ' ') {
      localStorage.setItem('e-auth-token',token)
      router.push("/")
      window.location.reload()
    }
  },[token])
  const handleFormSubmit = (e) => {
    console.log('form data ----->',formData)
    const data = {...formData}
    delete data['token']
    const payload = {...data,userProfile : {...data.userProfile,"user_type":"Farmer"}}
    console.log("payloadData : " ,payload)
    dispatch(registerUserThunk(payload))
  }
  return (
  
      <div className="w-2/5 h-[auto] shadow-2xl rounded-2xl bg-white flex flex-col items-center">
        <h4 className="text-2xl font-semibold mt-2">{stepsName[step]}</h4>
        <div className="w-full h-[50px] mt-5 flex justify-evenly">
          <StepIndicator stepNo={1} isToggle={step === 1 || toggledSteps[1]} />
          <StepIndicator stepNo={2} isToggle={step === 2 || toggledSteps[2]} />
          <StepIndicator stepNo={3} isToggle={step === 3 || toggledSteps[3]} />
        </div>
        <div className="flex flex-col justify-center mt-7">
          {getStepComponent()}
        </div>
        <div className="w-[77%] h-[auto] mt-7 justify-between flex mb-7">
          <Button
            variant="text"
            onClick={(e) => {
              const temp = {...toggledSteps}
              delete temp[step]
              setToggledSteps(temp)
              setStep((prev) => prev - 1)
            }}
            className={`w-[120px] h-[50px] font-semibold ${
              step === 1 ? "hidden" : "relative"
            }`}
          >
            Back
          </Button>
          {step < 3 ?<Button
            variant="contained"
            onClick={(e) => setStep((prev) => prev + 1)}
            className="bg-btn-secondary w-[120px] h-[50px]"
          >
            Next
          </Button> :<Button
            variant="contained"
            onClick={handleFormSubmit}
            className="bg-btn-secondary w-[120px] h-[50px]"
          >
            Submit
          </Button> }
        </div>
      </div>

  );
}
