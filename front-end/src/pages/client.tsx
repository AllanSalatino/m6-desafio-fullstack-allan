import { useContext, useState } from "react";
import FormContact from "../components/FormContact";
import FormContactEdit from "../components/FormContactEdit";
import { AuthContext, IContactResponse } from "../contexts/AuthContext";
import { MainClient } from "./style";
const Client = () => {
  const {
    logOut,
    client,
    contacts,
    setIdContact,
    deleteContact,
    setOnlyOneContact,
  } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <MainClient>
      <h1>Área do cliente</h1>
      <div>
        <aside>
          <div>
            <h2>Cliente: {client?.name}</h2>
            <p>Email: {client?.email}</p>
            <span>Telefone: {client?.telephone}</span>
            <button onClick={() => logOut()}>Sair</button>
          </div>
          {isEdit ? <FormContactEdit /> : <FormContact />}
        </aside>
        <ul>
          <h2>Lista de contatos</h2>
          {contacts.map((contact, index) => {
            return (
              <div key={index}>
                <div>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                  <p>{contact.telephone}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setOnlyOneContact(contact);
                      setIdContact(contact.id);
                      setIsEdit(true);
                    }}
                    style={{
                      border: "2px solid greenyellow",
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                      setTimeout(() => window.location.reload(), 3000);
                    }}
                    style={{
                      border: "2px solid red",
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </MainClient>
  );
};

export default Client;
