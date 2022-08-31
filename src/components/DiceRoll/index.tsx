import {
  StyledConfirmation,
  StyledContainer,
  StyledConteinerModal,
  StyledRollDice,
  StyledNumberRandom,
  StyledResult,
} from "./styled";
import gifConfirmacao from "../../assets/imgs/gifConfirmacao.gif";
import diceWalking from "../../assets/imgs/diceWalking.webp";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DiceRoll = () => {
  const [confirmation, setConsfirmation] = useState(true);
  const [roll, setRoll] = useState(false);
  const [result, setResult] = useState(false);
  const [animationResult, setAnimationResult] = useState(true);
  const [numberResult, setNumberResult] = useState(1);

  useEffect(() => {
    if (roll) {
      setTimeout(() => {
        toRoll();
      }, 500);
    }
  }, [roll]);

  const showResult = () => {
    setAnimationResult(false);
    setTimeout(() => {
      setRoll(false);
      setResult(true);
    }, 1000);
  };

  const toRoll = () => {
    for (var i = 1; i <= 20; i++) {
      (function (ind) {
        setTimeout(function () {
          const numberRandom = Math.floor(Math.random() * (101 - 30) + 30);
          setNumberResult(numberRandom);
          if (ind === 20) {
            showResult();
          }
        }, 400 * ind);
      })(i);
    }
  };

  return (
    <StyledContainer>
      <StyledConteinerModal>
        {confirmation === true && (
          <StyledConfirmation>
            <img src={gifConfirmacao} alt="pokemon" />
            <span>Deseja rolar o dado?</span>
            <button
              onClick={() => {
                setConsfirmation(false);
                setRoll(true);
              }}
            >
              Sim!
            </button>
          </StyledConfirmation>
        )}
        {roll && (
          <StyledRollDice>
            <img src={diceWalking} alt="Dice walking" />
            <StyledNumberRandom>
              <div>
                {animationResult ? (
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 1, y: +2 }}
                      animate={{ opacity: 0, y: -55 }}
                      exit={{ opacity: 1, y: +2 }}
                      transition={{ duration: 0.2, yoyo: Infinity, delay: 0.4 }}
                    >
                      {numberResult}
                    </motion.span>
                  </AnimatePresence>
                ) : (
                  <span>{numberResult}</span>
                )}

                <span>Gold</span>
              </div>
            </StyledNumberRandom>
          </StyledRollDice>
        )}
        {result && (
          <StyledResult>
            <img src={gifConfirmacao} alt="pokemon" />
            <span>Você ganhou {numberResult} de gold, parabéns!</span>
          </StyledResult>
        )}
      </StyledConteinerModal>
    </StyledContainer>
  );
};

export default DiceRoll;
