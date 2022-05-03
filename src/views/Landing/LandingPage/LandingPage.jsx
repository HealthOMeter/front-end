import React from 'react';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import bgrShape from '../../../assets/svg/bgrShape.svg';
import { Header, Subheader } from '../../../styles/typography/headers.styles';
import { PageWrapper } from './LandingPage.styles';

const LandingPage = () => {
    return (
        <PageWrapper>
            <div className="header-wrapper">
                <Header>Keep your medical <p>files organized</p></Header>
                <Subheader>Never lose or misplace your medical documents again by <p>putting them in custom categories in easily accessible web</p> application!</Subheader>
                <PrimaryButton wide>Sign up</PrimaryButton>
            </div>
            <div className="illustration-wrapper">
                <img alt="" src={bgrShape} />
            </div>
        </PageWrapper>
    );
};

export default LandingPage;
