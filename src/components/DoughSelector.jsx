import React from 'react'
import { useState } from "react";
function DoughSelector() {
    const [dough, setDough] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setDough(event.target.value);
        if (event.target.value !== '') {
            setError(false);
        }
    };

    const handleBlur = () => {
        if (dough === '') {
            setError(true);
            alert("Lütfen bir hamur tipi seçin!");
            console.log("Hata: Hamur tipi seçilmedi.");
        }
    }
    return (
        <div className='form-control' required
            error={error}
            onBlur={handleBlur}>
            <h3>
                Hamur Seç <span style={{ color: "red" }}>*</span>
            </h3>
            <select value={dough} onChange={handleChange}>
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Normal">Normal</option>
                <option value="Kalın">Kalın</option>
            </select>
            {error && <ErrorText>Lütfen bir hamur tipi seçin</ErrorText>}
        </div>
    )
}

export default DoughSelector
