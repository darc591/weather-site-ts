import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 50px;
    background-color: #f6f6f77b;
    height: 800px;
    width: 1000px;
    padding: 30px;
    border-radius: 40px;
    display: grid;
    grid-template: 1fr repeat(3, 2fr) / 1fr repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 10px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'poppins', sans-serif;

    &.day{
        background: linear-gradient(177deg, #64adc9 0%, #717bcf 100%);

    }
    &.night{
        background: linear-gradient(177deg, #070c53 0%, #45452b 100%);

    }
  `;




