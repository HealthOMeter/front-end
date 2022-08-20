import Modal from "../../../components/Modal/Modal";
import closeIcon from "../../../assets/icons/close.svg";
import { useState } from "react";
import { Subheader } from "../../../styles/typography/headers.styles";
import { InputLabel } from "../../../styles/typography/inputs.styles";
import { InputText } from "../../../styles/typography/inputs.styles";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import { addFamilyMember } from "../../../api/familyMembers.api";

const AddNewFamily = ({ closeModal }) => {

    const [newMember, setNewMember] = useState({
        name: "",
        icon: "",
        familyLink: "",
        docs: [],
        categories: [],
        medical_visits: []
    });

    const addFamilyMemberHandler = () => {
        addFamilyMember(process.env.REACT_APP_TEST_USER, newMember)
            .then((res) => {
                if (res?.status == 200) {
                    //todo: some message that all is good
                    closeModal();
                } else {
                    //todo: msg
                    console.warn("ADDING FAMILY MEMBER DIDN'T WORK");
                }
            });
    };

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
                        name="familyLink"
                        placeholder="ex. mother"
                        type="text"
                        onInput={(e) => setNewMember({ ...newMember, familyLink: e.target.value })}
                    />
                </InputLabel>
                {
                    newMember.name && newMember.familyLink && (
                        <PrimaryButton type="button" event={addFamilyMemberHandler}>
                            Add
                        </PrimaryButton>
                    )
                }
            </form>
        </Modal>
    )
}

export default AddNewFamily;