import { updatePersonalDetails } from "@/store/slices/multistepFormSlice";
import { Stack, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
export default function PersonalDetails() {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    console.log("running ",e)
    dispatch(updatePersonalDetails({name:e.target.name,value:e.target.value}))
  }
  return (
    <>
      <div className="flex flex-col w-[30vw] h-[50vh]">
        <Stack direction={"row"}>
          <TextField
            variant="outlined"
            name="first_name"
            placeholder="First Name"
            onChange={inputHandler}
          />
          <TextField
            variant="outlined"
            style={{ marginLeft: "20px" }}
            name="last_name"
            placeholder="Last Name"
            onChange={inputHandler}
          />
        </Stack>
        <TextField
          variant="outlined"
          name="username"
          style={{ marginTop: "0.75rem" }}
          placeholder="Username"
          onChange={inputHandler}
        />
        <TextField
          variant="outlined"
          name="email"
          style={{ marginTop: "0.75rem" }}
          placeholder="Email"
          onChange={inputHandler}
        />
        <TextField
          variant="outlined"
          name="contact_no"
          inputProps={{ type: "number" }}
          style={{ marginTop: "0.75rem" }}
          placeholder="Contact No."
          onChange={inputHandler}
        />
        <TextField
          variant="outlined"
          name="password"
          style={{ marginTop: "0.75rem" }}
          placeholder="Password"
          onChange={inputHandler}
        />
      </div>
    </>
  );
}
