import styled from "styled-components";

export const WrapperError = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 71px;
`;

export const ErrorIcon = styled.div`
width: 37px;
margin-bottom: 23px;
`;

export const ErrorHeader = styled.header`
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.05em;
margin-bottom: 32px;
color: ${({ theme }) => theme.color.mineShaft};
`;

export const ErrorInfo = styled.span`
font-weight: 400;
font-size: 20px;
line-height: 1.4;
letter-spacing: 0.05em;
max-width: 426px;
margin-bottom: 32px;
text-align: center;
color: ${({ theme }) => theme.color.mineShaft};
`;