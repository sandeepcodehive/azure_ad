import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dataset from './components/Dataset';
import Setting from './components/Setting';
import ProfileData from './components/ProfileData';
import SignInButton from './components/Auth/SignInButton';
import SignOutButton from './components/Auth/SignOutButton';

import { useIsAuthenticated} from '@azure/msal-react';


function App() {
  const isAuthenticated = useIsAuthenticated();

  // const { instance, accounts } = useMsal();
  // const [graphData, setgraphData] = useState(null);

  // const requestprfiledata = () => {
  //   instance
  //     .acquireTokenSilent({
  //       ...loginRequest,
  //       account: accounts[0]
  //     })
  //     .then((response) => {
  //       callMsGraph(response.accessToken).then((response) => setgraphData(response));
  //     });
  // }


  return (
    <Router>
      <div className="container-fluid ">
        <div className="row">
          <nav className="col-lg-2 bg-dark">
            <ul className="navbar-nav flex-column">
              {isAuthenticated ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home" style={{ color: "white" }}>Chat</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dataset" style={{ color: "white" }}>Datasets</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/setting" style={{ color: "white" }}>Setting</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile" style={{ color: "white" }}>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signout" style={{ color: "white" }}>Log out</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin" style={{ color: "white" }}>Log in </Link>
                  </li>
                </>
              }
            </ul>
          </nav>



          <div className="col-lg-10">
            <Routes>
              {
                isAuthenticated ?
                  <>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dataset" element={<Dataset />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path='/profile' element={<ProfileData />} />
                    <Route path='/signout' element={<SignOutButton />} />
                  </>
                  : null}
              <Route path='/signin' element={<SignInButton />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
