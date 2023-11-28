import {
  Wrapper,
  Container,
  Title,
  Description,
  LinkContainer,
  Text,
  StyledLink,
  Tags,
  TagsContainer,
} from "./styled";

export const Repositories = ({ repositories }) => {
  return (
    <Wrapper>
      {repositories.map(({ id, name, description, html_url, homepage, topics }) => (
        <Container key={id}>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <LinkContainer>
            <Text>Demo:</Text>
            <StyledLink target="_blank" rel="noreferrer" href={homepage}>
              Visit page
            </StyledLink>
          </LinkContainer>
          <LinkContainer>
            <Text>Code:</Text>
            <StyledLink target="_blank" rel="noreferrer" href={html_url}>
              Browse repository
            </StyledLink>
          </LinkContainer>
          <TagsContainer>
            <Text>Tags:</Text>
              {topics.map((topic)=> (
              <Tags>{topic}</Tags>
              ))}
          </TagsContainer>
        </Container>
      ))}
    </Wrapper>
  );
};
