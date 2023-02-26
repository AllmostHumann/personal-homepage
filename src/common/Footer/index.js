import {
  Wrapper,
  Header,
  SubHeader,
  Container,
  Info,
  StyledLink,
} from "./styled";
import { ReactComponent as Github } from "./icons/Github.svg";
import { ReactComponent as Facebook } from "./icons/Facebook.svg";
import { ReactComponent as LinkedIn } from "./icons/LinkedIN.svg";
import { ReactComponent as Instagram } from "./icons/Instagram.svg";
import { EMAIL } from "../../features/PersonalHomepage/email";

const Footer = () => (
  <>
    <Wrapper>
      <SubHeader>Let's talk!</SubHeader>
      <Header href={`mailto:${EMAIL}`}>{EMAIL}</Header>
      <Info>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me 🤞
      </Info>
    </Wrapper>
    <Container>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://github.com/AllmostHumann"
      >
        <Github />
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/jakub.gluch/"
      >
        <Facebook />
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jakub-g%C5%82uch-1a3344171/"
      >
        <LinkedIn />
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/gluszek92/"
      >
        <Instagram />
      </StyledLink>
    </Container>
  </>
);

export default Footer;
