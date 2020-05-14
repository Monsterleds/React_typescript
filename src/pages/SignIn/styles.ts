import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import knifes from '../../assets/knifecsgo.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding: 0px 20px;
  background-color: #110a12;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      color: #c6c6c6;
      margin: 15px 0;
      transition: 0.2s;

      :hover {
        color: ${shade(0.2, '#C6C6C6')};
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6e0f8a;
    margin: 25px 0;
    transition: 0.2s;

    :hover {
      color: ${shade(0.2, '#620D7B')};
    }

    svg {
      margin-right: 10px;
    }
  }

  h2 {
    color: #d1d1d1;
    margin-bottom: 10px;
    font-weight: 500;
  }

  img {
    margin-bottom: 50px;
    width: 70%;
  }
`;

export const Background = styled.div`
  background: url(${knifes}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
