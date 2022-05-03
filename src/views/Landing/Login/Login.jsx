import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../../components/Inputs/TextInput';
import PwdInput from '../../../components/Inputs/PwdInput';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import header from '../../../assets/png/headerSignup.png';
import { PageWrapper, LoginSection, InputsWrapper } from '../Login/Login.styles';
import { Title } from '../../../styles/typography/headers.styles';

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    useEffect(() => {
        if (emailInput.length > 0 && password.length > 0) {
            return setIsBtnDisabled(false);
        } else {
            return setIsBtnDisabled(true);
        }
    }, [emailInput, password]);

    return (
        <PageWrapper>
            <div>
                <img className="header" src={header} alt="Decorated text: all your medical files in one place"></img>
            </div>
            <LoginSection>
                <InputsWrapper>
                    <Title>Welcome back!</Title>
                    <TextInput onInputChange={(e) => setEmailInput(e.target.value)} label="Email" type="email" placeholder="youremail@example.com" />
                    <PwdInput onInputChange={(e) => setPassword(e.target.value)} label="Password" />
                    <label><input type="checkbox"></input>Keep me logged in</label>
                    <PrimaryButton wide event={console.log("hello")} disabled={isBtnDisabled}>Log in</PrimaryButton>
                    <p>First time? <Link to="signup">Sign up here</Link></p>
                </InputsWrapper>
            </LoginSection>
        </PageWrapper>
    );
};

export default Login;
