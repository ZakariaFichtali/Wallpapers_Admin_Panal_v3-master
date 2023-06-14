import React, { useEffect, useState } from 'react'
import '../CSS/App.css'
import {useNavigate } from "react-router-dom";
import AllWallpapers from "../IMG/AllWallpapers.jpg"
import LiveWallpapers from "../IMG/LiveWallpapers.gif"
import bk from "../IMG/bk.png"
import ads from "../IMG/ads.jpg"; 
import axios from 'axios';
import Insert_Data from './Insert_Data';

// -------------------------------------------------------------------
function Home() {
    const navigate = useNavigate()
    const [Cards,setCards] = useState([])

    const GoAllWallpapers = (id) => {
      navigate(`/wallpapers/${id}`)
      console.log(id)
    }
    const goinsertalldata = () =>{
      navigate('/insert_data')
    }

    useEffect(()=>{
      const AllCards = async() =>{
        const response = await axios.get('http://127.0.0.1:8000/api/Cards');
        setCards(response.data)
      }
      AllCards();

    },[])
   


  return (
    <>
    <div style={{ display:'flex' , justifyContent:'end'}}>
    <Insert_Data/>

    </div>
        <div className='all'>    

     {/* ------------------------------    cards  ---------------------------------- */}

      {Cards.map((card)=>
      <div className="card" style={{ width: "30%", height: "350px" }}>
      <img src={card.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
                <p className="card-text">
                  {card.description}
                </p>
        <button type='button' className='btn btn-dark' onClick={()=>GoAllWallpapers(card.id)}>Wallpapers</button>
  
          </div>
       </div>
      )}
      
         {/* ============================================================================== */}

         <div className="card" style={{ width: "30%", height: "350px" }}>
      <img  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">jk</h5>
                <p className="card-text">
                  kk
                </p>
        <button type='button' className='btn btn-dark' onClick={goinsertalldata} >Wallpapers</button>
  
          </div>
       </div>


    </div>
    </>
  )
}

export default Home