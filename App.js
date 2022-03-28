import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <div><body  bgcolor="yellow"> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dayone" element={<Dayone />} />
          <Route path="Daytwo" element={<Daytwo />} />
          <Route path="Daythree" element={<Daythree />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </body>
    </div>
    
  );
  
}



function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Dayone">dayone</Link>
          </li>
          <li>
            <Link to="/Daytwo">daytwo</Link>
          </li>
          <li>
            <Link to="/Daythree">daythree</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

  
      <Outlet />
    </div>
  );
}

function Dayone() {
  return (
    <div>
      <h2>day1 assignment</h2>
      <p>Increment or Decrement</p>
      <input type="number" id="quantity" name="quantity" min="0" max="1000000"></input>


         <body  bgcolor="red"> </body>
      
    </div>
  );
}

function Daytwo() {
  return (
    <div>
      <h2>this is day two assignment</h2>
    </div>
  );
}

function Daythree() {
  return (
    <div>
      <h2>this is day three assignment</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


