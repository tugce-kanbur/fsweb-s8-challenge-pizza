import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Paper,
    Grid
} from '@mui/material';

function SuccessPage({ orderData }) {
    if (!orderData) {
        return <Typography>Hata: Sipariş verisi bulunamadı</Typography>;
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '1080px',
                maxWidth: '1920px',
                margin: '0 auto',
                backgroundColor: '#CE2829',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 8,
                px: 2,
            }}
        >
            <Typography variant="h4" fontWeight={700}>
                Teknolojik Yemekler
            </Typography>

            <Typography
                variant="h6"
                sx={{ mt: 1, fontFamily: 'Satisfy', fontStyle: 'italic', color: '#FDC913' }}
            >
                lezzetin yolda
            </Typography>

            <Typography variant="h3" sx={{
                width: '586.67px',
                height: '195px',
                mt: '176.46px',
                ml: 'auto',
                mr: 'auto',
                fontFamily: 'Roboto Condensed',
                fontWeight: 300,
                fontSize: '86px',
                lineHeight: '92px',
                letterSpacing: '1.5px',
                textAlign: 'center',
                textTransform: 'uppercase',
            }}>
                SİPARİŞ ALINDI
            </Typography>

            <Divider sx={{ maxWidth: 300, margin: '1rem auto', backgroundColor: 'white' }} />

            <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 3 }}>
                Position Absolute Acı Pizza
            </Typography>

            <Typography sx={{ mt: 1 }}>
                <strong>Boyut:</strong> {orderData.size}
            </Typography>

            <Typography>
                <strong>Hamur:</strong> {orderData.dough}
            </Typography>

            <Typography sx={{ mt: 1 }}>
                <strong>Ek Malzemeler:</strong>{' '}
                {orderData.extras && orderData.extras.length > 0
                    ? orderData.extras.join(', ')
                    : 'Yok'}
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    maxWidth: 300,
                    mx: 'auto',
                    mt: 4,
                    p: 3,
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: 2,
                }}
            >
                <Typography fontWeight={700} sx={{ mb: 2 }}>
                    Sipariş Toplamı
                </Typography>

                <Grid container justifyContent="space-between">
                    <Typography>Seçimler</Typography>
                    <Typography fontWeight={700}>{orderData.extrasTotal.toFixed(2)}₺</Typography>
                </Grid>

                <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                    <Typography>Toplam</Typography>
                    <Typography fontWeight={700}>{orderData.totalPrice.toFixed(2)}₺</Typography>
                </Grid>
            </Paper>
        </Box>
    );
}

export default SuccessPage;
