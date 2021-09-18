import React from 'react';
import keys from '../../config/keys'


const LoginPage = () => {

    const googleLogin = () => {
        window.open('http://'+keys.serverApi+"/usuarios/app/auth/google", "_self");
    }

    return (
        <div>
            <div onClick={googleLogin}>Login Page</div>
        </div>
    )
}

export default LoginPage;