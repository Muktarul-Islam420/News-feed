import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import fakeData from '../../fakeData';
import './Home.css';


const Home = () => {
   console.log(fakeData);
    const first15 =  fakeData.slice(0,15);
    const [posts,setPosts] = useState(first15);

    return (

      
          <div>
            <h2 className="header-text">Posts:{posts.length}</h2>
            {
                posts.map(post => <Post posts={post} key={posts.id}></Post>)
            }
        </div>
         
      
       
    );
};

export default Home;