import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext, IRegister } from "../../contexts/AuthContext";
import { Form, Input } from "../../styles/Forms";
import { useContext } from "react";

const FormRegister = () => {
  const { onSubmitRegister } = useContext(AuthContext);

  const Schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email valido"),
    password: yup.string().required("Senha obrigatória"),
    telephone: yup.string().required("Telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(Schema),
  });

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitRegister)}>
        <h2>Cadastro</h2>

        <div>
          <h3>Nome:</h3>
          <Input
            type="text"
            placeholder="Digite seu nome aqui"
            required
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <h3>Email:</h3>
          <Input
            type="text"
            placeholder="Digite seu email aqui"
            required
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <h3>Password:</h3>
          <Input
            type="text"
            placeholder="Digite sua senha aqui"
            required
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <h3>Telefone:</h3>
          <Input
            type="text"
            placeholder="Digite seu telefone aqui"
            required
            {...register("telephone")}
          />
          <span>{errors.telephone?.message}</span>
        </div>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default FormRegister;
