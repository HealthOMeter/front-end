import React from 'react';
import logoSvg from '../../assets/svg/logo.svg';
import { LogoContainer } from './Logo.styles';

const Logo = () => {
    return <LogoContainer src={logoSvg} alt="Healthometer logo" />;
};

export default Logo;