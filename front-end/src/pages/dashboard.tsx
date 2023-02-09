import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import { MainTag } from "./style";

const Dashboard = () => {
  return (
    <MainTag>
      <FormLogin />
      <FormRegister />
    </MainTag>
  );
};

export default Dashboard;
