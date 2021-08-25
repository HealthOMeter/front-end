import React from 'react';
import PrimaryButton from '../../../components/PrimaryBtn/PrimaryButton';
import bgrShape from '../../../assets/svg/bgrShape.svg';
import { Header, Subheader } from '../../../styles/typography/headers.styles';
import { IllustWrapper, PageWrapper } from './LandingPage.styles';

const LandingPage = () => {
    return (
        <PageWrapper>
            <div>
                <Header>Keep your medical <p>files organized</p></Header>
                <Subheader>Never lose or misplace your medical documents again by <p>putting them in custom categories in easily accessible web</p> application!</Subheader>
                <PrimaryButton>Sign up</PrimaryButton>
            </div>
            <div>
                <IllustWrapper>
                    <img src={bgrShape} />
                    <div className="white-rect"></div>
                </IllustWrapper>
            </div>
        </PageWrapper>
    );
};

export default LandingPage;
