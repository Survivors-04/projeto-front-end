import ModalProvider from "./context/ModalContext";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Global from "./style/Global";

function App() {
  return (
    <>
     <ModalProvider>
        <Global />
        <Home />
        <Login />
      </ModalProvider>
    </>
  );
}

export default App;
