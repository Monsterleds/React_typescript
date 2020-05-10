import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';

import Logo from '../../assets/NoPath.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationError from '../../utils/getValidationsErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Email inválido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationError(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />
        <h2>Faça seu logon</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input icon={FiMail} type="text" name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            type="password"
            name="password"
            placeholder="Password"
          />

          <Button type="submit">Entrar</Button>
          <a href="forget">Esqueceu a senha?</a>
        </Form>
        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
