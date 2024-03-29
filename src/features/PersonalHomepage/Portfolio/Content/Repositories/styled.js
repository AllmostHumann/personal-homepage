import styled from 'styled-components';

export const Wrapper = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.boxBackground};

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const Container = styled.li`
  width: 100%;
  height: 100%;
  padding: 35px;
  color: transparent;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow:
    0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 10px;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 24px;
    height: fit-content;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: clamp(16px, 5vw, 24px);
  line-height: 29px;
  letter-spacing: 0.05em;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: clamp(14px, 4vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0 0 24px 0;
  height: fit-content 75px;
  color: ${({ theme }) => theme.colors.site.text};
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: row;
  gap: 5px;
`;

export const DatesContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: column;
  gap: 5px;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: clamp(14px, 5vw, 18px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  min-width: 65px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.site.text};
`;

export const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tags = styled.span`
  padding: 0 10px;
  margin: 2px;
  font-weight: 400;
  white-space: nowrap;
  border-radius: 2em;
  line-height: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.site.text};
`;

export const StyledLink = styled.a`
  font-weight: 400;
  font-size: clamp(14px, 5vw, 18px);
  line-height: 1.4;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(125%);
  }
`;
