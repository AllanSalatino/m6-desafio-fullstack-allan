import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import { MainDashboard } from "./style";

const Dashboard = () => {
  return (
    <MainDashboard>
      <FormLogin />
      <FormRegister />
    </MainDashboard>
  );
};

export default Dashboard;
