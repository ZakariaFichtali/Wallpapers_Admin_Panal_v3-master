import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from './AXOS'


export default function UpdateData(data) {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  const [Info , setInfo] = useState({
    
  })

  useEffect(()=>{
    setInfo(data)

  })

  const [formValue, setFormValue] = useState({
    name: data.data.name,
    locked: data.data.locked,
    card_id: data.data.card_id,
    image:data.data.image
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({...formValue,[name]:value});
  };

  const UpdateWallpaper =async (e,id) =>{
    e.preventDefault()
    console.log(formValue)
    const res = await axios.put(`/api/UpdateWallpaper/${id}`,formValue);
    // console.log(res.data)
    await window.location.reload(true)

  }
  console.log(Info)

  return (
    <>
      <button id='updatebtn01' className='btn btn-primary' onClick={toggleShow}>Update Wallpaper</button>

      <MDBModal className='modal-lg' tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog >
          <MDBModalContent> 
            <MDBModalHeader>
              <MDBModalTitle>Add Wallpaper</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>



      <form onSubmit={(e)=>UpdateWallpaper(e,data.data.id)}>
        <div style={{ display:'flex' , gap:'40px' , paddingBottom:'20px'}}>
                <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name :</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name='name'
                onChange={handleChange}
                value={formValue.name}
              />
            
            </div>
           
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Locked : </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}
                name='locked'
                value={formValue.locked}
              />
            
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Card_id : </label>
              <input
                list='cards_id'
                autoComplete='off'
                className="form-control"
                onChange={handleChange}
                name='card_id'
                value={formValue.card_id}
                
              />
              <datalist id='cards_id'>
                    <option value="hhh"/>
                    <option value="hhsdsdh"/>
              </datalist>
            
            </div>
        </div>
      
        <div style={{ display:'flex' , gap:'30px'}}>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Image</label>
              <input
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}
                // name='image'
                // value={formValue.image}

              />
            
            </div>

         
            </div>
            <MDBModalFooter>
              <button className='btn btn-danger' color='secondary' onClick={toggleShow}>
                Close
              </button>
              <button  className='btn btn-success'>Save changes</button>
            </MDBModalFooter>
</form>



            </MDBModalBody>
           
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

