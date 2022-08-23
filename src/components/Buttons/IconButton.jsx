import { IconBtn } from "./Buttons.styles";

const IconButton = ({icon, text, event, type, typeName="secondary"})=> {
    return (
        <IconBtn onClick={()=> event()} type={type} typeName={typeName}>
            <img src={icon} alt="icon" />
            {text}
        </IconBtn>
    )
};

export default IconButton;