import {
  StyledConfirmation,
  StyledConteinerModal,
  StyledRollDice,
  StyledNumberRandom,
  StyledResult,
} from "./styled";
import Modal from "../ModalBase";
import gifConfirmacao from "../../../assets/imgs/DiceRoll/gifConfirmacao.gif";
import diceWalking from "../../../assets/imgs/DiceRoll/diceWalking.webp";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalContext } from "../../../context/ModalContext";
import Button from "../../Button";

const DiceRoll = () => {
  const [confirmation, setConsfirmation] = useState(true);
  const [roll, setRoll] = useState(false);
  const [result, setResult] = useState(false);
  const [animationResult, setAnimationResult] = useState(true);
  const [numberResult, setNumberResult] = useState(1);

  const { setIsModalDice } = useContext(ModalContext);

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
    <Modal setIs={setIsModalDice}>
      <StyledConteinerModal>
        {confirmation === true && (
          <StyledConfirmation>
            <img src={gifConfirmacao} alt="pokemon" />
            <span>Deseja rolar o dado?</span>
            <Button
              width={25}
              onClick={() => {
                setConsfirmation(false);
                setRoll(true);
              }}
            >
              Sim!
            </Button>
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
    </Modal>
  );
};

export default DiceRoll;
