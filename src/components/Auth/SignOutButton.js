import React from 'react'
import { useMsal } from "@azure/msal-react";


function SignOutButton() {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/signin",
            mainWindowRedirectUri: "/signin",
        });

    };

    return (
        <div className="container">
            <button onClick={() => handleLogout()}>
                Sign out with popup
            </button>
        </div>
    )
}

export default SignOutButton