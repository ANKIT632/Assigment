import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(id, 10));
    setUserDetails(user);
  }, [id, users]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container-sm ' style={{ background: "skyblue" }}>
      <h2>User Details</h2>
      <div>
        <strong>Name:</strong> {userDetails.name}
      </div>
      <div>
        <strong>Username:</strong> {userDetails.username}
      </div>
      <div>
        <strong>Email:</strong> {userDetails.email}
      </div>
      <div>
        <strong>Address:</strong>{userDetails.address.street} ,{userDetails.address.suite}, {userDetails.address.city} ,{userDetails.address.zipcode} , lat: {userDetails.address.geo.lat} ,lng: {userDetails.address.geo.lng}
      </div>


      <div>
        <strong>Phone:</strong> {userDetails.phone}
      </div>
      <div>
        <strong>Website:</strong> {userDetails.website}
      </div>

      <div>
        <strong>Company:</strong> <h6>Name :  {userDetails.company.name}</h6> <h6> catchPhrase : {userDetails.company.catchPhrase} </h6> <h6>bs : {userDetails.company.bs}</h6>
      </div>
    </div>
  );
};

export default UserDetails;
