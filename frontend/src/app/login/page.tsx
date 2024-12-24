'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormLink from '../components/FormLink';
import { useAuth } from '../hooks/useAuth';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm<FormValues>();
  const { login, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      await login(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='sm:w-full py-4 px-4 md:flex bg-custom-gradient h-screen'>
      <div className='w-full lg:w-3/4 flex flex-col items-center justify-center h-4/5'>
        <h1 className='text-2xl text-center font-bold'>Fazer Login</h1>
        <div className='w-full md:w-2/4'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              name="email"
              control={control}
              label="Email"
              type="email"
              placeholder="Digite seu email"
              rules={{
                required: 'O campo email é obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Email inválido',
                },
              }}
            />
            <FormInput
              name="password"
              control={control}
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              rules={{ required: 'O campo senha é obrigatório' }}
            />
            <FormButton type="submit" isLoading={isLoading}>
              Entrar
            </FormButton>
            {error && <p className="text-red-500">{error}</p>}
            <FormLink
              text="Ainda não possui uma conta?"
              href="/registro"
            />
          </form>
        </div>
      </div>
      <div className='hidden lg:block w-3/5 bg-black rounded-2xl'>
        hi
      </div>
    </div>
  );
};

export default Login;