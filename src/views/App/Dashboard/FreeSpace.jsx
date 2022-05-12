import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { kbToGb } from "../../../utils/kbToGb";
import { FreeSpaceBarWrapper, FreeSpaceBar, NoContentTxtWrapper } from "./Dashboard.styles";

const FreeSpace = ({ takenSpace })=> {
    const TOTAL_SPACE = 3;
    const takenSpaceGB = kbToGb(takenSpace).toFixed(2);
    const freeSpace = TOTAL_SPACE - takenSpaceGB;
    const takenSpacePercent = takenSpaceGB/TOTAL_SPACE * 100;
    return (
        <NoContentTxtWrapper>
            <p className="free-space-txt">{freeSpace} GB of {TOTAL_SPACE} GB</p>
            <FreeSpaceBarWrapper>
                <FreeSpaceBar takenSpacePercent={takenSpacePercent} />
            </FreeSpaceBarWrapper>
            <SecondaryButton>Free space</SecondaryButton>
        </NoContentTxtWrapper>
    );
};

export default FreeSpace;