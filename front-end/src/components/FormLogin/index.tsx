import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext, ILogin } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Form, Input } from "../../styles/Forms";

const FormLogin = () => {
  const { onSubmitLogin } = useContext(AuthContext);

  const Schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email valido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(Schema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmitLogin)}>
      <div>
        <h3>Email:</h3>
        <Input
          type="text"
          placeholder="Digite seu email aqui"
          required
          {...register("email")}
        />
        {errors.email?.message}
      </div>
      <div>
        <h3>Password:</h3>
        <Input
          type="text"
          placeholder="Digite sua senha aqui"
          required
          {...register("password")}
        />
        {errors.email?.message}
      </div>
      <button type="submit">Entrar</button>
    </Form>
  );
};

export default FormLogin;
