import React from 'react'

export default function Navmid({info} ){
  // {info}) {
  // const curr = info.currentUser
   console.log(info.currentUser)
  const currentuser = "Ram"
  const tweet_text = "";
  // function post_tweet()
  // {
  //   tweet_text= document.getElementById("tweet_content").innerText
  //   // console.log(val)
  //   const a = document.createElement("div")
  //   a.className = "post"
  //   a.innerHTML = "<p>hello</p>"
  //   document.getElementById("posts").prepend(a)
  // }

  function post_tweet() {

    const tweetText = document.getElementById("tweet_content").innerText;
  
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `<img id="profile_pic"src="https://pbs.twimg.com/profile_images/1564799567434252288/y-JUJVQf_normal.jpg"></img>
    <div id="cont">
      <div id="user_info"><p>{curr.name}<span>@{curr.username}</span></p></div>
      <p id="con">hello this is a sample tweet dont mind me ok thank you and how are you whats goin gon lately</p>
      <div id='post_actions'>
        <svg id="comment" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
        <svg id="like" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>                      </div>
      </div>`;
  
    const postsContainer = document.getElementById("posts");
    postsContainer.prepend(newPost);
    document.getElementById("tweet_content").innerText=""
  }
  
  return (
    <div className='navmid'>
        <div id="head"><h3>Home</h3></div>
        <div id="post">
            {/* <div id="post_user">
                <img src="https://pbs.twimg.com/profile_images/1564799567434252288/y-JUJVQf_normal.jpg"></img>
            </div> */}
            <form id="postform" onSubmit={event => event.preventDefault()}>
                <div id="post_user">
                  <img id="profile_pic"src="https://pbs.twimg.com/profile_images/1564799567434252288/y-JUJVQf_normal.jpg"></img>
                  {/* <p id="tweet_content"><input type='text' placeholder='What is Happening?!'/></p> */}
                  {/* <textarea id="tweet_content" placeholder="What cnc x mis Happening?!" contentEditable="true"></textarea> */}
                  {/* <span id='tweet_content' contentEditable='true' placeholder='hello'></span> */}
                  <div id="tweet_content"data-text="What is happening?!" contentEditable='true'></div>
                  {/* <div class='input edit' contentEditable='true' spellCheck='false' placeholder='hello there'></div>
                  <div class='input read' contentEditable='true' spellCheck='false'></div> */}

                </div>
                <div id="icons">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg>
                  {/* <div id="tweet">
                    Tweet
                </div> */}
                <button id="tweet" onClick={post_tweet}>Tweet</button>
                </div>
            </form>
            <div id="posts">
                {/* <div className="post">
                    <img id="profile_pic"src="https://pbs.twimg.com/profile_images/1564799567434252288/y-JUJVQf_normal.jpg"></img>
                    <div id="cont">
                      <div id="user_info"><p>Ram <span>@ram123</span></p></div>
                      <p id="con">hello this is a sample tweet dont mind me ok thank you and how are you whats goin gon lately</p>
                      <div className='post_actions'>
                        <svg id="comment" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                        <svg id="like" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>                      </div>
                      </div>
                  </div> */}
              </div>
          </div>
      </div>
  )
}
