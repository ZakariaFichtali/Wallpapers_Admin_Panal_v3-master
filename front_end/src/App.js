import './CSS/App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AllWallpapers from './Components/AllWallpapers';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import AllAds from './Components/AllAds';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import axios from './Components/AXOS';



function App() {
  const [isloggedIn,setisLoggedin]=useState(null)
  const [user, seUser] = useState(null)

  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    seUser(data);
  };
  useEffect(()=>{
    getUser();
  },[])
  return (
    <div className="App">
    {/* <Register/> */}
      {user !=null ? <>
        <div className='sidebar'>
          {<Sidebar />}

        </div>
        <div className='rightside'>
          <Routes>

            <Route index element={<Home />} />
            <Route path='/wallpapers/:id' element={<AllWallpapers />} />
            <Route path='/ads' element={<AllAds />} />
            <Route path='/wallpapers/5' element={<AllAds />} />

          </Routes>
        </div>
      </> : <Login setisLoggedin={setisLoggedin}/>}
     
    
    </div>
  );
}

export default App;
