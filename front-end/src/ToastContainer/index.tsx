import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginError = () => {
  toast.error("Email ou senha incorretos!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};
export const LoginSucess = () => {
  toast.success("Login efetuado com sucesso!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const RegisterSucess = () => {
  toast.success("Conta criada com sucesso!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const RegisterError = () => {
  toast.error("Ops, algo deu errado!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};

export const ContactAdd = () => {
  toast.success("Contato adicionado!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};
export const ContactAddNegative = () => {
  toast.error("Falha ao adicionar contato!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const EditContactSuccess = () => {
  toast.success("Contato editado!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const EditContactError = () => {
  toast.error("Falha ao editar contato!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const EditClientSuccess = () => {
  toast.success("Cliente editado!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const EditClientError = () => {
  toast.error("Falha ao editar cliente!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const deleteContactSuccess = () => {
  toast.success("Contato excluido!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const deleteClientSuccess = () => {
  toast.success("Cliente excluido!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};
