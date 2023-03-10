import {
  Wrapper,
  Image,
  Content,
  SubHeader,
  Name,
  Info,
  Message,
} from "./styled";
import photo from "../Header/images/me.png";
import { ButtonLink } from "../ButtonLink";
import { EMAIL } from "../../features/PersonalHomepage/email";

const Header = () => (
  <Wrapper>
    <Image src={photo} alt="me" />
    <Content>
      <SubHeader>This is</SubHeader>
      <Name>Jakub GΕuch</Name>
      <Info>
        π¨π»βπ»π» I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Info>
      <ButtonLink href={`mailto:${EMAIL}`}>
        <Message />
        Hire me
      </ButtonLink>
    </Content>
  </Wrapper>
);

export default Header;
