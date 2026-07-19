import React from 'react'
import Hero from '../components/Hero'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import RecentWork from '../components/RecentWork'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HomeAbout/>
        <HomeServices/>
        <RecentWork/>
    </div>
  )
}

export default Home