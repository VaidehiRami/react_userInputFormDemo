import React from "react";
import './Form.css'
import useUser from "./hook/useUser"; 
import Validate from "./Validate";

function Forms(submitForm){

    const {handleChange,values,handleSubmit,errors}=useUser(submitForm,Validate);

    return(
        <>
        <div className='div-left'><span>User Registration Form </span></div>
       <div className="div_lef">
       <div className="login_info">
                        <form onSubmit={handleSubmit}>
                            <div>
                               
                                <input type="text" className="text-input" 
                                placeholder="First Name" name="fname" 
                                value={values.fname} onChange={handleChange}/>
                                {errors.fname && <p>{errors.fname}</p>}
                            </div>
                            <div>
                               
                                <input type="text" className="text-input" 
                                placeholder="Last Name" name="lname"
                                value={values.lname} onChange={handleChange}/>
                                {errors.lname && <p>{errors.lname}</p>}
                            </div>
                            <div>
                            
                                <input type="email" className="text-input"
                                 placeholder="Email" name="email"
                                 value={values.email} onChange={handleChange}/>
                                 {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div>
                                <input type="password" className="text-input-pwd" 
                                placeholder="Password" name="pass"
                                value={values.pass} onChange={handleChange}/>
                                {errors.pass && <p>{errors.pass}</p>}
                            </div>
                            <div>
                                <input type="password" className="text-input-pwd" 
                                placeholder="Re-Entere Password" name="repass"
                                value={values.repass} onChange={handleChange}/> 
                                {errors.repass && <p>{errors.repass}</p>}
                            </div>
                            <button className="primarybtn">Register</button><br/>
                            <div style={{ padding: '10px',margin: '10px'}}>
                            <span className="signup">Already have an Account ? Login  <a href='#'>here</a></span>
                            </div>
                           
                            
                        </form>    
                    </div>
                    
                    </div>         
        </>
    )

}
export default Forms