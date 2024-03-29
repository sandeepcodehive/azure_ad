import React from 'react'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

function SignInButton() {
    const { instance } = useMsal();



    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch((e) => {
            console.error('Login error:', e);

        });

    };

    return (
        <div className="container">
            <button onClick={() => handleLogin()}>
                Sign with popup
            </button>
        </div>
    )
}

export default SignInButton