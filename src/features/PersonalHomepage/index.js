import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Container } from "./Container/styled";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Tile from "./Tile";
import { skills } from "./Tile/skills";
import { skillsToLearn } from "./Tile/skillsToLearn";

const PersonalHomepage = () => {
    return (
        <Container>
            <ThemeSwitch />
            <Header />
            <Tile
                title="My skillset includes 🛠️"
                skills={skills}
            />
            <Tile
                title="What I want to learn next 🚀"
                skills={skillsToLearn}
            />
            <Portfolio />
            <Footer />
        </Container>
    );
};

export default PersonalHomepage;