import styled from "styled-components";
import { StyledModalConfirm } from "../ModalHome/styled";

const StyledInfo = styled(StyledModalConfirm)`
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);

  text-align: center;
  font-size: 18px;

  table,
  th,
  td {
    border: 3px solid transparent;
  }
`;

export default StyledInfo;
