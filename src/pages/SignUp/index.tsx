import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, AnimationContainer, Background } from './styles';

import Logo from '../../assets/NoPath.png';
import ValidationErrors from '../../utils/getValidationsErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

const SignUp: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  // const { handleLogin } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: object) => {
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

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon com o KnifeClub!',
        });

        history.push('/signin');
      } catch (err) {
        const errors = ValidationErrors(err);

        FormRef.current?.setErrors(errors);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="Logo" />
          <h2>Faça seu cadastro</h2>
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
          </Form>
          <Link to="/signin">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
