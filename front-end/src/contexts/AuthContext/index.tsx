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

interface IClientProviders {
  children: ReactNode;
}

interface IClientContext {
  client: null | IClient;
  setClient: Dispatch<SetStateAction<null | IClient>>;
  onSubmitLogin: (data: ILogin) => void;
  onSubmitRegister: (data: IRegister) => void;
  logOut: () => void;
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
  acessToken: string;
  client: IClient;
}

export const AuthContext = createContext<IClientContext>({} as IClientContext);

export function AuthProvider({ children }: IClientProviders) {
  const [client, setClient] = useState<null | IClient>(null);
  const navigate = useNavigate();

  const onSubmitLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@token", response.data.token);
        localStorage.setItem("@id", response.data.id);
        setClient(response.data);
        setTimeout(() => {
          loadClient();
        }, 1000);
      })
      .catch((er) => {
        console.error(er);
      });
  };
  const onSubmitRegister = (data: IRegister) => {
    api
      .post<IRegisterResponse>("/client", data)
      .then((res) => {
        if (res.data) {
          setTimeout(() => {
            console.log("sucesso!");
          }, 1000);
        }
      })
      .catch((er) => {
        console.error(er);
      });
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

  useEffect(() => {
    loadClient();
  });

  const logOut = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@id");

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        client,
        setClient,
        onSubmitLogin,
        onSubmitRegister,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
