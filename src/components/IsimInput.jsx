import React from "react";
import { Box, TextField, Typography } from "@mui/material";

function IsimInput({ name, setName }) {
    const isError = name.length > 0 && name.length < 3;

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                İsim
            </Typography>
            <TextField
                fullWidth
                placeholder="İsim Giriniz"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={isError}
                helperText={isError ? "İsim en az 3 karakter olmalıdır." : ""}
                inputProps={{ "data-cy": "nameInput" }}
            />
        </Box>
    );
}

export default IsimInput;


