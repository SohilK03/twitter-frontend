import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material/";
// import db from "./firebase";
import { connect } from "react-redux";
import profilePhoto from "../Assets/profile-icon.png";
import { addTweet, getAllTweets } from "../Redux/Actions/tweetActions";
function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    console.log(props.user);
    const data = {
      name: props.user.user.name,
      text: tweetMessage,
      image: tweetImage,
    };
    props.addTweet(data);
    setTweetMessage("");
    setTweetImage("");
    props.getAllTweets();
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src={
              props.user.data.profilePhoto
                ? props.user.profilePhoto
                : profilePhoto
            }
          />
          <input
            className="tweet-input"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
          disabled={tweetMessage === "" ? true : false}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, { addTweet, getAllTweets })(TweetBox);
