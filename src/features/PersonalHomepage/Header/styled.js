import styled from "styled-components";
import { ReactComponent as MessageItem } from "./icons/hireme.svg";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    align-items: center;
    margin-bottom: 63px;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    transition: 0.7s;
`;

export const Content = styled.div``;

export const SubHeader = styled.header`
    font-size: 12px;
    line-height: 1.3;
    margin-bottom: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.mineShaft};
`;

export const Name = styled.header`
    font-weight: 900;
    font-size: 38px;
    letter-spacing: 0.05em;
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    max-width: 633px;
    margin-top: 35px;
    margin-bottom: 32px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const Message = styled(MessageItem)`
    width: 19.23px;
    height: 17.12px;
`;