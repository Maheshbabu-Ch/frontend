import React from 'react'

export default function Navmid() {
  return (
    <div className='navmid'>
        <div id="head"><h3>Home</h3></div>
        <div id="post">
            {/* <div id="post_user">
                <img src="https://pbs.twimg.com/profile_images/1564799567434252288/y-JUJVQf_normal.jpg"></img>
            </div> */}
            <form id="postform">
                <div id="post_user">
                  <img id="profile_pic"src="https://pbs.twimg.com/profile_images/1564799567434252288/y-JUJVQf_normal.jpg"></img>
                  <input id="tweet_content" type='text' placeholder='What is Happening?!'/>
                </div>
                <div id="tweet">
                    Tweet
                </div>
            </form>
        </div>
    </div>
  )
}
