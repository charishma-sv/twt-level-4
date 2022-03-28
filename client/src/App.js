import React from 'react';
import Application from './Application';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  Routes,
} from 'react-router-dom';
import Home from './views/pages/Home';
import Feed from './views/pages/Feed';
import Login from './views/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Application />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
