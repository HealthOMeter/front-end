import { useEffect, useState } from "react";
import avatar from "../../assets/icons/familyMemberEmpty.svg";
import { AvatarContainer } from "./Avatar.styles";

const Avatar = ({ img, isNav = false }) => {
    const [icon, setIcon] = useState(img);

    useEffect(()=> {
        if (!img) {
            setIcon(avatar);
        }
    }, []);

    return (
        <AvatarContainer isNav={isNav} >
            <img src={icon} alt="Profile avatar" />
        </AvatarContainer>
    );
};

export default Avatar;
