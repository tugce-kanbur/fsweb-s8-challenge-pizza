import React from 'react'
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function SizeSelector() {
    const [size, setSize] = useState("");

    const handleChange = (event) => {
        setSize(event.target.value);
    };
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: '600' }} >Boyut Seç <span style={{ color: "red" }}>*</span></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel
                    type="radio"
                    value="Küçük"
                    checked={size === "Küçük"}
                    onChange={handleChange}
                    control={<Radio />}
                    label="Küçük" />
                <FormControlLabel type="radio"
                    value="Orta"
                    checked={size === "Orta"}
                    onChange={handleChange} control={<Radio />} label="Orta" />
                <FormControlLabel type="radio"
                    value="Büyük"
                    checked={size === "Büyük"}
                    onChange={handleChange} control={<Radio />} label="Büyük" />
            </RadioGroup>

        </FormControl>
    )
}

export default SizeSelector
