import addFamilyIcon from "../../../assets/svg/addFamilyIcon.svg";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";

const Family = ({ family }) => {
    return (
        <>
            {
                family.length == 0
                    ?
                    <>
                        <img src={addFamilyIcon} alt="Add a family member" />
                        <p>You didn’t add any family members</p>
                        <SecondaryButton>Add new </SecondaryButton>
                    </>
                    :
                    family.map((el, idx)=> { return <p>el</p>})
            }

        </>
    );
};

export default Family;