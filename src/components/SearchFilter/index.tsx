import { useContext } from "react"
import { ModalContext } from "../../Context/ModalContext"
import ModalSearch from "../Modal/ModalSearch"

import StyledSearchFilter from "./styles"

const SearchFilter = () => {

const {isModalSearch, setIsModalSearch} = useContext(ModalContext)
    return (
        
        <StyledSearchFilter onClick={() => setIsModalSearch(true)}>
            {isModalSearch && <ModalSearch/>}
            Filtro de Pesquisa
        </StyledSearchFilter>
        
    )
}

export default SearchFilter