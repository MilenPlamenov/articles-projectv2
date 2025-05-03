import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      {!user && <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>}
      {!user && <Link to="/register">Register</Link>}
      {user && (
        <>
          <span style={{ marginRight: '10px' }}>Hi, {user.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;