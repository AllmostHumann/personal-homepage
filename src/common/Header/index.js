import { useState } from 'react';
import {
  Wrapper,
  Image,
  Content,
  SubHeader,
  Name,
  Info,
  Message,
  ButtonWrapper,
  ButtonListWrapper,
  DownloadButton,
  Person,
  List,
  ListItem,
  PolishFlag,
  EnglishFlag,
} from './styled';
import photo from '../Header/images/me.png';
import { ButtonLink } from '../ButtonLink';
import { EMAIL } from '../../features/PersonalHomepage/email';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Wrapper>
      <Image
        src={photo}
        alt='me'
      />
      <Content>
        <SubHeader>This is</SubHeader>
        <Name>Jakub Głuch</Name>
        <Info>
          👨🏻‍💻💻 I'm a passionate Frontend Developer in love with React. Right now
          I'm focused at learning the TypeScript and Next.js, currently looking
          for new job opportunities.
        </Info>
        <ButtonWrapper>
          <ButtonLink href={`mailto:${EMAIL}`}>
            <Message />
            Hire me
          </ButtonLink>
          <ButtonListWrapper>
            <ButtonLink onClick={handleButtonClick}>
              <Person />
              CV
              {isDropdownOpen && (
                <List>
                  <ListItem>
                    <DownloadButton
                      download='CV Polish'
                      href='https://github.com/AllmostHumann/personal-homepage/raw/main/public/cv/Jakub_G%C5%82uch_CV_PL.pdf'
                    >
                      <PolishFlag />
                      CV Polish
                    </DownloadButton>
                  </ListItem>
                  <ListItem>
                    <DownloadButton
                      download='CV English'
                      href='https://github.com/AllmostHumann/personal-homepage/raw/main/public/cv/Jakub_G%C5%82uch_CV_ENG.pdf'
                    >
                      <EnglishFlag />
                      CV English
                    </DownloadButton>
                  </ListItem>
                </List>
              )}
            </ButtonLink>
          </ButtonListWrapper>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default Header;
