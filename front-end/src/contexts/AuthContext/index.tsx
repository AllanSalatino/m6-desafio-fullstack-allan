import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  ContactAdd,
  ContactAddNegative,
  deleteContactSuccess,
  LoginError,
  LoginSucess,
  RegisterError,
  RegisterSucess,
  EditContactError,
  EditContactSuccess,
} from "../../ToastContainer";

interface IClientProviders {
  children: ReactNode;
}

interface IClientContext {
  client: null | IClient;
  setClient: Dispatch<SetStateAction<null | IClient>>;
  contacts: IContactResponse[] | [];
  setContacts: Dispatch<SetStateAction<IContactResponse[] | []>>;
  idContact: string;
  setIdContact: Dispatch<SetStateAction<string>>;
  onlyOneContact: IContactResponse | undefined;
  setOnlyOneContact: Dispatch<SetStateAction<IContactResponse | undefined>>;
  onSubmitLogin: (data: ILogin) => void;
  onSubmitRegister: (data: IRegister) => void;
  logOut: () => void;
  onSubmitContact: (data: IContactRequired) => void;
  loadContacts: () => Promise<void>;
  onSubmitContactEdit: (data: IContactRequired) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
}

export interface IClient {
  id: number;
  name: string;
  email: string;
  password: string;
  telephone: string;
  registration_date: Date;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

interface IRegisterResponse {
  token: string;
  id: string;
}

export interface IContactResponse {
  id: string;
  name: string;
  email: string;
  telephone: string;
  registration_date: string;
}

export interface IContactRequired {
  name: string;
  email: string;
  telephone: string;
}

export const AuthContext = createContext<IClientContext>({} as IClientContext);

export function AuthProvider({ children }: IClientProviders) {
  const [client, setClient] = useState<null | IClient>(null);
  const [contacts, setContacts] = useState<[] | IContactResponse[]>([]);
  const [onlyOneContact, setOnlyOneContact] = useState<
    IContactResponse | undefined
  >();
  const [idContact, setIdContact] = useState<string>("");
  const navigate = useNavigate();

  const onSubmitLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@token", response.data.token);
        localStorage.setItem("@id", response.data.id);
        setClient(response.data);
        loadClient();
        LoginSucess();
      })
      .catch((er) => {
        console.error(er);
        LoginError();
      });
  };
  const onSubmitRegister = (data: IRegister) => {
    api
      .post<IRegisterResponse>("/client", data)
      .then((res) => {
        if (res.data) {
          setTimeout(() => {
            console.log("Cadastro realizado com sucesso!");
            RegisterSucess();
          }, 1000);
        }
      })
      .catch((er) => {
        console.error(er);
        RegisterError();
      });
  };

  const onSubmitContact = (data: IContactRequired) => {
    api
      .post<IContactResponse>("/contact", data)
      .then((res) => {
        if (res.data) {
          setTimeout(() => {
            console.log("Contato adicionado com sucesso!");
            ContactAdd();
          }, 1000);
        }
      })
      .catch((er) => {
        console.error(er);
        ContactAddNegative();
      });
  };

  const onSubmitContactEdit = async (data: IContactRequired) => {
    const tokenResponse = localStorage.getItem("@token");

    let dataUpdate: IContactRequired = {
      name: data.name ? data.name : onlyOneContact!.name,
      email: data.email ? data.email : onlyOneContact!.email,
      telephone: data.telephone ? data.telephone : onlyOneContact!.telephone,
    };

    if (tokenResponse) {
      try {
        api.defaults.headers.authorization = `Bearer ${tokenResponse}`;
        api
          .patch<IContactResponse>(`/contact/${idContact}`, dataUpdate)
          .then((res) => {
            if (res.data) {
              setTimeout(() => {
                console.log("Contato atualizado com sucesso!");
                EditContactSuccess();
              }, 1000);
            }
          });
      } catch (er) {
        console.error(er);
        EditContactError();
      }
    }
  };

  const loadClient = async () => {
    const tokenResponse = localStorage.getItem("@token");
    const idResponse = localStorage.getItem("@id");

    if (tokenResponse) {
      try {
        api.defaults.headers.authorization = `Bearer ${tokenResponse}`;
        const { data } = await api.get(`/client/${idResponse}`);

        setClient(data);
        navigate("/client");
      } catch (er) {
        console.error(er);
      }
    }
  };

  const loadContacts = async () => {
    const tokenResponse = localStorage.getItem("@token");

    if (tokenResponse) {
      try {
        api.defaults.headers.authorization = `Bearer ${tokenResponse}`;
        const { data } = await api.get(`/contact`);

        setContacts(data);
      } catch (er) {
        console.error(er);
      }
    }
  };

  useEffect(() => {
    loadContacts();
    loadClient();
  }, []);

  const logOut = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@id");

    navigate("/");
  };

  const deleteContact = async (id: string) => {
    const tokenResponse = localStorage.getItem("@token");

    if (tokenResponse) {
      try {
        api.defaults.headers.authorization = `Bearer ${tokenResponse}`;
        await api.delete(`/contact/${id}`);
        deleteContactSuccess();
      } catch (er) {
        console.error(er);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        client,
        setClient,
        contacts,
        setContacts,
        onSubmitLogin,
        onSubmitRegister,
        logOut,
        onSubmitContact,
        loadContacts,
        idContact,
        setIdContact,
        onSubmitContactEdit,
        deleteContact,
        onlyOneContact,
        setOnlyOneContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
