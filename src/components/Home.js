import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container">
     <div className="add_btn mt-2">
      <button className="btn btn-primary">Add data</button>
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@mark.com</td>
      <td>Webdeveloper</td>
      <td>1234567890</td>
      <td className="d-flex justify-content-between">
        <button className="btn btn-success">read</button>
        <button className="btn btn-primary">update</button>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Home