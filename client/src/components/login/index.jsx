import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api';

const Login = ({ setUser, setSecret }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [triggerLogin, resultLogin] = usePostLoginMutation();
    const [triggerSignUp] = usePostSignUpMutation();

    const handleLogin = () => {
        try {
            triggerLogin({ username, password })    
        } catch (error) {
            if (error) {
                console.log(error);
                toast.error('Register as New User!');    
            }
        }
    }

    const handleRegister = () => {
        try {
            triggerSignUp({ username, password })
            toast.success('Success: New User Registered! Please Login to use Chat App.')
            setIsRegister(!isRegister)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (resultLogin.data?.response) {
            setUser(username);
            setSecret(password);
            toast.success('User Login Successful');
        } else if (resultLogin.data?.response.error) {
            toast.error('Register New User!');
        }
    }, [resultLogin.data]) //eslint-disable-line
    
    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2 className='title'>
                    The Republic
                </h2>
                <h5 className='title'>
                    OpenAI Chat Application
                </h5>
                <p className='register-change' onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Already a User?" : "New User?"}
                </p>
                <div>
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <input 
                        className='login-input' 
                        type='password' 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className='login-actions'>
                    {isRegister ? (
                        <button type='button' onClick={handleRegister}>
                            Register
                        </button>
                    ) : (
                        <button type='button' onClick={handleLogin}>
                            Login
                        </button>
                    )}
                </div>
                <h5 className='ce-chat-card-unread ce-chat-card'>
                    Powered By: OpenAI Chat-GPT 3.5-Turbo Model
                </h5>
                <p className='ce-chat-engine'>
                    2023 © Min K.K | All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Login;