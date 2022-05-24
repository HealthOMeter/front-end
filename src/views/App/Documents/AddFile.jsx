import { useState, useEffect } from "react";
import { Subheader } from "../../../styles/typography/headers.styles";
import StepsBar from "./StepsBar";
import closeIcon from "../../../assets/icons/close.svg";
import { steps } from "./steps.data";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { sendFileInfo, uploadFile } from "../../../api/files.api";
import Modal from "../../../components/Modal/Modal";

const AddFile = ({ closeAddFile }) => {
  const userId = process.env.REACT_APP_TEST_USER;

  const savedStep = localStorage.getItem("addFileStep");
  savedStep ?? localStorage.setItem("addFileStep", 1);

  const [currentStep, setCurrentStep] = useState(
    localStorage.getItem("addFileStep")
  );
  const [files, setFiles] = useState({});
  const [form, setForm] = useState({
    id: `${userId}`,
    name: "",
    date: "",
    status: null,
    category: "",
  });

  useEffect(() => {
    const formValues = Object.values(form);
    const condition =
      formValues.includes("") ||
      formValues.includes(undefined) ||
      formValues.includes(null);
    if (condition) {
      return;
    } else {
      sendFileInfo(form, userId).then((res) => console.log(res));
    }
  }, [form]);

  const closeWindowHandler = () => {
    closeAddFile(false);
    setFiles({});
    setCurrentStep(1);
    localStorage.setItem("addFileStep", 1);
  };

  const prevStepHandler = () => {
    if (currentStep > 1) {
      setCurrentStep(parseInt(currentStep) - 1);
      localStorage.setItem("addFileStep", parseInt(currentStep) - 1);
    } else {
      return;
    }
  };

  const nextStepHandler = () => {
    if (parseInt(currentStep) < steps.length) {
      setCurrentStep(parseInt(currentStep) + 1);
      localStorage.setItem("addFileStep", parseInt(currentStep) + 1);
    }

    if (parseInt(currentStep) + 1 === steps.length) {
      const userId = process.env.REACT_APP_TEST_USER;
      console.log(form);
      const formData = new FormData();
      formData.append("FileContent", files[0]);
      uploadFile(formData, userId).then((res) => {
        const data = res.data.response;
        setForm({ ...form, format: data.format, path: data.path });
      });
    }

    if (parseInt(currentStep) === steps.length) {
    }
  };

  return (
      <Modal customHeight="80%" situation={parseInt(currentStep) === steps.length ? "adaptHeight" : "default"}>
        <div className="header">
          {parseInt(currentStep) !== steps.length && (
            <>
              <Subheader>Add files</Subheader>
              <img
                onClick={closeWindowHandler}
                className="close-icon"
                src={closeIcon}
                alt="Close icon"
              />
            </>
          )}
        </div>
        {parseInt(currentStep) !== steps.length && (
          <StepsBar steps={steps} currentStep={currentStep} />
        )}
        {steps.map((el) => {
          if (currentStep == el.step) {
            return (
              <el.element
                form={form}
                setForm={setForm}
                files={files}
                setCurrentStep={setCurrentStep}
                setFiles={setFiles}
                key={el.name}
                closeWindow={closeWindowHandler}
              />
            );
          }
        })}
        {files.length > 0 && parseInt(currentStep) !== steps.length && (
          <div className="bottom-btns">
            <SecondaryButton event={prevStepHandler}>Back</SecondaryButton>

            <PrimaryButton event={nextStepHandler}>Next</PrimaryButton>
          </div>
        )}
      </Modal>
  );
};

export default AddFile;
