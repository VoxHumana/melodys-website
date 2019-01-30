import styled from 'styled-components';

export default styled.button`
  border: 5px solid;
  background-color: Transparent;
  text-align: center;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  min-width: 150px;
  font-family: Consolas,monospace;
  font-size: 24px;
  box-shadow: inset 0 8px 16px 2px rgba(0,0,0,0.2), inset 0 6px 20px 2px rgba(0,0,0,0.19), 0 8px 16px 2px rgba(0,0,0,0.2), 0 6px 20px 2px rgba(0,0,0,0.19);
  text-shadow: 0 6px 4px rgba(0,0,0,0.6);
  transition: 0.3s;
  :active {
    box-shadow: inset 0 2px 4px 2px rgba(0,0,0,0.2), inset 0 1.5px 5px 2px rgba(0,0,0,0.19), 0 2px 4px 2px rgba(0,0,0,0.2), 0 1.5px 5px 2px rgba(0,0,0,0.19);
    text-shadow: 0 4px 4px rgba(0,0,0,0.4);
  }
`;