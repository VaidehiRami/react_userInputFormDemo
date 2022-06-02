
function Validate(values){
    let errors ={}

    if(!values.fname.trim()){
        errors.fname='First Name is Required !!'
    }
    if(!values.lname.trim()){
        errors.lname='Last Name is Required !!'
    }

    if(!values.email){
        errors.email='Email is Required !!'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Email is Invalid !!"
    }

    if(!values.pass){
        errors.pass='Password is Required !!'
    }else if(values.pass.length <6){
        errors.pass="Password must be 6 characters or more !!"
    }
    if(!values.repass){
        errors.repass='Password is Required !!'
    }else if(values.repass !== values.pass){
        errors.repass='Password do not match !!'
    }
    return errors;
}
export default Validate