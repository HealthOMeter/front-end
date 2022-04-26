import { SecondaryBtn } from "./SecondaryButton.styles";

const SecondaryButton = (props) => {
    return (
      <SecondaryBtn
        onClick={props.event}
        disabled={props.disabled}
      >
        {props.children}
      </SecondaryBtn>
    )
  };
  
  export default SecondaryButton;