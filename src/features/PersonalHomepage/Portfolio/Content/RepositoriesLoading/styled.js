import styled from "styled-components";

export const WrapperLoading = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 64px;
gap: 48px;
`;

export const LoadingText = styled.span`
font-weight: 400;
font-size: 20px;
line-height: 1.4;
letter-spacing: 0.05em;
color: ${({theme}) => theme.color.mineShaft};
`;

export const Spinner = styled.div`
width: 160px;
height: 160px;
border: 11.375px solid ${({ theme }) => theme.color.ironTransparent};
border-bottom-color: ${({ theme }) => theme.color.scienceBlue};
border-radius: 50%;
display: inline-block;
box-sizing: border-box;
animation: rotation 0.8s linear infinite;
`;