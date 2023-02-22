import { Wrapper, Image, Content, SubHeader, Name, Info, Message } from "./styled";
import photo from "../Header/images/me.png";
import { ButtonLink } from "../ButtonLink"
import { email } from "../email";

const Header = () => (
    <Wrapper>
        <Image src={photo} alt="me" />
        <Content>
            <SubHeader>This is</SubHeader>
            <Name>Jakub Głuch</Name>
            <Info>
                👨🏻‍💻💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </Info>
            <ButtonLink href={`mailto:${email}`}>
                <Message />
                Hire me
            </ButtonLink>
        </Content>
    </Wrapper>
);

export default Header;