import React, { useCallback } from 'react';

import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/NoPath.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="Logo" />
        <h2>Faça seu logon</h2>
        <Form onSubmit={handleSubmit}>
          <Input icon={FiUser} type="text" name="user" placeholder="User" />
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
