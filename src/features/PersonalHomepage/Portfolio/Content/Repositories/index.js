import { Wrapper, Container, Title, Description, LinkContainer, Text, Link } from "./styled";

export const Repositories = ({ repositories }) => {

  return (
    <Wrapper>
      {repositories.map(({ id, name, description, html_url, homepage }) => (
        <Container key={id}>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <LinkContainer>
            <Text>Demo:</Text>
            <Link target="_blank" href={homepage}>Visit page</Link>
          </LinkContainer>
          <LinkContainer>
            <Text>Code:</Text>
            <Link target="_blank" href={html_url}>Browse repository</Link>
          </LinkContainer>
        </Container>
      ))};
    </Wrapper>
  );
};