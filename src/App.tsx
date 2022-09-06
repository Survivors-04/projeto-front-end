import Context from "./Context/Context";
import Register from "./pages/Register";
import MainRoutes from "./routes/mainRoutes";
import Global from "./style/Global";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    
      <Context>
        <Global />
        <ToastContainer/>
        <MainRoutes /> 
       
      </Context>
    </>
  );
}

export default App;
