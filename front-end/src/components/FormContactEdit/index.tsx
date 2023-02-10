import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext, IContactRequired } from "../../contexts/AuthContext";
import { Form, Input } from "../../styles/Forms";
import { useContext, useEffect, useState } from "react";

const FormContactEdit = () => {
  const { onSubmitContactEdit, onlyOneContact } = useContext(AuthContext);
  const [handleName, setHandleName] = useState<string | undefined>();
  const [handleEmail, setHandleEmail] = useState<string | undefined>();
  const [handleTelephone, setHandleTelephone] = useState<string | undefined>();

  const handleChangeName = (event: any) => {
    setHandleName(event.target.value);
  };
  const handleChangeEmail = (event: any) => {
    setHandleEmail(event.target.value);
  };
  const handleChangeTelephone = (event: any) => {
    setHandleTelephone(event.target.value);
  };

  useEffect(() => {
    setHandleName(onlyOneContact?.name);
    setHandleEmail(onlyOneContact?.email);
    setHandleTelephone(onlyOneContact?.telephone);
  }, []);

  const Schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Digite um email valido"),
    telephone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRequired>({
    resolver: yupResolver(Schema),
  });

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitContactEdit)}>
        <h2>Atualizar contato</h2>

        <div>
          <h3>Nome:</h3>
          <Input
            type="text"
            placeholder="Digite seu nome aqui"
            {...register("name")}
            value={handleName}
            onChange={handleChangeName}
          />
        </div>
        <div>
          <h3>Email:</h3>
          <Input
            type="text"
            placeholder="Digite seu email aqui"
            {...register("email")}
            value={handleEmail}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <h3>Telefone:</h3>
          <Input
            type="text"
            placeholder="Digite seu telefone aqui"
            {...register("telephone")}
            value={handleTelephone}
            onChange={handleChangeTelephone}
          />
        </div>
        <button
          type="submit"
          onClick={() => setTimeout(() => window.location.reload(), 3000)}
        >
          Adicionar
        </button>
      </Form>
    </>
  );
};

export default FormContactEdit;
