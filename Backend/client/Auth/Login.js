import axios from "axios"
import { useState } from "react"
import { baseURI, loginURI } from "../Config/Conf"

const Login = ({username, password}) => {
    const [response,setResponse] = useState();
    axios(
      {url:baseURI+loginURI,
        method: 'POST',
        data: {username,password}
      }
  ).then(res => {
      setResponse(res.data)
      console.log(res);
  })
  return response;
}

export default Login
