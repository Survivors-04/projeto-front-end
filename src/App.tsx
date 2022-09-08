import { ToastContainer } from "react-toastify";
import Context from "./context/Context";
import MainRoutes from "./routes/mainRoutes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Context>
        <Global />
        <MainRoutes />
      </Context>
      <ToastContainer
        toastStyle={{
          backgroundColor: "var(--color-gray-3)",
          color: "var(--color-gray-0)",
        }}
      />
    </>
  );
}

export default App;
