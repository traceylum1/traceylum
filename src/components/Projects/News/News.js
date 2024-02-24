import React, { useState, useEffect } from 'react';
import './News.css'

export default function News() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=fe748c16870c429e95f4dfd6c85baf11')
        .then((response) => response.json())
        .then((data) => {
         //   console.log(data);
           setPosts(data.articles);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  return (
    <>
    <h2 className='header'>Today's Science News Headlines</h2>
     <div className="posts-container">
     {posts.slice(0, 5).map((post) => {
        if (post.source.name !== "[Removed]") {
         return (
            <div className="post-card" key={post.source.name}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.description} <a href={post.url} target="_blank" rel="noreferrer">Read More</a></p> 
            </div>
         );
        }
        return (0)
     })}
  </div>
  </>
  );
}