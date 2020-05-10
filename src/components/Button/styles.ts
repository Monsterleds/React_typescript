import styled from 'styled-components';

import { shade } from 'polished';

export const SubmitButton = styled.button`
    height: 50px;
    width: 320px;
    border-radius: 10px;
    border: 0;
    padding: 10px 40px;
    background-color: #620D7B;
    margin-top: 10px;
    color: #C6C6C6;
    font-weight: 500;
    transition: 0.2s;

    :hover {
      background-color: ${shade(0.2, '#620D7B')};
    }
`;
