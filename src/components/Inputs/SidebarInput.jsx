import { MenuInput } from "./Inputs.styles";
import check_icon from "../../assets/icons/checkIcon.svg";
import { useLayoutEffect, useState } from "react";

const SidebarInput = ({ setNewMember, familyMember }) => {
    const [name, setName] = useState("");
 
    useLayoutEffect(()=> {
        if (familyMember.name.length === 0) {
            setName("");
        }
    }, [familyMember]);

    return (
        <MenuInput isValid={name.length > 0}>
            <input onChange={
                (e) => {setName(e.target.value)}}
            type="text" />
            {name.length > 0 && <img
                onClick={(e) => {
                    setNewMember({ ...familyMember, name: name })
                }}
                src={check_icon}
            />}
        </MenuInput>
    )
};

export default SidebarInput;