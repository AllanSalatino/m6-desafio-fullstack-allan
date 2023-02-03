import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { api } from "../../services/api";

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

  const onSubmitLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@token", response.data.accessToken);
        localStorage.setItem("@id", response.data.client.id);
        setClient(response.data.client);
        setTimeout(() => {}, 3000);
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
          setTimeout(() => {}, 3000);
        }
      })
      .catch((er) => {
        console.error(er);
      });
  };

  useEffect(() => {
    const loadClient = async () => {
      const tokenResponse = localStorage.getItem("@token");
      const idResponse = localStorage.getItem("@id");

      if (tokenResponse) {
        try {
          const { data } = await api.get(`/client/${idResponse}`);

          setClient(data);
        } catch (er) {
          console.error(er);
        }
      }
    };
    loadClient();
  }, []);

  const logOut = () => {
    localStorage.removeItem("@token");
    window.location.reload();
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
