import './CSS/App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AllWallpapers from './Components/AllWallpapers';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar/Sidebar';



function App() {

  
  return (
    <div className="App">
      <div className='sidebar'>
      {<Sidebar/>}

      </div>
      <div className='rightside'>
      <Routes>
         
         <Route index element={<Home/>}/>
         <Route path='/wallpapers/:id' element={<AllWallpapers/>} />
     </Routes>
      </div>
    
    </div>
  );
}

export default App;
