import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/UserAction';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import UserDetails from './UserDetails';
const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const Navigate = useNavigate();


  return (
    <div>

      <h1 className='container'>Dashboard</h1>
      <table className='table table-striped table-hover table-bordered border-primary'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> <Link to={`/dashboard/${user.id}`}>{user.name}</Link> </td>
              <td>{user.username}</td>
              <td>{user.email}</td>

              <td>{user.address.street + " " + user.address.suite + " " + user.address.city + "," + user.address.zipcode}</td>

              <td>{user.phone}</td>

            </tr>
          ))}
        </tbody>
      </table>

      <button className='btn btn-success mx-3 my-2' onClick={() => Navigate("/create")}>CreateUser</button>

    </div>


  );
}

export default Dashboard;
