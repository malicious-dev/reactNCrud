import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const View = () => {

  const {id} = useParams("");

  const [getuserdata, setUserdata] = useState([""])

  const getdata = async () => {

  
  
    const res = await fetch(`https://crudnodej.herokuapp.com/users/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
      
    });
  
    const data = await res.json();
    // console.log(data);
  
    if (res.status === 404 || !data) {
        console.log("error ");
        alert("error");
  
    } else {
      setUserdata(data)
        console.log("getdata")
  
    }
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <div className="container">
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Profile</h5>
        <p className="card-text">{getuserdata.name? getuserdata.name : "Loading..."}</p>
        <p className="card-text">{getuserdata.email? getuserdata.email :  <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open
>
  <CircularProgress color="inherit" />
</Backdrop>}</p>
        <p className="card-text">{getuserdata.age}</p>
        <p className="card-text">{getuserdata.mobile}</p>
        <p className="card-text">{getuserdata.work}</p>
        <p className="card-text">{getuserdata.add}</p>
        <p className="card-text">{getuserdata.desc}</p>
        <button className="btn btn-primary">Edit</button>
     
        {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default View