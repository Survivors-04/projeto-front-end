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
      <ToastContainer/>
    </>
  );
}

export default App;
