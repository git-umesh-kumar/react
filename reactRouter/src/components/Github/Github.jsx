import React, { useState } from 'react';
import { useEffect } from 'react';

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/git-umesh-kumar')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
    return () => {
      
    };
  }, []);

  return (
    <div className='text-center'>
      <img src={data.avatar_url} alt="Github Picture" />
      <h1>Name : {data.name}</h1>
      <p>Followers : {data.followers}</p>
      <p>Following : {data.following}</p>
    </div>
  );
}

export default Github
