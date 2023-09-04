import { styled } from "styled-components"

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #78a947;
  color: white;
  font-family: "Goldman Sans";
  // font-weight: bold;
  // text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: #78a947;
    border: 1px solid #78a947;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #e8f0fe;
  color: #4285f4;
  border: 1px solid #357ae8;

  &:hover {
    background-color: #e9f0fb;
    border: 1px solid #357ae8;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #404040;
  border: 1px solid #78a947;

  &:hover {
    background-color: #78a947;
    color: white;
    border: none;
  }
`
