import styled from 'styled-components';

export const AvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    justify-self: center;

    @media (min-width: 1400px) {
        width: ${props => props.isNav ? "40px" : "60px"};
        height: ${props => props.isNav ? "40px" : "60px"};
    }


    img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
`;
