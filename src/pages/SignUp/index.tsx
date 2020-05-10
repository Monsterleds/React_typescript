import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/NoPath.png';
import ValidationErrors from '../../utils/getValidationsErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      FormRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      const errors = ValidationErrors(err);

      FormRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="Logo" />
        <h2>Faça seu logon</h2>
        <Form ref={FormRef} onSubmit={handleSubmit}>
          <Input icon={FiUser} type="text" name="name" placeholder="Name" />
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
    </Container>
  );
};
export default SignUp;
