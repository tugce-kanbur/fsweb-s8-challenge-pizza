import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

function SizeSelector({ size, setSize }) {
    const handleChange = (event) => setSize(event.target.value);

    return (
        <FormControl>
            <FormLabel sx={{ fontWeight: 600, color: 'black', fontSize: '1rem', mb: 1 }}>
                Boyut Seç <span style={{ color: 'red' }}>*</span>
            </FormLabel>
            <RadioGroup value={size} onChange={handleChange}>
                <FormControlLabel value="Küçük" control={<Radio />} label="S" />
                <FormControlLabel value="Orta" control={<Radio />} label="M" />
                <FormControlLabel value="Büyük" control={<Radio />} label="L" />
            </RadioGroup>

        </FormControl>
    );
}

export default SizeSelector;
