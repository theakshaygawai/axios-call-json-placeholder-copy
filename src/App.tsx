import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import UserList from "./components/pages/UserList";

const App:React.FC = () => {

  return (
    <div className="App">
      <NavBar heading={"React useEffect() "}/>
        <UserList/>
    </div>
  );
}
export default App;
