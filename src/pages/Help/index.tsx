import Header from "../../components/Header";
import { StyledContainerWelcome, StyledWelcome } from "./style";
import gifWelcome from "../../assets/imgs/Help/gifWelcome.gif";
import { motion } from "framer-motion";
import ContainerHelp from "../../components/ContainerHelp";

const Help = () => {
  return (
    <>
      <Header />
      <StyledContainerWelcome>
        <StyledWelcome>
          <img src={gifWelcome} alt="Pokemon" />
          <p>
            Caso tenha dúvidas ou queira entender como esse site funciona fique
            aqui e entenda tudo!
          </p>
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, yoyo: Infinity }}
            >
              Desça para mais informações!
            </motion.span>
          </div>
        </StyledWelcome>
      </StyledContainerWelcome>
      <ContainerHelp>oi</ContainerHelp>
    </>
  );
};

export default Help;
