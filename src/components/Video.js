import styled from 'styled-components';

export default styled.video`
  align-self: center;
  border: 6px solid #ff90ca;
  border-radius: 4px;
  box-shadow: inset 0 8px 12px 6px rgba(0,0,0,0.2), inset 0 6px 16px 6px rgba(0,0,0,0.19), 0 8px 12px 6px rgba(0,0,0,0.2), 0 6px 16px 6px rgba(0,0,0,0.19);
  display: ${(props) => props.isLoaded ? "block" : "none"};
  margin: 8px;
  max-height: 600px;
  opacity: ${(props) => props.isVisible ? 1 : 0};
  transition: 1s;
  width: auto;
`;
