import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { CDBIcon } from 'cdbreact';

import { useParams } from 'react-router-dom'
import UpdateData from './Update_Data';

function AllWallpapers() {
  const {id} = useParams()
  const [Cards,setCards] = useState([])
  const [Wallpapers,setWallpapers] = useState([])

  
  const deleteWallpaper = async (e, id) =>{
    console.log(id)
    const res = await axios.delete(`http://127.0.0.1:8000/api/deleteWallpaper/${id}`);
    await window.location.reload(true)
    
    }

  useEffect(()=>{
    const AllCards = async() =>{
      const response = await axios.get('http://127.0.0.1:8000/api/Cards');
      console.log(response.data)
      setCards(response.data)
    }

    const AllWallpapers = async()=>{
      const response = await axios.get('http://127.0.0.1:8000/api/wallpapers');
      console.log(response.data)
      setWallpapers(response.data)
    }

    AllCards();
    AllWallpapers();


  },[])
if (Wallpapers && Wallpapers.length>0){
console.log("inside")
console.log(id)


}
const filtred = Wallpapers.filter((wall)=>wall.card_id == id);
console.log(filtred)
console.log(Wallpapers)

  return (
    
    <div className='tablesss1'>

      <div className='buttable1'>

        <MDBTable align='middle' className='MDBTable1'>
          <MDBTableHead>
            <tr className='tit'>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Image</th>
              <th scope='col'>Card_id</th>
              <th scope='col'>Status</th>
              <th scope='col'></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {filtred ? filtred.map((wallpapers) =>



              <tr className='tit'>
                <td>
                  <h3>{wallpapers.id}</h3>
                </td>
              <td>
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{wallpapers.name}</p>
                  </div>
                </td>
              <td>
                  <div className='x'>
                    <img
                      src='https://i.pinimg.com/564x/34/a3/f4/34a3f46d0f57bdb4adff780d5c8acaa8.jpg'
                      alt=''
                      style={{ width: '50px'}}
                      className='x'
                    />
                  </div>
                </td>

              

                <td>
                  <p>{wallpapers.card_id}</p>
                </td>

                <td >
                  <div className='successAndDanger'>
                    {wallpapers.locked == 1 ?
                      <MDBBadge className='success' color='success' pill>
                        <p className='pppsuccessAndDanger'>Active</p> 
                      </MDBBadge>
                      : <MDBBadge className='inactive' color='danger' pill>
                        <p className='pppsuccessAndDanger'>inactive</p> 
                      </MDBBadge>}
                  </div>
                 
                </td>

                <td>
                  <button color='link' rounded size='sm'>
                    <UpdateData data={wallpapers}/>
                  </button>
                  
                  <button 
                   onClick={(e)=>deleteWallpaper(e,wallpapers.id)} color='link' rounded size='sm' className='btn btn-danger'>
                    Delete
                  </button>
                </td>
              </tr>

            ) : ""}



          </MDBTableBody>
        </MDBTable>

      </div>

      
    </div>
  )
}

export default AllWallpapers;