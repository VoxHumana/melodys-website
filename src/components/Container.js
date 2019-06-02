import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  visibility: ${props => props.visible ? 'visible' : 'hidden' };
  opacity: ${props => props.visible ? 1 : 0};
  transition: 1s;
`;
