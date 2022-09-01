import {
  StyledConfirmation,
  StyledConteinerModal,
  StyledRollDice,
  StyledNumberRandom,
  StyledResult,
} from "./styled";
import Modal from "../ModalBase";
import gifConfirmacao from "../../../assets/imgs/DiceRoll/gitConfirmacao.gif";
import diceWalking from "../../../assets/imgs/DiceRoll/diceWalking.webp";
import pikachuDance from "../../../assets/imgs/DiceRoll/pikachuDance.gif";
import diceRed from "../../../assets/imgs/DiceRoll/diceRed.png";
import diceRed2 from "../../../assets/imgs/DiceRoll/diceRed2.png";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalContext } from "../../../Context/ModalContext";
import Button from "../../Button";
import AnimationFlashing from "../../Animations/AnimationFlashing";
import AnimationY from "../../Animations/AnimationY";
import AnimationScale from "../../Animations/AnimationScale";

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
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 15 }}
              transition={{ duration: 0.7, yoyo: Infinity }}
            >
              <img src={diceRed} alt="pokemon" />
              <img src={diceRed2} alt="pokemon" />
            </motion.div>
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
            <AnimationY>
              <img src={pikachuDance} alt="pokemon" />
            </AnimationY>
            <AnimationY delay={0.5}>
              <AnimationFlashing>
                <span>Você ganhou {numberResult} de gold, parabéns!</span>
              </AnimationFlashing>
            </AnimationY>
          </StyledResult>
        )}
      </StyledConteinerModal>
    </Modal>
  );
};

export default DiceRoll;
