import { useState } from "react";
import { Subheader } from "../../../styles/typography/headers.styles";
import { AddFileWindow, BgrOverlay } from "./AddFile.styles";
import StepsBar from "./StepsBar";
import closeIcon from "../../../assets/icons/close.svg";
import { steps } from "./steps.data";


//TO DO make the window close on cross click
const AddFile = ({ setToggler }) => {

    const savedStep = localStorage.getItem("addFileStep");
    savedStep ?? localStorage.setItem("addFileStep", 1);

    const [currentStep, setCurrentStep] = useState(localStorage.getItem("addFileStep"));

    return (
        <>
            <BgrOverlay />
            <AddFileWindow>
                <div className="header">
                    <Subheader>Add files</Subheader>
                    <img className="close-icon" src={closeIcon} alt="Close icon" />
                </div>
                <StepsBar steps={steps} currentStep={currentStep} />
                {
                    steps.map((el)=> {
                        if (currentStep == el.step) {
                            return <el.element key={el.name} />
                        }
                    })
                }
            </AddFileWindow>
        </>
    );
};

export default AddFile;