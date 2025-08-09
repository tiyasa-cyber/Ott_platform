import React from 'react'
import Footer from '../../components/Footer/Footer'
import TitleCards from '../../components/TitleCards/TitleCards'
import Navbar from '../../components/Navbar/Navbar'


const Tv = () => {
  return (
    <div className='tv'>
      <Navbar/>
      <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for you"} category={"now_playing"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Tv
