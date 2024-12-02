import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: '852670129261-dvjlpe71nf4eba15bei65e68caar5536.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(
            document.getElementById("googleSignInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        const details = jwtDecode(response.credential);
        localStorage.setItem('userdetails',JSON.stringify(details))
    };

    return <div id="googleSignInDiv">Google sign</div>;
};

export default GoogleAuth;
