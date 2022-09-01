import { createContext, ReactNode} from "react";

interface IUserProvider{
    children: ReactNode;
  }
export interface IUserContext{
  Login:(arg:Object)=>void
}
export const UserContext = createContext({} as IUserContext)
const  UserProvider=({children}:IUserProvider) => {
  const Login = ()=>{}

  return (
    <UserContext.Provider value={{Login}}>
      {children}
    </UserContext.Provider>
    
  )
};

export default UserProvider;
