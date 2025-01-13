import './Practice.css';
import React, { useEffect, useState } from 'react';
import { PiX } from 'react-icons/pi';



const Practice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getuser')
      .then(response => {
        if (!response.ok) {
          throw new Error('Request Failed');
        }
        return response.json();
      })


      .then(answer => {
        console.log(answer, "datasssssssssss");
        setData(answer);
      })


      .catch(error => {
        console.log(error, "error");
      });
  }, []);
  return (
    <div>



      <h1 > Posts Table</h1>
      <table border="1" cellPadding="20" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr className='heading'>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mail</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id} className='trow'>
              <td className='trow' >{user._id}</td>
              <td className='trow'>{user.name}</td>
              <td className='trow'>{user.age}</td>
              <td className='trow'>{user.mail}</td>
              <td className='trow'>{user.category}</td>
              <td className='trow'>{user.price}</td>
              <td className='trow'>{user.description}</td>

            </tr>

          ))}
        </tbody>


      </table>

    </div>
  );
};
export default Practice;