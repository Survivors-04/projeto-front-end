import ModalProvider from "./context/ModalContext";
import Home from "./pages/Home";
import Global from "./style/Global";

function App() {
  return (
    <>
      <ModalProvider>
        <Global />
        <Home />
      </ModalProvider>
    </>
  );
}

export default App;
