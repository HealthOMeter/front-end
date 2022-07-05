import { useState } from "react";
import addFamilyIcon from "../../../assets/svg/addFamilyIcon.svg";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { NoContentTxtWrapper } from "./Dashboard.styles";
import FamilyMemberTile from "./FamilyMemberTile";
import { removeRandomly } from "../../../utils/removeRandomly";
import { useEffect } from "react";
import AddNewFamily from "./AddNewFamily";

const Family = ({ family }) => {
    const [familyMembers, setFamilyMembers] = useState(family);
    const [toggleModalOpen, setToggleModalOpen] = useState(false);

    useEffect(() => {
        if (family.length > 2) {
            setFamilyMembers(removeRandomly(family, 2));
        } else if (family.length <= 2) {
            setFamilyMembers(family);
        }
    }, [family]);

    return (
        <>
            {toggleModalOpen && <AddNewFamily {...toggleModalOpen} closeModal={()=> setToggleModalOpen(false)}/>}
            <div className="family-content">
                {
                    familyMembers.length === 0
                        ?
                        <NoContentTxtWrapper>
                            <img src={addFamilyIcon} alt="Add a family member" />
                            <NoContentTxt>You didn’t add any family members</NoContentTxt>
                        </NoContentTxtWrapper>
                        :
                        familyMembers.map((el, idx) => {
                            return <FamilyMemberTile key={el.name + idx} familyMember={el} />
                        })
                }
                <SecondaryButton event={()=> setToggleModalOpen(true)}>Add new </SecondaryButton>
            </div>
        </>
    );
};

export default Family;