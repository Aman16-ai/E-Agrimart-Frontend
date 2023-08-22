'use client'

import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { getAllCrops } from "@/service/crops";
import { TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, crops, theme) {
  return {
    fontWeight:
      crops.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CropsAndSoilDetails() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [crops, setCrops] = useState([]);
  const [crop, setCrop] = useState([]);
  const getCrops = async () => {
    try {
      const data = await getAllCrops();
      setCrops(data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getCrops();
  }, []);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCrop(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <><div className="flex flex-col">
      <FormControl sx={{ m: 1}}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={crop}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {crops.map((c) => (
            <MenuItem
              key={c.name}
              value={c.id}
              style={getStyles(c.name, crops, theme)}
            >
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField inputProps={{type:'number'}} placeholder="Soil Nitrogen"/>
      <TextField inputProps={{type:'number'}} placeholder="Soil Phosphorus"/>
      <TextField inputProps={{type:'number'}} placeholder="Soil Postassium"/>
      <TextField inputProps={{type:'number'}} placeholder="Soil PH"/>
      <TextField inputProps={{type:'number'}} placeholder="Soil Moisture"/>
    </div>
    </>
  );
}
