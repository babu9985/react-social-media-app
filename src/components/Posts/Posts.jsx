import React from 'react';
import './Posts.scss';
import { posts } from '../../DummyData/DummyData';
import Post from '../Post/Post';

const Posts = () => {
  return (
    <div className='posts'>
      {posts.map((post) => {
        return <Post post={post} key={post.id}></Post>
      })}
    </div>
  )
}

export default Posts
