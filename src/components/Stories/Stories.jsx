import './Stories.scss';
import React, { useContext } from 'react';
import { stories } from '../../DummyData/DummyData';
import { AuthContext } from '../context/AuthContext';

const Stories = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='stories'>
      <div className="story">
        <img src={user.profilePicture} alt="" />
        <span>{user.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Stories
