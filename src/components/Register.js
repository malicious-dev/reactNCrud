import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    

  const [inpval, setINP] = useState({
    name: '',
    email: '',
    age: '',
    mobile: '',
    work: '',
    add: '',
    desc: '',
  })

  const setdata = (e)=> {
    console.log(e.target.value)
    const {name, value} = e.target;
    setINP((preval)=>{
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, work, add, mobile, desc, age } = inpval;

    const res = await fetch("http://localhost:8003/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, email, work, add, mobile, desc, age
        })
    });

    const data = await res.json();
    
    if (res.status === 200) {
      toast.warn("successfully created", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    } else {
      toast.warn(data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }
}

  return (
    <div className='container'>
        <ToastContainer />

  <NavLink to='/'>home</NavLink>   
  <form action="/" method='post' className='mt-5'>
    <div className="row">
      

  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label className="form-label">Name</label>
    <input type="text" name="name" onChange={setdata} value={inpval.name} className="form-control" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label className="form-label">email</label>
    <input type="email" name="email" onChange={setdata} value={inpval.email} className="form-control" />
    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label className="form-label">age</label>
    <input type="number" name="age" onChange={setdata} value={inpval.age} className="form-control" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label  className="form-label">Mobile</label>
    <input type="text" name="mobile" onChange={setdata} value={inpval.mobile} className="form-control" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label className="form-label">Work</label>
    <input type="text" name="work" onChange={setdata} value={inpval.work} className="form-control" />
  </div>  
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label className="form-label">Address</label>
    <input type="text" name="add" onChange={setdata} value={inpval.add} className="form-control" />
  </div>  
  <div className="mb-3 col-lg-12 col-md-6 col-12">
    <label className="form-label">Description</label>
    <textarea type='text' onChange={setdata} value={inpval.desc} name='desc' className="form-control" id="" cols="30" rows="10"></textarea>
  </div>
  <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
  </div>
</form>   

    </div>
  )
}

export default Register
