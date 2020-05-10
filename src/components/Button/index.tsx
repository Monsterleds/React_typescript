import React, { ButtonHTMLAttributes } from 'react';

import { SubmitButton } from './styles';

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonAttributes> = ({ children, ...rest }) => (
    <SubmitButton {...rest}>{ children }</SubmitButton>
);

export default Button;
