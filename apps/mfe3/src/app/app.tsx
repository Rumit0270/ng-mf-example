// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

import Home from './components/Home/Home';
import { isStandalone } from './utils';
import { UserList } from './components/UserList/UserList';

const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'David', email: 'david@example.com' },
  { name: 'Eve', email: 'eve@example.com' },
  { name: 'Frank', email: 'frank@example.com' },
  { name: 'Grace', email: 'grace@example.com' },
  { name: 'Henry', email: 'henry@example.com' },
  { name: 'Ivy', email: 'ivy@example.com' },
  { name: 'Jack', email: 'jack@example.com' },
];

const basename = isStandalone ? '/' : process.env.BASE_PREFIX;

export function App() {
  return (
    <div className={styles['container']}>
      {/* Configure basename based on environment: staging -> /ui/shell/mfe3 */}
      <Router basename={basename}>
        <Routes>
          <Route
            path="user-list"
            element={
              <UserList
                users={users}
                onClick={(user) => {
                  alert(`User clicked: ${user.name}`);
                }}
              />
            }
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

// Define a custom element for the React app
// class Mfe3Element extends HTMLElement {
//   connectedCallback() {
//     console.log('react-element::init');

//     window.React = React;
//     const root = ReactDOM.createRoot(this);
//     root.render(<App />);
//   }

//   disconnectedCallback() {
//     console.log('react-element::destroy');
//   }
// }

// customElements.define('mfe3-react-element', Mfe3Element);

// Export a function to allow host app to mount the React app simply by passing the host element
export const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
////

export default App;
