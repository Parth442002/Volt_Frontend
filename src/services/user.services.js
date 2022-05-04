import Api from '../Api/Api'


export async function UserSignUp(body){
  const response=await Api.post(`/auth/registration/`,body)
  return response;
}

export async function UserSignIn(body){
  const response=await Api.post(`/auth/login/`,body)
  return response;
}
