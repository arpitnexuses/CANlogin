import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Auth0/Login';
import Blank from './component/Blank'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <>
    <div className="Apps">
      { isAuthenticated?  
      <Blank/>: <Login/>
  
    }
      </div>
      
    </>

  );
}

export default App;
