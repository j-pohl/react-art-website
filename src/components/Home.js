import { HomeContainer, StyledHeroImage } from "../styles.js/Home.styled";

const Home = (props) => {
  return (
    <HomeContainer>
      <StyledHeroImage src={props.paintings.acrylicpainting10} alt={"logo"} />
    </HomeContainer>
  );
};

export default Home;
