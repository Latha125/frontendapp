import  React, {useState} from 'react';
import APIHOC from '../../HOCs/APIHOC/APIHOC';

import {API} from '../../utils/constants';
 const Register =(props)=>{
     const [username, setUsername] = useState('');
     const [email, setEmail]= useState('');
     const [password, setPassword]= useState('');

    //  const [body, setBody]= useState(

    //  )

     const handleUsernameChange =(e)=>{
        setUsername(e.target.value);
     }

     const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
     }
     const handleEmailChange =(e)=>{
        setEmail(e.target.value);
     }

     const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);
        console.log("email", email);
        console.log("props", props);

        var body= {
            username:username,
            password:password,
            email: email,
            userId: parseInt(localStorage.getItem("counter"))+1
        }
        props.postRequest(API.register, body).then (
            response =>{
                console.log("response", response);

            },
            error=>{
                console.log("error", error);
            }
        )
     }

    return (
        <div className="container mt-3">
            <br></br><br></br>
            <h4 style= {{textAlign:"left"}}>Register Here</h4>
  
  <form>
    <div className="row">
      <div className="col">
        <input type="text"  onChange ={handleUsernameChange} className="form-control" placeholder="Enter username" name="username"></input>
      </div>
      <div className="col">
        <input type="password" onChange ={handlePasswordChange} className="form-control" placeholder="Enter password" name="password"></input>
      </div>
      <div className="col">
        <input type="email"  onChange ={handleEmailChange} className="form-control" placeholder="Enter email" name="username"></input>
      </div>

      <div className="col">
        <button onClick={handleSubmit} className='btn btn-primary'>Register</button>

      </div>
    </div>
  </form>
</div>
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <label htmlFor='username'>Username:</label>
        //         <input type="text" id="username" value={username}  placeholder='enter username'
        //         onChange={handleUsernameChange}></input>
                
        //     </div><br></br>
        //     <div>
        //     <label htmlFor='password'>Password:</label>
        //     <input type="text" id="password" value={password} placeholder='enter password'
        //     onChange={handlePasswordChange}>
                
        //     </input>
        //     </div>
        //     <button type="submit">Login</button>
        
    )
 }
export default APIHOC(Register, null);
