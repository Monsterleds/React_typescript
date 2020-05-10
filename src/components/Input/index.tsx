import React, { InputHTMLAttributes, useRef, useEffect, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputAttributes> = ({ icon: Icon, name, children, ...rest }) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!InputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value'
    })
  }, [])

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
        { Icon && <Icon size={20} /> }
        <input
        onFocus={handleInputFocus}
        onBlur={handleBlur}
        ref={InputRef} {...rest} />
    </Container>
);
}

export default Input;
