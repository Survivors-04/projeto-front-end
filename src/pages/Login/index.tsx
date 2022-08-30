import { ContainerLogin } from "./Login"


export const Login = ()=>{
return(
        
           <ContainerLogin>
            <header/>
            <main className="main">
                <h2 className="title">Login</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />

                    <button type="submit">Entrar</button>
                </form>

                <div className="register">
                    <p>Ainda não possui uma conta?</p>
                    <img src="" alt="" />
                    <button>Cadastrar</button>
                    
                </div>
            </main>
           </ContainerLogin>
        
    )   
}
