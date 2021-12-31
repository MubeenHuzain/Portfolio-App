import React from "react";
import "./login.css";

export default function Login() {
    return (
        <div className="login">
            Login <br /> <br/> <br />
            <div>
                Email<br />
                <input
                type="text"
                />
            </div>
            <div>
                Password <br />
                <input
                type="password"
                />
            </div><br />

            <input 
            type="button"
            value="Login"
            />

        </div>
    );
}
