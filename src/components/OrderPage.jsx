import React from 'react';
import Header from './Header';
import SizeSelector from './SizeSelector';
import DoughSelector from './DoughSelector';
import ToppingsSelector from './ToppingsSelector';
import NoteInput from './NoteInput';

function OrderPage() {
    return (
        <div>
            <Header />
            <div
                style={{
                    maxWidth: '700px',
                    margin: '2rem auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <h2 style={{ fontSize: '20px', fontWeight: '600' }}>
                    Position Absolute Acı Pizza
                </h2>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                    85.50₺
                </p>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px',
                        flexWrap: 'wrap',
                    }}
                >
                    <SizeSelector />
                    <div>
                        <DoughSelector />
                    </div>
                </div>

                <ToppingsSelector />
                <NoteInput />
            </div>
        </div>
    );
}

export default OrderPage;