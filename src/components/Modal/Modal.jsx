import { BgrOverlay } from "../../views/App/Documents/AddFile.styles";
import { ModalWindow } from "./Modal.styles";

const Modal = ({ currentStep, children }) => {

  return (
    <>
      <BgrOverlay />
      <ModalWindow currentStep={currentStep}>{children}</ModalWindow>
    </>
  );
};

export default Modal;
