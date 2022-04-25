import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../../components/Inputs/TextInput';
import PwdInput from '../../../components/Inputs/PwdInput';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import header from '../../../assets/png/headerSignup.png';
import { createUser } from '../../../api/user.api';
import { Title } from '../../../styles/typography/headers.styles';
import { PageWrapper, SignupSection, InputsWrapper } from '../Signup/Signup.styles';
import CheckIcon from '../../../components/Icons/CheckIcon';
import { hasStringUppercase } from '../../../utils/hasStringUppercase';
import { hasStringNumber } from '../../../utils/hasStringNumber';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    const [isPwdLongEnough, setIsPwdLongEnough] = useState(false);
    const [pwdHasUppercase, setPwdHasUppercase] = useState(false);
    const [pwdHasNumber, setPwdHasNumber] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        if (password.length >= 8) {
            setIsPwdLongEnough(true);
        } else setIsPwdLongEnough(false);

        if (hasStringUppercase(password)) {
            setPwdHasUppercase(true);
        } else setPwdHasUppercase(false);

        if (hasStringNumber(password)) {
            setPwdHasNumber(true);
        } else setPwdHasNumber(false);

        if (
            name.length > 0 &&
            email.length > 0 &&
            password.length > 0 &&
            repeatPassword.length > 0 &&
            repeatPassword === password
        ) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [name, email, password, repeatPassword]);

    const handleClick = () => {
        createUser(name, email, password)
            .then((res) => {
                if (res.status === 201) {
                    setIsSuccess(true);
                } else {
                    setErrMsg(res.msg);
                };
            })
            .catch((error) => console.warn(error));
    };

    return (
        <PageWrapper>
            <div>
                <img className="header" src={header} alt="Decorated text: all your medical files in one place"></img>
            </div>
            <SignupSection>
                <InputsWrapper>
                    {errMsg.length > 0 && <p>{errMsg}</p>}
                    {
                        isSuccess
                            ?
                            <>
                                <Title>Your account has been created!</Title>
                                <Link to="/login">Log in here</Link>
                            </>
                            :
                            <>
                                <Title>Sign up</Title>
                                <TextInput onInputChange={(e) => setName(e.target.value)} label="Name" type="text" placeholder="How can we call you?" />
                                <TextInput onInputChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="youremail@example.com" />
                                <PwdInput onInputChange={(e) => setPassword(e.target.value)} label="Password" />
                                <PwdInput onInputChange={(e) => setRepeatPassword(e.target.value)} label="Password" />
                                <span><CheckIcon state={isPwdLongEnough} />At least 8 characters</span>
                                <span><CheckIcon state={pwdHasUppercase} />At least 1 uppercase letter</span>
                                <span><CheckIcon state={pwdHasNumber} />At least 1 number</span>
                                <label><input type="checkbox"></input>By signing up, I agree to the Privacy Policy</label>
                                <label><input type="checkbox"></input>By signing up, I agree to the Terms and Conditions</label>
                                <PrimaryButton event={handleClick} disabled={isBtnDisabled}>Sign up</PrimaryButton>
                                <p>Already have an account? <Link to="/login">Log in here</Link></p>
                            </>
                    }
                </InputsWrapper>
            </SignupSection>
        </PageWrapper>
    );
};

export default Signup;
