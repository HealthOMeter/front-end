import Modal from "../../../components/Modal/Modal";
import closeIcon from "../../../assets/icons/close.svg";
import { useState } from "react";
import { Subheader } from "../../../styles/typography/headers.styles";
import { InputLabel } from "../../../styles/typography/inputs.styles";
import { InputText } from "../../../styles/typography/inputs.styles";

const AddNewFamily = ({ toggleModalOpen, closeModal }) => {

    const [newMember, setNewMember] = useState({
        name: "",
        icon: "",
        family_link: "",
        docs: [],
        categories: [],
        medical_visits: []
    });

    return (
        <Modal situation="adaptHeight">
            <div className="header">
                <Subheader>New family member</Subheader>
                <img
                    onClick={() => {
                        closeModal();
                    }}
                    className="close-icon"
                    src={closeIcon}
                    alt="Close icon"
                />
            </div>
            <form>
                <InputLabel>
                    Name
                    <InputText
                        name="name"
                        placeholder="ex. My mum"
                        type="text"
                        onInput={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    />
                </InputLabel>
                <InputLabel>
                    Family link
                    <InputText
                        name="family_link"
                        placeholder="ex. mother"
                        type="text"
                        onInput={(e) => setNewMember({ ...newMember, family_link: e.target.value })}
                    />
                </InputLabel>
            </form>
        </Modal>
    )
}

export default AddNewFamily;