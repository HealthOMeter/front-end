import { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { SuccessBox } from "./Documents.styles";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import closeIcon from "../../../assets/icons/close.svg";
import { H2, Subheader } from "../../../styles/typography/headers.styles";
import { P } from "../../../styles/typography/text.styles";
import Loader from "../../../components/Loader/Loader";
import { deleteFile } from "../../../api/files.api";

const DeleteDocsPopup = ({ closeModal, docsToDelete }) => {
  const [loader, setLoader] = useState(false);
  const userId = process.env.REACT_APP_TEST_USER;

  console.log(docsToDelete);
  const deleteHandler = (docsToDelete) => {
    setLoader(true);
      deleteFile(userId, docsToDelete)
      .then((res) =>
        console.log(res)
      );
    setLoader(false);
  };

  return (
    <Modal situation="adaptHeight" className="deleteDocs-modal">
      <div className="header">
        <Subheader>Delete documents</Subheader>
        <img
          onClick={closeModal}
          className="close-icon"
          src={closeIcon}
          alt="Close icon"
        />
      </div>
      <SuccessBox>
        <H2>Are you sure you want to delete these documents?</H2>
        <P>This process cannot be undone</P>
        <svg
          width="181"
          height="181"
          viewBox="0 0 181 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.4938 28.6911L89.1644 0H25.6442C16.0794 0 8.48438 7.79281 8.48438 17.3565V137.472C8.48438 147.036 16.0794 154.671 25.6442 154.671H85.8988L129.308 88.9445V42.0728L93.4938 28.6911Z"
            fill="#E7ECF4"
          />
          <path
            d="M89.1641 0.0397949L129.19 42.0728H102.546C95.1462 42.0728 89.1641 36.0907 89.1641 28.6911V0.0397949Z"
            fill="#A2BDD9"
          />
          <path
            d="M36.3483 97.997H87.629C89.7932 97.997 91.5652 96.2272 91.5652 94.0619C91.5652 91.8977 89.7932 90.1257 87.629 90.1257H36.3483C34.1841 90.1257 32.4121 91.8977 32.4121 94.0619C32.4121 96.2272 34.1841 97.997 36.3483 97.997V97.997Z"
            fill="#083863"
          />
          <path
            d="M36.3483 78.3192H76.216C78.3802 78.3192 80.1522 76.5484 80.1522 74.3831C80.1522 72.2189 78.3802 70.448 76.216 70.448H36.3483C34.1841 70.448 32.4121 72.2189 32.4121 74.3831C32.4121 76.5484 34.1841 78.3192 36.3483 78.3192V78.3192Z"
            fill="#083863"
          />
          <path
            d="M74.6804 110.197H36.3483C34.1841 110.197 32.4121 111.969 32.4121 114.132C32.4121 116.298 34.1841 118.069 36.3483 118.069H74.6804C76.8457 118.069 78.6166 116.298 78.6166 114.132C78.6166 111.969 76.8457 110.197 74.6804 110.197Z"
            fill="#083863"
          />
          <path
            d="M123.445 90.3982C142.41 93.0572 157 109.324 157 129.015C157 150.54 139.535 168 118 168C103.196 168 90.2875 159.744 83.7104 147.575C80.713 142.041 79 135.712 79 128.985C79 107.459 96.4661 90 118 90C119.836 90.0309 121.64 90.1536 123.445 90.3982V90.3982Z"
            fill="#083863"
          />
          <path
            d="M134.852 115.797H126.646V114.358C126.646 111.997 124.649 110 122.286 110H113.693C111.33 110 109.461 111.997 109.461 114.358V115.797H101.148C99.966 115.797 99 116.763 99 117.943C99 119.124 99.966 120.09 101.148 120.09H103.639L105.938 146.089C106.045 147.206 106.969 148 108.086 148H127.914C129.031 148 129.954 147.185 130.062 146.089L132.36 120.09H134.852C136.034 120.09 137 119.124 137 117.943C137 116.763 136.034 115.797 134.852 115.797V115.797ZM113.757 114.294H122.35V115.797H113.757V114.294ZM125.937 143.706H110.041L107.957 120.09H128.043L125.937 143.706Z"
            fill="#E7ECF4"
          />
        </svg>
        {loader ? (
          <Loader />
        ) : (
          <div className="bottom-btns">
            <SecondaryButton event={closeModal}>Cancel</SecondaryButton>
            <PrimaryButton type="button" event={() => deleteHandler(docsToDelete)}>
              Delete
            </PrimaryButton>
          </div>
        )}
      </SuccessBox>
    </Modal>
  );
};

export default DeleteDocsPopup;
