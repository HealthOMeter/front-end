import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../../components/Inputs/TextInput';
import PwdInput from '../../../components/Inputs/PwdInput';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import header from '../../../assets/png/headerSignup.png';
import { signUp } from '../../../api/auth.api';
import { Title } from '../../../styles/typography/headers.styles';
import { PageWrapper, SignupSection, InputsWrapper } from '../Signup/Signup.styles';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    useEffect(() => {
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

    return (
        <PageWrapper>
            <div>
                <img className="header" src={header} alt="Decorated text: all your medical files in one place"></img>
            </div>
            <SignupSection>
                <InputsWrapper>
                    <Title>Sign up</Title>
                    <TextInput onInputChange={(e) => setName(e.target.value)} label="Name" type="text" placeholder="How can we call you?" />
                    <TextInput onInputChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="youremail@example.com" />
                    <PwdInput onInputChange={(e) => setPassword(e.target.value)} label="Password" />
                    <PwdInput onInputChange={(e) => setRepeatPassword(e.target.value)} label="Password" />
                    <label><input type="checkbox"></input>By signing up, I agree to the Privacy Policy</label>
                    <label><input type="checkbox"></input>By signing up, I agree to the Terms and Conditions</label>
                    <PrimaryButton event={() => signUp(email, password)} disabled={isBtnDisabled}>Sign up</PrimaryButton>
                    <p>Already have an account? <Link to="/login">Log in here</Link></p>
                </InputsWrapper>
            </SignupSection>
        </PageWrapper>
    );
};

export default Signup;
