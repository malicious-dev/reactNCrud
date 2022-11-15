import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Home = () => {
  const {id} = useParams("");

  const [getuserdata, setUserdata] = useState([""])
  const getdata = async (e) => {
  
  
    const res = await fetch("http://localhost:8003/getdata", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
      
    });
  
    const data = await res.json();
    console.log(data);
  
    if (res.status === 404 || !data) {
        console.log("error ");
        alert("error");
  
    } else {
      setUserdata(data)
        console.log("getdata")
  
    }
  }

  



  const deleteuser = async (id) => {
  
  
    const res = await fetch(`http://localhost:8003/delete/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
      
    });
  
    const data = await res.json();
  
    if (res.status === 404) {
      toast.success(data, {
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
        
    getdata();
    toast.success(data, {
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

  useEffect(() => {
    getdata();
  },[])

  return (
    <div>
        <ToastContainer />

      <div className="container">
     <div className="add_btn mt-2 mb-2">
      <NavLink className="btn btn-primary" to='/register'>Add data</NavLink>
      </div> 
      <table className="table">
  <thead>
    <tr className="table-dark">
      <th scope="col">id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">job</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
      getuserdata.map((e, id) => {
        return (
          <>
           <tr>
      <th scope="row">{id + 1}</th>
      <td>{e.name? e.name:<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open
>
  <CircularProgress color="inherit" />
</Backdrop>}</td>
      <td>{e.email? e.email: 'Loading...'}</td>
      <td>{e.work? e.work: 'Loading...'}</td>
      <td>{e.mobile? e.mobile: 'Loading...'}</td>
      <td className="d-flex justify-content-between">
        <NavLink to={`view/${e._id}`} className="btn btn-success"><i className="fa-solid fa-eye"></i></NavLink>
        <button className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=>deleteuser(e._id)} className="btn btn-warning"><i className="fa-solid fa-trash"></i></button>
      </td>
    </tr>
          </>
        )
      })
    }
   
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Home