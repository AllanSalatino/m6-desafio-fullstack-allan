import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormClienttEdit from "../components/FormClientEdit";
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
    deleteClient,
  } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const navigate = useNavigate();

  const SelectForm = () => {
    if (isUpdate) {
      return <FormClienttEdit />;
    } else if (isEdit) {
      return <FormContactEdit />;
    } else {
      return <FormContact />;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <MainClient>
      <h1>Área do cliente</h1>
      <div>
        <aside>
          <div>
            <h2>Cliente: {client?.name}</h2>
            <p>Email: {client?.email}</p>
            <span>Telefone: {client?.telephone}</span>
            <div>
              <button
                style={{ backgroundColor: "orange" }}
                onClick={() => logOut()}
              >
                Sair
              </button>
              <button
                style={{ backgroundColor: "grey" }}
                onClick={() => {
                  setIsUpdate(true);
                  setIsEdit(false);
                }}
              >
                Editar
              </button>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => deleteClient(client!.id)}
              >
                Delete usuário
              </button>
            </div>
          </div>
          {SelectForm()}
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
