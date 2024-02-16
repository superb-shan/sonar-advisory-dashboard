import { Checkbox } from "@mui/material";
import { useState } from "react";

export default function CheckBoxName({index, checked, handleChecked}) {

    // const [checked, setChecked] = useState(false);

    // function handleChecked(event) {
    //     setChecked(event.target.checked);
    // }

    return (
        <Checkbox 
            checked={checked[index]} 
            onChange={() => handleChecked(index)}  
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{
                "& .MuiSvgIcon-root": {
                    fontSize: '20px',
                },
                color: '#c2c2c5',
                margin: "-5px"
            }}
        />
    )
}