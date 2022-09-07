import {
  createContext,
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import api from "../services/api";

interface IUserProvider {
  children: ReactNode;
}
export interface IUserContext {
  user: iUser,
  setUser: React.Dispatch<React.SetStateAction<iUser>>,
  setIsLogged: Dispatch<SetStateAction<boolean>>,
  isLogged: boolean,
  setStatus:Dispatch<SetStateAction<boolean>>,
  notify:MouseEventHandler<HTMLButtonElement>,
}

export interface iUser {
  id: number;
  gold: number;
  email: string;
  name: string;
  password: string;
  dateRoll: number;
  
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<iUser>({} as iUser);
  const [isLogged, setIsLogged] = useState(false);
  const [status,setStatus] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@USERID");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          setIsLogged(true);

          const { data } = await api.get(`/Users/${userID}`);

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    loadUser();
  }, []);


  const notify = (data:any) => {
   
       data?toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
       :toast.error("ops, Algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  };

  return (
    <UserContext.Provider value={{ user, isLogged, setUser, setIsLogged,setStatus,notify }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
