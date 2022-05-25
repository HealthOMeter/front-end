import { NotifRowWrapper } from "./Settings.styles";
import { P } from "../../../styles/typography/text.styles";

const NotifRow = ({ name, subText, isChecked }) => {
  return (
    <NotifRowWrapper>
      <div className="txt">
        <P>{name}</P>
        <P>{subText}</P>
      </div>
      <input type="checkbox" checked={isChecked} />
    </NotifRowWrapper>
  );
};

export default NotifRow;
