import addFamilyIcon from "../../../assets/svg/addFamilyIcon.svg";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { NoContentTxtWrapper } from "./Dashboard.styles";

const Family = ({ family }) => {
    return (
        <div className="family-content">
            {
                family.length === 0
                    ?
                    <NoContentTxtWrapper>
                        <img src={addFamilyIcon} alt="Add a family member" />
                        <NoContentTxt>You didn’t add any family members</NoContentTxt>
                    </NoContentTxtWrapper>
                    :
                    family.map((el, idx)=> { return <p>el</p>})
            }
            <SecondaryButton>Add new </SecondaryButton>
        </div>
    );
};

export default Family;