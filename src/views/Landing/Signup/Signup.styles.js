import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 50%;

    div:first-child {
        width: 50%;

        .header {
            position: relative;
            top: 20%;
            right: -40%;
            width: 25vw;
        }
    }
`;

export const SignupSection = styled.section`
    background: #fff;
    order: 2;
    width: 50%;
    height: 100vh;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20% 10%;
    height: 55%;
    justify-content: space-between;
`;