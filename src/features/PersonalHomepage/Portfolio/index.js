import { StyledArticle, Icon, Header, Text } from "./styled";
import { ReactComponent as Github } from "./icons/github.svg";

const Portfolio = () => {

    return (
        <>
            <StyledArticle>
                <Icon>
                    <Github />
                </Icon>
                <Header>Portfolio</Header>
                <Text>My recent projects</Text>
            </StyledArticle>
        </>
    );
};

export default Portfolio;
