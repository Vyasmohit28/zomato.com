import React from 'react'
import Navbar from '../components/Navbar'
import Searchbtn from '../components/Searchbtn'
import Mini_card from '../components/Mini_card'
import Collection_card from '../components/Collection_card'
import Location_card from '../components/Location_card'
import Download_section from '../components/Download_section'
import Accordion_component from '../components/Accordion_component'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="heading-container">
        <img src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <Navbar />
        <h1>zomato</h1>
        <h4>Discover the best food & drinks in Surat</h4>
        <Searchbtn />
      </div>


      <div className="main-front-page">
        <div className="cards-container d-flex flex-wrap justify-content-center gap-4 mt-5">

          <Mini_card imglink="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" title="Order Online" para="Stay home and order to your doorstep" />
          <Mini_card imglink="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Dining" para="view the city's favourite dining venues" />
          <Mini_card imglink="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" title="Nightlife and clubs" para="Explor the city's top nightlife outlets" />
          


        </div>

        <div className="collection-container">
          <h1>Collections</h1>
          <div className="for-h4 d-flex">
            <h4>Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends</h4>
            <div className="add-more-btn">All collection in surat</div>
          </div>
          <div className="collection-cards d-flex  justify-content-center gap-4 mt-2">
            <Collection_card climg={"https://2.bp.blogspot.com/-DlfAUu21EaY/WCa0NYvdBfI/AAAAAAAALwQ/J99Youk5gKYKpzZPH9VU78ZrGaT6h1xaACLcB/s1600/Gujarati-Thali00004.jpg"} clpara="Unmissable Gujrati thali...." places="10 Places" />
            <Collection_card climg={"https://images.pexels.com/photos/4449433/pexels-photo-4449433.jpeg?auto=compress&cs=tinysrgb&w=600"} clpara="Great Cafes" places="8 Places" />
            <Collection_card climg={"https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600"} clpara="Local favourite places" places="15 Places" />
            <Collection_card climg={"https://images.pexels.com/photos/4880341/pexels-photo-4880341.jpeg?auto=compress&cs=tinysrgb&w=600"} clpara="Serene Rooftop Places" places="5 Places" />

          </div>
        </div>

        <div className="loca-container">
          <div className="loca-h1">Popular localities in and around <b>Vadodara</b></div>
          <div className="row">
            <div className="col-4 loca-box-margin"><Location_card loname="Vadodara" loplace="566" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="Alkapuri" loplace="188" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="fatehgunj" loplace="122" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="akota" loplace="98" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="sayajigunj" loplace="76" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="karelibaug" loplace="66" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="gotri" loplace="54" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="vasna road" loplace="42" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="manjalpur" loplace="34" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="waghodia road" loplace="32" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="subhanpura" loplace="30" /></div>
            <div className="col-4 loca-box-margin"><Location_card loname="SEE MORE" /></div>


          </div>
        </div>

      </div>

      <Download_section />
      <Accordion_component />
      <Footer />
    </>
  )
}

export default Home
