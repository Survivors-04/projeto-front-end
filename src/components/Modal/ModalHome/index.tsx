import { useContext, useEffect, useState } from "react";
import Modal from "../ModalBase";
import { ModalContext } from "../../../context/ModalContext";
import Button from "../../Button";
import { StyledModalHome } from "./styled";

import { UserContext } from "../../../context/UserContext";
import { toastSuccess } from "../../ToastifyConfig";
import apiGenerateBooster from "../../../services/boosters/apiGenerateBooster";
import apiPostPokemonUser from "../../../services/pokemons/apiPostPokemonUser";
import { iPokemon } from "../../../interfaces/pokemons";

interface iModalHome {
  boosterId: string;
}

export const ModalHome = ({ boosterId }: iModalHome) => {
  const { setisModalHome } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const [pokemonsResult, setPokemonsResult] = useState<iPokemon[]>([]);

  useEffect(() => {
    const generateBooster = async () => {
      const boosterPokemons = await apiGenerateBooster(boosterId);

      setPokemonsResult(boosterPokemons);
    };

    generateBooster();
  }, [user.id, boosterId]);

  useEffect(() => {
    const addPokemon = async () => {
      await apiPostPokemonUser(pokemonsResult, user.id);
    };

    addPokemon();
  }, [pokemonsResult, user.id]);

  return (
    <>
      <Modal setIs={setisModalHome}>
        <StyledModalHome>
          <h2>Recompensas</h2>
          {pokemonsResult.map(({ name, id }) => (
            <li key={id}>
              <img
                src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                  name === "Nidoran-M"
                    ? "nidorino"
                    : name === "Nidoran-F"
                    ? "nidorina"
                    : name === "Mr.Mime"
                    ? "mr._mime"
                    : name.toLowerCase()
                }.gif`}
                alt={name}
              />
              <h3>{name}</h3>
            </li>
          ))}
          <Button
            width={60}
            onClick={() => {
              toastSuccess("Pokemons adicionados a sua coleção");
              setisModalHome(false);
            }}
          >
            Confirmar
          </Button>
        </StyledModalHome>
      </Modal>
    </>
  );
};
