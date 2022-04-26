import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { FreeSpaceBarWrapper, FreeSpaceBar } from "./Dashboard.styles";

const FreeSpace = ({ takenSpace = 0 })=> {
    const TOTAL_SPACE = 2;
    const freeSpace = 2 - takenSpace;
    const takenSpacePercent = takenSpace/TOTAL_SPACE * 100;
    return (
        <>
            <p>{freeSpace} GB of 2GB</p>
            <FreeSpaceBarWrapper>
                <FreeSpaceBar takenSpacePercent={takenSpacePercent} />
                <SecondaryButton>
                    Free space
                </SecondaryButton>
            </FreeSpaceBarWrapper>
        </>
    );
};

export default FreeSpace;