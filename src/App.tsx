import Context from "./context/Context";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Context>
        <Global />
        <Home />
        <Login />
      </Context>
    </>
  );
}

export default App;
