import { useHistory } from "react-router-dom";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { kbToGb } from "../../../utils/kbToGb";
import {
  FreeSpaceBarWrapper,
  FreeSpaceBar,
  NoContentTxtWrapper,
} from "./Dashboard.styles";
import Loader from "../../../components/Loader/Loader";
import { useEffect, useState } from "react";

const FreeSpace = ({ takenSpace }) => {
  const TOTAL_SPACE = 3;
  const takenSpaceGB = kbToGb(takenSpace);
  const freeSpace = (TOTAL_SPACE - takenSpaceGB).toFixed(2);
  const takenSpacePercent = (takenSpaceGB / TOTAL_SPACE) * 100;
  const history = useHistory();

  const [loader, setLoader] = useState(true);

  const handleFreeSpace = () => {
    history.push({
      pathname: "/app/documents",
      state: { freeSpace: true }
    });
  }

  useEffect(() => {
    if (takenSpace) setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [takenSpace]);

  return (
    <>
      {loader ?
        <Loader />
        : (
          <div className="space-content">
            <NoContentTxtWrapper>
              <p className="free-space-txt">
                {freeSpace} GB of {TOTAL_SPACE} GB
              </p>
              <FreeSpaceBarWrapper>
                <FreeSpaceBar takenSpacePercent={takenSpacePercent} />
              </FreeSpaceBarWrapper>
              <SecondaryButton event={handleFreeSpace}>Free space</SecondaryButton>
            </NoContentTxtWrapper>
          </div>
        )
      }
    </>
  );
};

export default FreeSpace;
