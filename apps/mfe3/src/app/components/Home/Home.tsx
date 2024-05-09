import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div>
      <h1 className="app-title">Welcome to React App</h1>
      <Link to="user-list">Show Users</Link>

      {/* <button
        type="button"
        onClick={() => (window.location.href = '/mfe1/todos')}
      >
        Show Todos
      </button> */}
    </div>
  );
};

export default Home;
