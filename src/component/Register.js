import React, { useState } from "react";
import Forms from "./Forms";
import FormSucess from "./FormSucess";

function Register(){
    const [issubmmited,setIsSubmmited]=useState(false)

    function submitForm(){
        setIsSubmmited(true)
    }
    return(
        <div>
            
            {!issubmmited ?<Forms submitForm={submitForm}/> :<FormSucess/>}
            {/* <FormSucess/> */}
        </div>
    )
}
export default Register