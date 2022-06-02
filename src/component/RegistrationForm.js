import React, { useState } from "react";
import '../App.css'

function RegistrationForm(){
    const [userInput,setuserInput]=useState({
            usernm:'',
            email:'',
            phone:'',
            pass:''

        });

        const [records,setRecord]=useState([]);
    const handleInput =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
      
        setuserInput({...userInput,[name]:value})
        
    }
    const submitHandle =(e)=>{
        e.preventDefault();
        const newEntry=({...userInput, id:new Date().getTime.toString()});
        console.log(records);
        setRecord([...records,newEntry]);
        console.log(records)

        setuserInput({usernm:'',email:'',phone:'',pass:''})
      


    }
    return(
        <>
       <div style={{margin:'20px',padding:'10px'}}>
            <form onSubmit={submitHandle}>
                <div>
                    <label htmlFor="username">Name</label>
                    <input type='text' className="input-text"
                     id="usernm" 
                     value={userInput.usernm}
                     onChange={handleInput}
                     name="usernm"></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' className="input-text"
                     id="email" 
                     value={userInput.email}
                     onChange={handleInput}
                     name="email"></input>
                </div>
                <div>
                    <label htmlFor="phone">Phome</label>
                    <input type='number'className="input-text"
                     id="phone"
                     value={userInput.phone}
                     onChange={handleInput}
                     name="phone"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' className="input-pwd"
                     id="pass" 
                     value={userInput.pass}
                     onChange={handleInput}
                     name="pass"></input>
                </div>
                <button type="submit">Register</button>
            </form>
            </div>
            <div>
                {
                    records.map((curvalue)=>{
                        const {id,usernm,email,phone,pass}=curvalue;
                        return(
                            <div key={id}>
                                <p>{usernm}</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                                <p>{pass}</p>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}
export default RegistrationForm