import { useState } from 'react'
import useLogin from './hooks/UseLogin'
import { useNavigate } from "react-router-dom";
import { TextField,Button, Box,Typography } from '@mui/material'
import React from 'react'

const Auth = () => {
  const {email,password, setEmail,setPassword,handleSubmitLogin} = useLogin();
  const navigate = useNavigate();
  // console.log(user);
    const[isSignup,setIsSignup]=useState(false);
  return (
    <div>
        <form>
            <Box  display="flex" 
            flexDirection={"column"} 
            maxWidth={400} alignItems="center"
            justifyContent={"center"} 
            margin="auto"marginTop={5} 
            padding={3} 
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"} sx={{":hover":{boxShadow:'10px 10px 20px #ccc'}}}>
                
            <Typography variant="h2"padding={3} 
            textAlign={"center"}>{isSignup ? "Signup":"Login"}</Typography>

            {isSignup && <TextField margin="normal" 
            type={'text'} variant='outlined' 
            placeholder='name'/>}
                
            <TextField margin="normal" 
            type={'email'} variant='outlined' placeholder='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
                
            <TextField margin="normal" 
            type={'password'} variant='outlined' placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
                
            <Button  onClick={handleSubmitLogin}  sx={{marginTop: 3, borderRadius: 3}}
             variant="contained" color="warning">{isSignup ? "Signup": "Login"}
             </Button>
            <Button onClick={()=>setIsSignup(!isSignup)} sx={{marginTop: 3, borderRadius: 3}} >change to {isSignup ? "Login": "Signup"}</Button>
            </Box>
        </form>
    </div>
  )
}

export default Auth