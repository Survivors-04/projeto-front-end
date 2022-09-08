import { ToastContainer } from "react-toastify";
import Context from "./Context/Context";
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
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
