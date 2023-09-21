import React from "react";
import {useRecoilValue} from 'recoil';
import {getUserValues, getUserValuesComplete} from "@/components/utills/selectors";
import TextInput from "@/components/utills/textField";


function Login() {
    const values = useRecoilValue(getUserValues);
    const valuesComplete = useRecoilValue(getUserValuesComplete);

    function submitForm(event) {
        event.preventDefault()
        console.log({valuesComplete})
    }

    return (
        <div>
            <form onSubmit={submitForm} style={{backgroundColor: "#000", color: "#fff", fontSize: "18px"}}>
                <TextInput title="Username" style={{margin: "5px 10px", color: "#666"}} name="name" />
                <TextInput title="Password" style={{margin: "5px 10px", color: "#666"}} name="password" />
                <button style={{background: "#ffa300", color: "#fff", margin: "5px 10px"}}>
                    Submit
                </button>
                <br />
                {values}
            </form>
        </div>
    )
}

export default Login