import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../../components/Inputs/TextInput';
import PwdInput from '../../../components/Inputs/PwdInput';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import { PageWrapper, LoginSection, InputsWrapper } from '../Login/Login.styles';
import { Title } from '../../../styles/typography/headers.styles';

const Login = () => {
    return (
        <PageWrapper>
            <div></div>
            <LoginSection>
                <InputsWrapper>
                    <Title>Welcome back!</Title>
                    <TextInput label="Email" placeholder="youremail@example.com" />
                    <PwdInput label="Password" />
                    <label><input type="checkbox"></input>Keep me logged in</label>
                    <PrimaryButton disabled={true}>Log in</PrimaryButton>
                    <p>First time? <Link>Sign up here</Link></p>
                </InputsWrapper>
            </LoginSection>
        </PageWrapper>
    );
};

export default Login;
