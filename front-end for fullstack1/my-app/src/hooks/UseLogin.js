import {  useState } from "react";
import { useNavigate } from "react-router-dom";



function useLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    async function handleSubmitLogin(e){
        e.preventDefault();
          try {
            const response = await fetch("http://localhost:5000/login", {
              method: "POST",
              body: JSON.stringify({
                email,
                password
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              
            });
            const data = await response.json();
            console.log(data)
            if(data.status==="fail"){
              navigate('/')
            }else{
              setUser(data);
              localStorage.setItem('token', data.jwt);
              console.log(data, "data");
              if(data.role === 'admin'){
                  console.log(user,'d');
                  navigate('/admin');
                }else{
                  navigate('/products')
                }
            }
            
          } catch (err) {
            console.log(err);
          }
          setEmail('');
          setPassword('');
        }
        console.log(user)
        return {
            email,
            setEmail,
            password,
            setPassword,
            handleSubmitLogin,
            user
        }
}

export default useLogin