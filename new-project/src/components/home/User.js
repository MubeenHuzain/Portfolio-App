import React from "react";
import "./user.css";

export default function User() {
    return (
        <div className="user">
            
        <div>
            User Registration <br /> <br/>
            
            <div>
                firstname <br />
                <input
                type="password"
                />
            </div><br />

            <div>
                lastname <br />
                <input
                type="password"
                />
            </div><br />
            <div>
                Email<br />
                <input
                type="text"
                />
            </div> <br />
            <div>
                Password <br />
                <input
                type="password"
                />
            </div><br />

            <input 
            type="button"
            value="User Registration"
            /> <br /> <br />

        </div>
        </div>
    );
}
