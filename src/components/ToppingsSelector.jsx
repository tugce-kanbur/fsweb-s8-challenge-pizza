import React from 'react'
import { useState } from "react"

const ingredientsList = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Sucuk",
];

function ToppingsSelector() {
    const [selected, setSelected] = useState("");
    const handleCheckboxChange = (event) => {
        const value = event.target.value;

        const isChecked = selected.includes(value);

        if (isChecked) {
            if (selected.length <= 3) {
                alert("En az 3 malzeme seçmelisiniz.");
                return;
            }
            setSelected(selected.filter((item) => item !== value));
        } else {
            if (selected.length >= 10) {
                alert("En fazla 10 malzeme seçebilirsiniz.");
                return;
            }
            setSelected([...selected, value]);
        }
    };
    return (
        <div>
            <label>Ek Malzemeler</label>
            <br />
            <label>En Fazla 10 malzeme seçebilirsiniz. 5₺</label>

            <div className="ingredients">
                {ingredientsList.map((ingredient, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={ingredient}
                            checked={selected.includes(ingredient)}
                            onChange={handleCheckboxChange}
                        />
                        {ingredient}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ToppingsSelector
