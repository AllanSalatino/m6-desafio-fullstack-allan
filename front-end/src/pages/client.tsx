import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Client = () => {
  const { logOut, client } = useContext(AuthContext);
  return (
    <main>
      <h1>Área do cliente</h1>
      <div>
        <h2>Cliente: {client?.name}</h2>
        <p>Email: {client?.email}</p>
        <span>Telefone: {client?.telephone}</span>
      </div>
      <button onClick={() => logOut()}>Sair</button>
    </main>
  );
};

export default Client;
