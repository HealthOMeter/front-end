import avatar from "../../assets/png/avatarPlaceholder.png";
import { AvatarContainer } from "./Avatar.styles";

const Avatar = ({ img = avatar }) => {
    return (
        <AvatarContainer>
            <img src={img} alt="Profile avatar" />
        </AvatarContainer>
    );
};

export default Avatar;
