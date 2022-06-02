 import { useState,useEffect } from "react";
// import Validate from "../Validate";

 const useUser = (Callback,Validate) =>{
     const [values,setValues]=useState({
         fname:'',
         lname:'',
         email:'',
         pass:'',
         repass:''
     });
     
     const [errors,setError]=useState({})
     const [issubmitting,setIsSubmiting]=useState(false)

     const handleChange = (e) => {
        const name=e.target.name;
        const value=e.target.value;
         setValues({
             ...values,[name]:value
         });
         
     };

     const handleSubmit = (e) =>{
        e.preventDefault();
        setError(Validate(values));
        setIsSubmiting(true);
        console.log(values);
        
     }  
     useEffect( ()=>{
         if(Object.keys(errors).length===0 && issubmitting)
          {
            
             alert("We have received your request !!");
             
           }
     }) 

     return {handleChange,values,handleSubmit,errors};
 }
 export default useUser