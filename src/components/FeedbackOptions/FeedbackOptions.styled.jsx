import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
gap: 20px;
`;

export const Button = styled.button `
    
    width: 120px;
    padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    background-color: rgb(208, 208, 238);
    &:hover {
        background-color: rgb(73, 67, 107);
        transform: scale(1.2);
    }
`;