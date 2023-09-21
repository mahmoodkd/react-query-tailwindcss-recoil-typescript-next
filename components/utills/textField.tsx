import React from "react";
import {LoginStateType, TextFieldType} from "@/components/utills/interfaces";
import {useRecoilState} from "recoil";
import {userValues} from "@/components/utills/atoms";

function TextInput({name, title, style}: TextFieldType) {
    const [loginState, setLoginState] = useRecoilState(userValues);

    const onChange = (event) => {
        setLoginState((ps: LoginStateType) => ({...ps, [event.target.name]: event.target.value}));
    };

    return (
        <div>
            <label style={{minWidth: "130px"}}>{title}</label>
            <br />
            <input type={name === "password" ? "password" : "text"} style={{...style, minWidth: "130px"}} type="text"
                   name={name} value={loginState[name]} onChange={onChange} />
            <br />
        </div>
    );
}

export default TextInput