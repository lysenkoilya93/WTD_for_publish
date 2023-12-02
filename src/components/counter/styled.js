import styled from "styled-components";

export const StyledCounter = styled.span`
  /* display: inline-flex; */
`;

export const Value = styled.input`
  font-size: 20px;
  font-weight: bold;
  padding-left: 0px;
  padding-right: 0px;
  border: none;
  width: auto;
  display: inline-block;
  text-align: center;
  background: inherit;
  color: darkslateblue;
`;

export const ButtonCounter = styled.button`
  clip-path: polygon(50% 10%, 0% 100%, 100% 100%);
  padding: 10px;
  padding-bottom: 0px;
  border: none;
  text-align: baseline;
  background-color: orange;
  color: blue;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.1s, color 0.1s;

  &:active,
  &:hover {
    background-color: greenyellow;
    color: darkred;
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }
`;
