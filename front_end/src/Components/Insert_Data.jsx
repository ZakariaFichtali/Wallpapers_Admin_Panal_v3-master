import React, { useState } from 'react';
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
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import axios from 'axios';


export default function App() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  // const [name, setName] = useState("");

  const [formValue, setFormValue] = useState({
    name: "",
    locked: "",
    cards_id: "",
    image:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
          [name]: value,
      };
      
    });
  };

  const addWallpaper =async (e) =>{
    console.log("ez")
  e.preventDefault()
    console.log(formValue)
    const res = await axios.post('http://127.0.0.1:8000/api/addWallpaper',formValue);
    console.log(res.data)
  }

  

  return (
    <>
      <button className='btn btn-primary' onClick={toggleShow}>Add Wallpaper</button>

      <MDBModal className='modal-lg' tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog >
          <MDBModalContent> 
            <MDBModalHeader>
              <MDBModalTitle>Add Wallpaper</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>



      <form onSubmit={addWallpaper}>
        <div style={{ display:'flex' , gap:'40px' , paddingBottom:'20px'}}>
                <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name :</label>
              <input
                type="text"
                name='name'
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}
              />
            
            </div>
           
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Locked : </label>
              <input
                type="text"
                name='locked'
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}
              />
            
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Card_id : </label>
              <input
                list='cards_id'
                name='cards_id'
                autoComplete='off'
                className="form-control"
                onChange={handleChange}

                
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
              name='image'
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}

              />
            
            </div>

         
            </div>
            <button  type="submit"  className='btn btn-success'>Save changes</button>

</form>



            </MDBModalBody>
            <MDBModalFooter>
              <button className='btn btn-danger' color='secondary' onClick={addWallpaper}>
                Close
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

