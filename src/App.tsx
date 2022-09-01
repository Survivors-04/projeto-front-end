import Context from "./Context/Context";
import Register from "./pages/Register";
import MainRoutes from "./routes/mainRoutes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Context>
        <Global />
         <MainRoutes /> 
       
      </Context>
    </>
  );
}

export default App;
