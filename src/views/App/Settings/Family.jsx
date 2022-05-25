import { BiggerP, SmallP } from "../../../styles/typography/text.styles";
import TextInput from "../../../components/Inputs/TextInput";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import IconButton from "../../../components/Buttons/IconButton";
import trashIcon from "../../../assets/svg/trash.svg";

const Family = ({ content })=> {
    return (
        <div className="family">
        <div className="header">
          <BiggerP>
            <img className="icon" src={content.icon} /> {content.name}
          </BiggerP>
          <SmallP>{content.subText}</SmallP>
        </div>
        <div className="content">
              <TextInput type="text" name="name" label="Name" />
              <TextInput type="text" name="relation" label="Relation" placeholder="Who is that person to you?" />
              <IconButton icon={trashIcon} text="Delete"></IconButton>
              <PrimaryButton>Update info</PrimaryButton>
        </div>
      </div>
    )
}

export default Family;
