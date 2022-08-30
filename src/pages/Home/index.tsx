import StyledContainer from "../../components/Container/styles";
import StyledHome, { StyledBoosterList } from "./styles";
import boosters from "./boosters";
import StyledButton from "../../components/Button/styles";

const Home = () => {
  return (
    <>
      <StyledHome>45456</StyledHome>
      <StyledContainer>
        <StyledBoosterList>
          {boosters.map(({ imgUrl, title, price }) => (
            <li>
              <img src={imgUrl} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>
                  preço: <span>{price}</span>
                </p>
              </div>
              <StyledButton width={100}>Comprar</StyledButton>
            </li>
          ))}
        </StyledBoosterList>
      </StyledContainer>
    </>
  );
};

export default Home;
