import { BiggerP, SmallP } from "../../../styles/typography/text.styles";
import TextInput from "../../../components/Inputs/TextInput";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import PwdInput from "../../../components/Inputs/PwdInput";

const Security = ({ content })=> {
    return (
        <div className="security">
        <div className="header">
          <BiggerP>
            <img className="icon" src={content.icon} /> {content.name}
          </BiggerP>
          <SmallP>{content.subText}</SmallP>
        </div>
        <div className="content">
              <PwdInput label="Password" placeholder="● ● ● ● ● ●" />
              <PwdInput label="New password"  />
              <PwdInput label="Repeat new password"  />
              <PrimaryButton>Update info</PrimaryButton>
        </div>
      </div>
    )
}

export default Security;
