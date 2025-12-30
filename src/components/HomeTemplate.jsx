import React from 'react'
import AboutUs from './AboutUs'
import Orators from './orators/Orators'
import Partners from './Partners'
import Tracks from './Tracks'
import EventSchedule from './EventSchedule'
import Carousel from './BannersCarousel'
import EpmsAbout from './Epms_about'
import Venue from "./venue"


const HomeTemplate = () => {
  return (
    <>
    <AboutUs />
    <Carousel />
      <EpmsAbout />
      <Tracks />
      <Orators />
      <EventSchedule height={50} name="View Full Schedule" link="/zerotrustai-event-schedule"/>
      <Venue />
      <Partners />
    </>
  )
}

export default HomeTemplate
