import { useState } from "react";
import addFamilyIcon from "../../../assets/svg/addFamilyIcon.svg";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { NoContentTxtWrapper } from "./Dashboard.styles";
import FamilyMemberTile from "./FamilyMemberTile";
import { removeRandomly } from "../../../utils/removeRandomly";
import { useEffect } from "react";

const Family = ({ family }) => {

    const FAMILY_PLACEHOLDER = [
        {
            name: "Dagmara",
            relation: "sister",
            icon: "https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_960_720.jpg"
        },
        {
            name: "Krzysiek",
            relation: "father",
            icon: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg"
        },
        {
            name: "Aniela",
            relation: "grandmother",
            icon: ""
        }
    ];

    family = FAMILY_PLACEHOLDER;
    const [familyMembers, setFamilyMembers] = useState(family);

    useEffect(()=> {
        setFamilyMembers(FAMILY_PLACEHOLDER);
        console.log(family.length);
        if (family.length > 2) {
            setFamilyMembers(removeRandomly(family, 2));
        }
    }, [])

    return (
        <div className="family-content">
            {
                familyMembers.length === 0
                    ?
                    <NoContentTxtWrapper>
                        <img src={addFamilyIcon} alt="Add a family member" />
                        <NoContentTxt>You didn’t add any family members</NoContentTxt>
                    </NoContentTxtWrapper>
                    :
                    familyMembers.map((el, idx)=> { 
                        return <FamilyMemberTile key={el.name+idx} familyMember={el} />
                    })
            }
            <SecondaryButton>Add new </SecondaryButton>
        </div>
    );
};

export default Family;