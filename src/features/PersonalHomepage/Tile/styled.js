import styled from "styled-components";
import { ReactComponent as DotItem } from "./icons/dot.svg"

export const StyledTile = styled.article`
    margin-bottom: 72px;
    padding: 32px 33px 32px 32px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding-bottom: 15px;
    letter-spacing: 0.05em;
    border-bottom: 1px solid ${({ theme }) => theme.color.ironTransparent};
    color: ${({ theme }) => theme.color.mineShaft};
`;

export const StyledList = styled.ul`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    list-style: none;
    margin: 0;
    padding: 32px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 95px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const Dot = styled(DotItem)`
    align-items: center;
    width: 9px;
    margin-right: 16px;
`;
