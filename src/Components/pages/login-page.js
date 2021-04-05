import React from "react";
import {Redirect} from "react-router-dom";
const LoginPage = ({isLoggedOn, onLogin}) => {

    if (isLoggedOn) {
        return <Redirect to="/"/>
    }

        return (
            <div className="jumbotron">
                <p>Login to see secret page</p>
                <button className="btn btn-primary" onClick={onLogin}>Login</button>
            </div>
        )
    }



export default LoginPage;