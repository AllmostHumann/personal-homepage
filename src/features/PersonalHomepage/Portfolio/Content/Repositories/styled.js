import styled from "styled-components";

export const Wrapper = styled.ul`
padding: 0;
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 32px;
background: ${({ theme }) => theme.color.white};
`;

export const Container = styled.li`
width: 100%;
height: 322px;
padding: 56px;
color: transparent;
border: 6px solid rgba(209, 213, 218, 0.3);
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
`;

export const Title = styled.h3`
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.05em;
margin-top: 0;
color: ${({ theme }) => theme.color.blue};
`;

export const Description = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 1.4;
letter-spacing: 0.05em;
margin: 24px 0;
height: 75px;
color: ${({ theme }) => theme.color.scienceBlue};
`;

export const LinkContainer = styled.div`
display: flex;
margin-bottom: 8px;
`;

export const Text = styled.span`
font-weight: 400;
font-size: 18px;
width: 60px;
line-height: 1.4;
letter-spacing: 0.05em;
color: ${({ theme }) => theme.color.slateGray};
`;

export const Link = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 1.4;
display: flex;
align-items: center;
letter-spacing: 0.05em;
color: ${({ theme }) => theme.color.blue};
`;

