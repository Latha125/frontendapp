import  React, {useState} from 'react';
 const Login =()=>{
     const [username, setUsername] = useState('');
     const [password, setPassword]= useState('');

     const handleUsernameChange =(e)=>{
        setUsername(e.target.value);
     }

     const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
     }

     const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);

     }

    return (
        <div className="container mt-3">

          <br></br><br></br>
            <h4 style= {{textAlign:"left"}}>Login Here</h4>
  
  <form>
    <div className="row">
      <div className="col">
        <input type="text"  onChange ={handleUsernameChange} className="form-control" placeholder="Enter username" name="username"></input>
      </div>
      <div className="col">
        <input type="password" onChange ={handlePasswordChange} className="form-control" placeholder="Enter password" name="password"></input>
      </div>

      <div className="col">
        <button onClick={handleSubmit} className='btn btn-primary'>Login</button>

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
export default Login;
