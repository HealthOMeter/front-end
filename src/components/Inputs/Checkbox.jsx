import { useState } from "react";
import { CheckboxInput } from "./Inputs.styles"

const Checkbox = ({ isChecked, event, children }) => {

    const [checked, setChecked] = useState(isChecked);

    return (
        <label className="checkbox-label">
            <CheckboxInput
                type="checkbox"
                checked={checked} onClick={() => {
                    if (event) event();
                    setChecked(!checked);
                }} />
            {children}
        </label>

    )
}

export default Checkbox;