import { BgrOverlay } from "../../views/App/Documents/AddFile.styles";
import { ModalWindow } from "./Modal.styles";

const Modal = ({ situation, className, children }) => {

  return (
    <>
      <BgrOverlay />
      <ModalWindow className={className} situation={situation}>{children}</ModalWindow>
    </>
  );
};

export default Modal;
