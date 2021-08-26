import React from 'react';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import bgrShape from '../../../assets/svg/bgrShape.svg';
import { H1, Subheader } from '../../../styles/typography/headers.styles';
import { PageWrapper } from './LandingPage.styles';

const LandingPage = () => {
    return (
        <PageWrapper>
            <div className="header-wrapper">
                <H1>Keep your medical <p>files organized</p></H1>
                <Subheader>Never lose or misplace your medical documents again by <p>putting them in custom categories in easily accessible web</p> application!</Subheader>
                <PrimaryButton>Sign up</PrimaryButton>
            </div>
            <div className="illustration-wrapper">
                <img alt="" src={bgrShape} />
            </div>
        </PageWrapper>
    );
};

export default LandingPage;
