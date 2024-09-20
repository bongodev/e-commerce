import { Outlet, useNavigate } from 'react-router-dom';

export const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome Admin!</h1>
      <div>
        <button onClick={() => navigate('/admin')}>Dashboard</button>
        <button onClick={() => navigate('/admin/inventory')}>Inventory</button>
        <button onClick={() => navigate('/admin/profile')}>Profile</button>
      </div>
      <Outlet />
    </div>
  );
};
