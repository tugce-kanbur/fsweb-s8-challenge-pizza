import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Header from './Header';
import NameInput from './NameInput';
import SizeSelector from './SizeSelector';
import DoughSelector from './DoughSelector';
import ToppingsSelector from './ToppingsSelector';
import NoteInput from './NoteInput';
import SubmitButton from './SubmitButton';

function OrderPage() {
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [selected, setSelected] = useState([]);
    const [note, setNote] = useState('');
    const [count, setCount] = useState(1);
    return (
        <Box>
            <Header />
            <Box
                sx={{
                    maxWidth: '500px',
                    mx: 'auto',
                    my: 4,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                }}
            >
                <NameInput />
                <Grid container spacing={10} alignItems="flex-start">

                    <Grid item xs={12} md={6}>
                        <Box sx={{ pr: { sm: 3 } }}>
                            <SizeSelector size={size} setSize={setSize} />
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Box sx={{ pl: { sm: 3 } }}>
                            <DoughSelector dough={dough} setDough={setDough} />
                        </Box>
                    </Grid>

                </Grid>
                <ToppingsSelector selected={selected} setSelected={setSelected} />
                <NoteInput note={note} setNote={setNote} />
                <hr />
                <SubmitButton selected={selected} count={count} setCount={setCount} />
            </Box>

        </Box>
    );
}

export default OrderPage;