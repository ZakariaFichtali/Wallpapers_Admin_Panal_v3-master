import React, { useEffect, useState } from 'react'
import '../CSS/App.css'
import {useNavigate } from "react-router-dom";
import AllWallpapers from "../IMG/AllWallpapers.jpg"
import LiveWallpapers from "../IMG/LiveWallpapers.gif"
import bk from "../IMG/bk.png"
import ads from "../IMG/ads.jpg"; 
import axios from './AXOS'
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

  const goAds = () => {
    navigate('/ads')
  }


    useEffect(()=>{
      const AllCards = async() =>{
        const response = await axios.get('api/Cards');
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



<div className='alltopcards'>



          {/* ------------------------------    topscard  ---------------------------------- */}


          <div className="card" style={{ width: "250px", height: "80px" }}>
            <div className="card-body">
              <h5 className="card-title">1583</h5>
              <p className="card-text">
                Users
              </p>

            </div>
          </div>


          {/* ============================================================================== */}


          {/* ------------------------------    topscard  ---------------------------------- */}

          <div className="card" style={{ width: "250px", height: "80px" }}>
            <div className="card-body">
              <h5 className="card-title">524</h5>
              <p className="card-text">
                Wallpapers
              </p>

            </div>
          </div>

          {/* ============================================================================== */}


          {/* ------------------------------    topscard  ---------------------------------- */}


          <div className="card" style={{ width: "250px", height: "80px" }}>
            <div className="card-body">
              <h5 className="card-title">12 </h5>
              <p className="card-text">
                Category
              </p>

            </div>
          </div>

          {/* ============================================================================== */}


          {/* ------------------------------    topscard  ---------------------------------- */}

          <div className="card" style={{ width: "250px", height: "80px" }}>
            <div className="card-body">
              <h5 className="card-title">19</h5>
              <p className="card-text">
                Subscription
              </p>

            </div>
          </div>

          {/* ============================================================================== */}





</div>











        <div className='allbutcards'>


          {/* ------------------------------    cards  ---------------------------------- */}

          {Cards.map((card) =>
            <div className="card" style={{ width: "350px", height: "230px" }}>
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">
                  {card.description}
                </p>
                <button type='button' className='btn btn-dark' onClick={() => GoAllWallpapers(card.id)}>Wallpapers</button>

              </div>
            </div>
          )}

          {/* ============================================================================== */}

          <div className="card" style={{ width: "360px", height: "230px" }}>
            <img className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">jk</h5>
              <p className="card-text">
                kk
              </p>
              <button type='button' className='btn btn-dark' onClick={goinsertalldata} >Wallpapers</button>

            </div>
          </div>


</div>






    </div>
    </>
  )
}

export default Home