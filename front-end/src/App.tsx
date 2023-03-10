import { ToastContainer } from "react-toastify";
import { PageRoutes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <PageRoutes />
    </div>
  );
}

export default App;
