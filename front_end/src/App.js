import './CSS/App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AllWallpapers from './Components/AllWallpapers';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import AllAds from './Components/AllAds';



function App() {

  
  return (
    <div className="App">
      <div className='sidebar'>
      {<Sidebar/>}

      </div>
      <div className='rightside'>
      <Routes>
         
          <Route index element={<Home />} />
          <Route path='/wallpapers/:id' element={<AllWallpapers />} />
          <Route path='/ads' element={<AllAds />} />
          <Route path='/wallpapers/5' element={<AllAds />} />

     </Routes>
      </div>
    
    </div>
  );
}

export default App;
