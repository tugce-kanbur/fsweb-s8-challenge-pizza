import React from 'react'
import { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
function NoteInput() {
    const [note, setNote] = useState("");
    return (
        <div>
            <FormGroup>
                <Label for="exampleText">Sipariş Notu</Label>
                <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    rows="2"
                />
            </FormGroup>
        </div>
    )
}

export default NoteInput
