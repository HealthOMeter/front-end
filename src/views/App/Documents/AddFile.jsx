import { useState } from "react";
import { Subheader } from "../../../styles/typography/headers.styles";
import { AddFileWindow, BgrOverlay } from "./AddFile.styles";
import StepsBar from "./StepsBar";
import closeIcon from "../../../assets/icons/close.svg";
import { steps } from "./steps.data";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { uploadFile } from "../../../api/files.api";

const AddFile = ({ closeAddFile }) => {

    const savedStep = localStorage.getItem("addFileStep");
    savedStep ?? localStorage.setItem("addFileStep", 1);

    const [currentStep, setCurrentStep] = useState(localStorage.getItem("addFileStep"));
    const [files, setFiles] = useState({});
    const [form, setForm] = useState({
        id: "",
        name: "",
        date: "",
        status: null,
        category: "",
        format: "",
        path: ""
    });

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
        };

        if ((parseInt(currentStep) + 1) === steps.length) {
            const userId = process.env.REACT_APP_TEST_USER
            console.log(form);
            const formData = new FormData();
            // FIX THIS : FORM DATA?
            formData.append("FileContent", files[0]);
            uploadFile(formData, userId)
                .then((res) => console.log(res));
        };
    };

    return (
        <>
            <BgrOverlay />
            <AddFileWindow>
                <div className="header">
                    <Subheader>Add files</Subheader>
                    <img
                        onClick={closeWindowHandler}
                        className="close-icon"
                        src={closeIcon}
                        alt="Close icon"
                    />
                </div>
                <StepsBar steps={steps} currentStep={currentStep} />
                {
                    steps.map((el) => {
                        if (currentStep == el.step) {
                            return <el.element
                                form={form}
                                setForm={setForm}
                                files={files}
                                setFiles={setFiles}
                                key={el.name}
                            />
                        }
                    })
                }
                {
                    files.length > 0 && (
                        <div className="bottom-btns">
                            <SecondaryButton event={prevStepHandler}>
                                Back
                            </SecondaryButton>

                            <PrimaryButton event={nextStepHandler}>
                                Next
                            </PrimaryButton>
                        </div>
                    )
                }
            </AddFileWindow>
        </>
    );
};

export default AddFile;