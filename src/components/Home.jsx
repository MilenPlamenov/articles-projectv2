import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>Welcome {user ? user.username : 'Guest'} 👋</h1>
      <p>This is the Home Page.</p>
    </div>
  );
};

export default Home;