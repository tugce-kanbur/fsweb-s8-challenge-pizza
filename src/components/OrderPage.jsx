import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Header from './Header';
import NameInput from './NameInput';
import SizeSelector from './SizeSelector';
import DoughSelector from './DoughSelector';
import ToppingsSelector from './ToppingsSelector';
import NoteInput from './NoteInput';
import SubmitButton from './SubmitButton';
import IsimInput from './IsimInput';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function OrderPage({ setOrderData }) {
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [selected, setSelected] = useState([]);
    const [note, setNote] = useState('');
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const history = useHistory();

    const isFormValid = () => {
        return name.length >= 3 && size && dough && selected.length >= 3;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            alert('Lütfen tüm alanları doğru doldurun.');
            return;
        }

        const basePrice = 85.5;
        const extraPrice = 5;
        const extrasTotal = selected.length * extraPrice;
        const totalPrice = (basePrice + extrasTotal) * count;

        const siparis = {
            name,
            size,
            dough,
            extras: selected,
            note,
            count,
            extrasTotal,
            totalPrice
        };

        try {
            const response = await axios.post(
                "https://reqres.in/api/pizza",
                siparis,
                {
                    headers: {
                        "x-api-key": "reqres-free-v1"
                    }
                }
            );

            console.log("API yanıtı:", response.data);
            setOrderData(siparis);
            setTimeout(() => {
                history.push("/success");
            }, 100);
        } catch (error) {
            console.error("HATA: Sipariş gönderilemedi", error);
        }
    };

    return (
        <Box>
            <Header />
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        maxWidth: '500px',
                        mx: 'auto',
                        my: 4,
                        px: { xs: 2, sm: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                    }}
                >
                    <NameInput />


                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <SizeSelector size={size} setSize={setSize} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DoughSelector dough={dough} setDough={setDough} />
                        </Grid>
                    </Grid>

                    <ToppingsSelector selected={selected} setSelected={setSelected} />
                    <IsimInput name={name} setName={setName} />
                    <NoteInput note={note} setNote={setNote} />

                    <hr />

                    <SubmitButton selected={selected} count={count} setCount={setCount} />
                </Box>
            </form>
        </Box>
    );
}

export default OrderPage;
