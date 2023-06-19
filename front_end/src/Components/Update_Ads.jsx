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
import axios from 'axios';


export default function Update_Ads(data) {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  const [Info, setInfo] = useState({})
  const [formValue, setFormValue] = useState({
    show_ads: '',
    bannerAd: '',
    InterAd: '',
    NativeAd: '',

  });
  useEffect(() => {
    setInfo(data)

  })
  useEffect(()=>{
    if(Info && Info.data){
      setFormValue({ ...formValue, show_ads: Info.data.map(a => a.show_ads) })
      setFormValue({ ...formValue, bannerAd: Info.data.map(a => a.bannerAd) })
      setFormValue({ ...formValue, InterAd: Info.data.map(a => a.InterAd) })
      setFormValue({ ...formValue, NativeAd: Info.data.map(a => a.NativeAd) })

    }
  },[Info])

  

  const Update_Ads = () =>{

  }

  // const [formValue, setFormValue] = useState({
  //   name: data.data.name,
  //   locked: data.data.locked,
  //   card_id: data.data.card_id,
  //   image: data.data.image
  // });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const UpdateWallpaper = async (e, id) => {
    e.preventDefault()
    console.log(formValue)
    const res = await axios.put(`http://192.168.56.1:8000/api/UpdateAds/${id}`, formValue);
    // console.log(res.data)
  }

  console.log("ss")

  console.log(formValue)


  return (
    <>
      <button id='updatebtn01' className='btn btn-primary' onClick={toggleShow}>Update Ads</button>

      <MDBModal className='modal-lg' tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog >
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Ads</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>



              <form onSubmit={(e) => UpdateWallpaper(e, Info.data.map(a => a.id))}>
                <div className='ggggg' style={{ display: 'flex', gap: '40px', paddingBottom: '20px' }}>

                  {/* ------------------------------------------------------ */}
      
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">show_ads :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name='show_ads'
                      onChange={handleChange}
                      value={formValue.show_ads}
                    />

                  </div>
                  {/* ------------------------------------------------------ */}

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">bannerAd : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={handleChange}
                      name='bannerAd'
                      value={formValue.bannerAd}
                    />

                  </div>
                  {/* ------------------------------------------------------ */}

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">InterAd : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control"
                      onChange={handleChange}
                      name='InterAd'
                      // value={formValue.InterAd}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
                  {/* ------------------------------------------------------ */}

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">NativeAd : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control"
                      onChange={handleChange}
                      name='NativeAd'
                      // value={formValue.NativeAd}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}



                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">admob_banner : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.card_id}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>


                  {/* ------------------------------------------------------ */}


                  {/* ------------------------------------------------------ */}


                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">admob_inter : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.card_id}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}

               


                </div>

                
                    
                <MDBModalFooter>
                  <button className='btn btn-danger' color='secondary' onClick={toggleShow}>
                    Close
                  </button>
                  <button className='btn btn-success'>Save changes</button>
                </MDBModalFooter>
              </form>



            </MDBModalBody>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

