import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/quiz">Quiz</Link> |{" "}
        <Link to="/results">Results</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
