import { BiggerP, SmallP } from "../../../styles/typography/text.styles";
import TextInput from "../../../components/Inputs/TextInput";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";

const Personal = ({ content }) => {
  return (
    <div className="personal">
      <div className="header">
        <BiggerP>
          <img className="icon" src={content.icon} /> {content.name}
        </BiggerP>
        <SmallP>{content.subText}</SmallP>
      </div>
      <div className="content">
            <TextInput type="text" name="name" label="Name" />
            <TextInput type="email" name="email" label="E-mail" />
            <TextInput type="tel" name="email" label="Phone" />
            <PrimaryButton>Update info</PrimaryButton>
      </div>
    </div>
  );
};

export default Personal;
