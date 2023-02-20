import { StyledArticle, Icon, Header, Text } from "./styled";
import { ReactComponent as Github } from "./icons/github.svg";
import { Content } from "./Content";

const Portfolio = () => {

    return (
        <>
            <StyledArticle>
                <Icon>
                    <Github />
                </Icon>
                <Header>Portfolio</Header>
                <Text>My recent projects</Text>
                <Content/>
            </StyledArticle>
        </>
    );
};

export default Portfolio;
