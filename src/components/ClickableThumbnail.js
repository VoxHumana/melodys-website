import styled from "styled-components";

export default styled.img`
        align-self: center;
        border-radius: 4px;
        box-shadow: inset 0 8px 16px 2px rgba(0,0,0,0.2), inset 0 6px 20px 2px rgba(0,0,0,0.19), 0 8px 16px 2px rgba(0,0,0,0.2), 0 6px 20px 2px rgba(0,0,0,0.19);
        margin: 8px;
        max-height: 300px;
        width: auto;
        transition: 1s;
        display: ${props => props.visible ? 'block' : 'none'};
        :active {
          box-shadow: inset 0 2px 4px 2px rgba(0,0,0,0.2), inset 0 1.5px 5px 2px rgba(0,0,0,0.19), 0 2px 4px 2px rgba(0,0,0,0.2), 0 1.5px 5px 2px rgba(0,0,0,0.19);
          text-shadow: 0 4px 4px rgba(0,0,0,0.4);
        }
    `;