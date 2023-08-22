import React from "react";
import StepIndicator from "../StepIndicator";
import { Button } from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import CropsAndSoilDetails from "./cropsAndSoilDetails";
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
  return (
    <>
      <div className="w-2/5 h-[auto] shadow-2xl rounded-2xl bg-white flex flex-col items-center">
        <h4 className="text-2xl font-semibold mt-2">{stepsName[step]}</h4>
        <div className="w-full h-[50px] mt-5 flex justify-evenly">
          <StepIndicator stepNo={1} isToggle={step === 1 || toggledSteps[1]} />
          <StepIndicator stepNo={2} isToggle={step === 2 || toggledSteps[2]} />
          <StepIndicator stepNo={3} isToggle={step === 3 || toggledSteps[3]} />
        </div>
        <div className="flex flex-col justify-center mt-7">
          {step === 1 ? (
            <PersonalDetails />
          ) : step === 2 ? (
            <AddressDetails />
          ) : step === 3 ? (
            <CropsAndSoilDetails />
          ) : null}
        </div>
        <div className="w-[77%] h-[auto] justify-between flex mb-7">
          <Button
            variant="text"
            onClick={(e) => setStep((prev) => prev - 1)}
            className={`w-[120px] h-[50px] font-semibold ${
              step === 1 ? "hidden" : "relative"
            }`}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={(e) => setStep((prev) => prev + 1)}
            className="bg-btn-secondary w-[120px] h-[50px]"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
