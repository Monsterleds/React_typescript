import styled from 'styled-components';
import { shade } from 'polished';

import knifes from '../../assets/knifecsgo.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #110A12;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      color: #C6C6C6;
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
    color: #6E0F8A;
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
    color: #D1D1D1;
    margin-bottom: 10px;
    font-weight: 500;
  }

  img {
      margin-bottom: 50px;
      width: 50%;
    }
`;

export const Background = styled.div`
  background: url(${knifes}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
