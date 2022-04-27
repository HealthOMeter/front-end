import styled from 'styled-components';

export const Text = styled.input`
    font-family: 'Poppins';
    border: 1px solid #D2D9E6;
    box-sizing: border-box;
    border-radius: 11px;
    height: inherit;
    color: #7B89A7;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    padding-left: 47px;
`;

export const SearchInputWrapper = styled.div`
    position: relative;
    height: 32px;
    width: 245px;

    & svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
    }
`;