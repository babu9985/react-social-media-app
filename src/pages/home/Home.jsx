import React from 'react';
import './Home.scss';
import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';

const Home = () => {
  return (
    <div className='home'>
      <Stories></Stories>
      <Posts></Posts>
    </div>
  )
}

export default Home
