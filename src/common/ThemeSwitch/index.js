import {
    Wrapper,
    StyledButton,
    StyledText,
    Container,
    IconWrapper,
    Icon
} from "./style";

export const ThemeSwitch = () => {
    return (
        <Wrapper>
            <StyledButton>
                <StyledText>Dark mode</StyledText>
                <Container>
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                </Container>
            </StyledButton>
        </Wrapper>
    );
};