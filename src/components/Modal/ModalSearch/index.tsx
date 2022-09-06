import { useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import Modal from "../ModalBase"
import { StyledDivSearch } from "./style";

const ModalSearch = () => {

    const { setIsModalSearch } = useContext(ModalContext);
    return(
        <>
        <Modal setIs={setIsModalSearch}>
           <StyledDivSearch>
            <span>Filtro de Pesquisa</span>
            <h2>Nome</h2>
            <input placeholder="Pokemon..."></input>
            <h2>Tipo</h2>
            <select>
                <option>Selecione</option>
                <option>Normal</option>
                <option>Poison</option>
                <option>Psiquico</option>
                <option>Grama</option>
                <option>Terra</option>
                <option>Gelo</option>
                <option>Fogo</option>
                <option>Pedra</option>
                <option>Dragão</option>
                <option>Água</option>
                <option>Inseto</option>
                <option>Trevas</option>
                <option>Lutador</option>
                <option>Fantasma</option>
                <option>Metal</option>
                <option>Voador</option>
                <option>Eletrico</option>
                <option>Fada</option>
            </select>
            <button>Confirmar</button>
           </StyledDivSearch>
        </Modal>
        </>
    )
}

export default ModalSearch