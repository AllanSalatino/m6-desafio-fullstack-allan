import { useContext } from "react";
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <main>
      <FormLogin />
      <FormRegister />
      <button onClick={() => logOut()}>Sair</button>
    </main>
  );
};

export default Dashboard;
