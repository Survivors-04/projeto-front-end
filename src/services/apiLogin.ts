import Api from "./api";

export interface IApiLogin{
email?: string,
password?:string,
 }
 const ApiLogin = (data:IApiLogin) => {
  Api.post("/login",data)
 .then((response)=>{
  console.log(response)
  if(response.status === 200){
    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN:", response.data.accessToken)
    window.localStorage.setItem("@USERID:", response.data.user.id)
  }
 })
 };

 export default ApiLogin

