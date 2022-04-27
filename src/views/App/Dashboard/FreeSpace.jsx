import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { FreeSpaceBarWrapper, FreeSpaceBar, NoContentTxtWrapper } from "./Dashboard.styles";

const FreeSpace = ({ takenSpace })=> {
    const TOTAL_SPACE = 2;
    const freeSpace = 2 - takenSpace;
    const takenSpacePercent = takenSpace/TOTAL_SPACE * 100;
    return (
        <NoContentTxtWrapper>
            <p className="free-space-txt">{freeSpace} GB of 2GB</p>
            <FreeSpaceBarWrapper>
                <FreeSpaceBar takenSpacePercent={takenSpacePercent} />
            </FreeSpaceBarWrapper>
            <SecondaryButton>Free space</SecondaryButton>
        </NoContentTxtWrapper>
    );
};

export default FreeSpace;