import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 320px;
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 10px 20px;
  background-color: #221C24;
  transition: 0.2s;

  & + div {
    margin: 10px;
  }

  input {
    border: 0;
    height: 100%;
    flex: 1;
    background-color: transparent;
    -webkit-box-shadow: 0 0 0px 1000px #221C24 inset;
    -webkit-text-fill-color: #C6C6C6;
    color: #620D7B;

    ::placeholder {
      -webkit-text-fill-color: #5D5D5D;
      font-size: 16px;
    }
  }

  svg {
    color: #5D5D5D;
    margin-right: 10px;
    transition: 0.2s;
  }

  ${props => props.isFocused && css`
    border: 2px solid #620D7B;

    svg {
      color: #620D7B;
    }
  `}

  ${props => props.isFilled && css`
    svg {
      color: #620D7B;
    }
  `}
`;
