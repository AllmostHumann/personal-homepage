import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
max-width: 670px;
margin-top: 120px;
`;

export const SubHeader = styled.h2`
font-weight: 700;
font-size: 12px;
line-height: 1.3;
text-transform: uppercase;
color: ${({ theme }) => theme.color.slateGray};
margin: 0;
`;

export const Header = styled.a`
font-weight: 900;
font-size: 32px;
line-height: 39px;
letter-spacing: 0.05em;
text-decoration: none;
cursor: pointer;
transition: 0.3s;
color: ${({ theme }) => theme.color.mineShaft};
`;

export const Container = styled.div`
margin-top: 56px;
`;

export const Info = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 1.4;
letter-spacing: 0.05em;
margin: 0;
color: ${({ theme }) => theme.color.mineShaft};
`;

export const StyledLink = styled.a`
display: inline-block;
width: 48px;
height: 48px;
margin-right: 24px;
cursor: pointer;
transition: 0.3s;
color: ${({ theme }) => theme.color.mineShaft};

&:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
}
`;
