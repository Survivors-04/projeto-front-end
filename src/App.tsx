import Context from "./Context/Context";
import MainRoutes from "./routes/mainRoutes";
import Global from "./style/Global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Context>
        <Global />
        <MainRoutes />
        <ToastContainer/>
      </Context>
    </>
  );
}

export default App;
