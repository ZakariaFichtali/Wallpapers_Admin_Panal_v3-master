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

    // show_ads	
    show_ads: '',
    // ads
    bannerAd:  '',
    InterAd:  '',
    NativeAd:  '',
    // Admob
    admob_banner:  '',
    admob_inter:  '',
    admob_native: '',
    // facebook
    facebook_banner: '',
    facebook_inter:  '',
    facebook_native:  '',
      // max
    max_banner:  '',
    max_inter:  '',
    max_native:  '',
    // ironsource_api	
    ironsource_api: '',
    // unity
    unityTest:'',
    unityGameID:  '',
    unityBanner:  '',
    unityInter:  '',
    
    // intersitial_click
    intersitial_click_activites:  '',
    intersitial_click_list:  '',




  });
  useEffect(() => {
    setInfo(data)

  })
  useEffect(()=>{
    if(Info && Info.data){
      setFormValue({ ...formValue,
      // show_ads	
      show_ads: Info.data.map(a => a.show_ads),
      // ads
      bannerAd: Info.data.map(a => a.bannerAd),
      InterAd: Info.data.map(a => a.InterAd),
      NativeAd: Info.data.map(a => a.NativeAd),
      // Admob
      admob_banner: Info.data.map(a => a.admob_banner),
      admob_inter: Info.data.map(a => a.admob_inter),
      admob_native: Info.data.map(a => a.admob_native),
      // facebook
      facebook_banner: Info.data.map(a => a.facebook_banner),
      facebook_inter: Info.data.map(a => a.facebook_inter),
      facebook_native: Info.data.map(a => a.facebook_native),
        // max
      max_banner: Info.data.map(a => a.max_banner),
      max_inter: Info.data.map(a => a.max_inter),
      max_native: Info.data.map(a => a.max_native	),
      // ironsource_api	
      ironsource_api: Info.data.map(a => a.max_banner),
      // unity
      unityTest: Info.data.map(a => a.unityTest),
      unityGameID: Info.data.map(a => a.unityGameID),
      unityBanner: Info.data.map(a => a.unityBanner	),
      unityInter: Info.data.map(a => a.unityInter	),
      
      // intersitial_click
      intersitial_click_activites: Info.data.map(a => a.intersitial_click_activites),
      intersitial_click_list: Info.data.map(a => a.intersitial_click_list	)
       })

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
    const res = await axios.put(`http://192.168.2.80:8000/api/UpdateAds/${id}`, formValue);
    // console.log(res.data)
  }

  console.log("ss")

  console.log(formValue)


  return (
    <>
      <button id='updatebtn01' className='btn btn-primary' onClick={toggleShow}>Update Ads</button>

      <MDBModal className='modal-lg' tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog >
          <MDBModalContent  style={{  width: "1000px"}}>
            <MDBModalHeader style={{  width: "1000px"}}>
              <MDBModalTitle>Add Ads</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>



              <form className='ff' onSubmit={(e) => UpdateWallpaper(e, Info.data.map(a => a.id))}>
                <div className='ggggg' style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', paddingBottom: '20px', }}>

                  {/* ------------------------------------------------------ */}
      
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">show_ads :</label>
                    <input
                      type="text"
                      className="form-control-ads"
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
                      className="form-control-ads"
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
                      className="form-control-ads"
                      onChange={handleChange}
                      name='InterAd'
                      value={formValue.InterAd}

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
                      className="form-control-ads"
                      onChange={handleChange}
                      name='NativeAd'
                      value={formValue.NativeAd}

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
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.admob_banner}

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
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.admob_inter}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}

                  
                  {/* ------------------------------------------------------ */}


                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">admob_native : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.admob_native}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
 {/* ------------------------------------------------------ */}


 <div className="form-group">
                    <label htmlFor="exampleInputEmail1">facebook_banner : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.facebook_banner}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}

                   {/* ------------------------------------------------------ */}


                   <div className="form-group">
                    <label htmlFor="exampleInputEmail1">facebook_inter : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.facebook_inter}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
                     {/* ------------------------------------------------------ */}


                     <div className="form-group">
                    <label htmlFor="exampleInputEmail1">facebook_native : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.facebook_native}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
                    {/* ------------------------------------------------------ */}


                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">max_banner : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.max_banner}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}

                    {/* ------------------------------------------------------ */}


                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">max_inter : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.max_inter}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}

                    {/* ------------------------------------------------------ */}


                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">max_native : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.max_native}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
               
                     {/* ------------------------------------------------------ */}


                     <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ironsource_api : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.ironsource_api}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
               



                     {/* ------------------------------------------------------ */}


                     <div className="form-group">
                    <label htmlFor="exampleInputEmail1">unityTest : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.unityTest}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}

                    
                     {/* ------------------------------------------------------ */}


                     <div className="form-group">
                    <label htmlFor="exampleInputEmail1">unityGameID	 : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.unityGameID	}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
                  
                     {/* ------------------------------------------------------ */}


                     <div className="form-group">
                    <label htmlFor="exampleInputEmail1">unityBanner : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.unityBanner  }

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}
                  
                     {/* ------------------------------------------------------ */}


                     <div className="form-group">
                    <label htmlFor="exampleInputEmail1">unityInter : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.unityInter}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}


                      {/* ------------------------------------------------------ */}


                      <div className="form-group">
                    <label htmlFor="exampleInputEmail1">click_activites : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.intersitial_click_activites}

                    />
                    <datalist id='cards_id'>
                      <option value="hhh" />
                      <option value="hhsdsdh" />
                    </datalist>

                  </div>

                  {/* ------------------------------------------------------ */}


                      {/* ------------------------------------------------------ */}


                      <div className="form-group">
                    <label htmlFor="exampleInputEmail1">click_list : </label>
                    <input
                      list='cards_id'
                      autoComplete='off'
                      className="form-control-ads"
                      onChange={handleChange}
                      name='card_id'
                      value={formValue.intersitial_click_list}

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
                  <button type='submit' className='btn btn-success'>Save changes</button>
                </MDBModalFooter>
              </form>



            </MDBModalBody>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

