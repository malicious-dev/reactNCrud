import React from 'react'
import {NavLink} from 'react-router-dom'

const Register = () => {
  return (
    <div className='container'>
  <NavLink to='/'>home</NavLink>   
  <form>
    <div className="row">
      
    
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>   

    </div>
  )
}

export default Register
