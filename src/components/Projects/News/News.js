import React from 'react';
import './News.css'

export default function News() {
  let urls = []
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=fe748c16870c429e95f4dfd6c85baf11')
	.then((response) => response.json())
	.then((data) => {
    for (let i = 0; i < Math.min(5, data.articles.length); i++) {
        document.getElementById("post-title-" + i).innerHTML = data.articles[i].title;
        document.getElementById("post-body-" + i).innerHTML = data.articles[i].description;
        urls.push("<a href=" + "'" + data.articles[i].url + "'" + '>Read more</a>' )
      }
      console.log(urls)
    })
	.catch((err) => {console.log(err.message);});
    return (
      <>
        <div className='background'>
          <h2>Today's Science News Headlines</h2>

          <ol>
            <li>
              <div className='news'>
                <div id="post-title-0"></div>
                <p id="post-body-0"></p>
              </div>
          </li>

            <li>
              <div className='news'>
                <div id="post-title-1"></div>
                <p id="post-body-1"></p>
              </div>
            </li>

            <li>
              <div className='news'>
                <div id="post-title-2"></div>
                <p id="post-body-2"></p>
              </div>
            </li>

            <li>
              <div className='news'>
                <div id="post-title-3"></div>
                <p id="post-body-3"></p>
              </div>
            </li>

            <li>
              <div className='news'>
                <div id="post-title-4"></div>
                <p id="post-body-4"></p>
              </div>
            </li>
          </ol>

        </div>
      </>
      );
    }