
import { toast } from "react-toastify";
export async function login (authDetail){

    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authDetail)
        };
          const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
          if (!response.ok) {
  throw new Error(` ${response.statusText} Status: ${response.status}`);
}
          const data = await response.json();
            if (data.accessToken)
      {
              sessionStorage.setItem("token", data.accessToken);
          sessionStorage.setItem("cbid", data.user.id);
    
          toast.success("Registered Successfully!");
          
    
        };
    return data;
}

export async function register (authDetail){
          const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authDetail)
    };
      const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
         if (!response.ok) {
  throw new Error(`HTTP error! ${response.statusText} Status: ${response.status}`);
}
      const data = await response.json();

      data.accessToken
  ? (() => {
      toast.success("Registered Successfully!");
      sessionStorage.setItem("token", data.accessToken);
      sessionStorage.setItem("cbid", data.user.id);
    })()
  : toast.error(data.message);
  return data;
}

export function logout (){
        sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}