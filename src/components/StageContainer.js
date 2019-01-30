import styled from "styled-components";

export default styled.div`
  margin: auto;
  font-family: Consolas,monospace;
  color: white;
  font-size: 36px;
  visibility: ${props => props.isStageVisible ? 'visible' : 'hidden' };
  opacity: ${(props) => props.isStageVisible ? 1 : 0};
  transition: 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;