import { StepBall, StepName, Steps, StepsBarContainer } from "./AddFile.styles";

const StepsBar = ({ steps, currentStep }) => {

    return (
        <StepsBarContainer>
            <div className="steps-names">
                {
                    steps.map((el) => {
                        return <StepName done={el.step <= currentStep} key={el.name + el.step}>{el.name}</StepName>
                    })
                }
            </div>
            <Steps>
                <div className="middle-line"></div>
                <div className="steps">
                    {
                        steps.map((el) => {
                            return <StepBall
                                done={el.step <= currentStep}
                                key={el.step + el.name}
                            >
                                {el.step}
                            </StepBall>
                        })
                    }
                </div>
            </Steps>

        </StepsBarContainer>
    );
};

export default StepsBar;