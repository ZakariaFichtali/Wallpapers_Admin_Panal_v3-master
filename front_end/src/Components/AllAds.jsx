import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { CDBIcon } from 'cdbreact';

import { useParams } from 'react-router-dom'
import UpdateData from './Update_Data';

function AllAds() {
    const { id } = useParams()
    const [Cards, setCards] = useState([])
    const [Ads, setAds] = useState([])


    // const deleteWallpaper = async (e, id) => {
    //     console.log(id)
    //     const res = await axios.delete(`http://127.0.0.1:8000/api/deleteWallpaper/${id}`);
    //     await window.location.reload(true)

    // }

    useEffect(() => {
        // const AllCards = async () => {
        //     const response = await axios.get('http://127.0.0.1:8000/api/Cards');
        //     console.log(response.data)
        //     setCards(response.data)
        // }

        const AllAds = async () => {
            const response = await axios.get('http://192.168.56.1:8000/api/ads');
            console.log(response.data)
            setAds(response.data)
        }

        // AllCards();
        AllAds();


    }, [])
    if (Ads && Ads.length > 0) {
        console.log("inside")
        console.log(id)


    }
    const filtred = Ads.filter((ads) => ads.card_id == id);
    console.log(filtred)
    console.log(Ads)

    return (

        <div   className='tablesss1'>

            <div style={{ background: '#fff', overflow: "scroll", height: "600px" }} className='buttable1'>
            

                <MDBTable align='middle' className='MDBTable1'>


                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>

                    <MDBTableBody>

                    {filtred ? filtred.map((ads) =>

                        <>
                                  
                                
                                    <tr>
                                <td>show_ads</td>
                                <td>{ads.show_ads}</td>
                                    </tr>
                                    
                                    <tr>
                                <td>bannerAd</td>
                                         <td>{ads.bannerAd}</td>
                                    </tr>

                                    <tr>
                                <td>InterAd</td>
                                <td>{ads.InterAd}</td>
                                    </tr>

                                    <tr>
                                <td>NativeAd</td>
                                <td>{ads.NativeAd}</td>
                                    </tr>

                                    <tr>
                                <td>admob_banner</td>
                                <td>{ads.admob_banner}</td>
                                    </tr>

                            <tr>
                                <td>admob_inter</td>
                                <td>{ads.admob_inter}</td>
                            </tr>


                            <tr>
                                <td>admob_native</td>
                                <td>{ads.admob_native}</td>
                            </tr>



                            <tr>
                                <td>facebook_banner</td>
                                <td>{ads.facebook_banner}</td>
                            </tr>



                            <tr>
                                <td>facebook_inter</td>
                                <td>{ads.facebook_inter }</td>
                            </tr>



                            <tr>
                                <td>facebook_native</td>
                                <td>{ads.facebook_native}</td>
                            </tr>



                            <tr>
                                <td>max_banner</td>
                                <td>{ads.max_banner}</td>
                            </tr>




                            <tr>
                                <td>max_inter</td>
                                <td>{ads.max_inter}</td>
                            </tr>



                            <tr>
                                <td>max_native</td>
                                <td>{ads.max_native}</td>
                            </tr>

                            <tr>
                                <td>ironsource_api</td>
                                <td>{ads.ironsource_api}</td>
                            </tr>


                            <tr>
                                <td>unityTest</td>
                                <td>{ads.unityTest}</td>
                            </tr>


                            <tr>
                                <td>unityGameID</td>
                                <td>{ads.unityGameID}</td>
                            </tr>


                            <tr>
                                <td>unityBanner</td>
                                <td>{ads.unityBanner}</td>
                            </tr>




                            <tr>
                                <td>unityInter</td>
                                <td>{ads.unityInter}</td>
                            </tr>





                            <tr>
                                <td>intersitial_click_activites</td>
                                <td>{ads.intersitial_click_activites}</td>
                            </tr>





                            <tr>
                                <td>intersitial_click_list</td>
                                <td>{ads.intersitial_click_list}</td>
                            </tr>


                        </>

                    ) : ""}

            </MDBTableBody>
        </MDBTable>



            </div>


        </div>
    )
}

export default AllAds;