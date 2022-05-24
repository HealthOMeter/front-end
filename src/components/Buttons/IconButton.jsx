import { IconBtn } from "./Buttons.styles";

const IconButton = ({icon, text, event, type="secondary"})=> {
    return (
        <IconBtn onClick={()=> event()} type={type}>
            <img src={icon} alt="icon" />
            {text}
        </IconBtn>
    )
};

export default IconButton;