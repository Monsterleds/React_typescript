import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
  background-color: #221c24;
  transition: 0.2s;

  & + div {
    margin-top: 10px;
  }

  input {
    border: 0;
    height: 100%;
    flex: 1;
    background-color: transparent;
    -webkit-box-shadow: 0 0 0px 1000px #221c24 inset;
    -webkit-text-fill-color: #c6c6c6;
    color: #620d7b;

    ::placeholder {
      -webkit-text-fill-color: #5d5d5d;
      font-size: 16px;
    }
  }

  svg {
    color: #5d5d5d;
    margin-right: 10px;
    transition: 0.2s;
  }

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #620d7b;
      }
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;

      svg {
        color: #c53030;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #620d7b;

      svg {
        color: #620d7b;
      }
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
