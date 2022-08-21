import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material/";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import verified_photo from "../Assets/Twitter_Verified_Badge.svg.png";
import { connect } from "react-redux";
import { likeTweet } from "../Redux/Actions/tweetActions";
const Post = forwardRef(
  (
    {
      displayName,
      username,
      verified,
      text,
      image,
      avatar,
      likes,
      id,
      likeTweet,
    },
    ref
  ) => {
    const [liked, setLiked] = useState(false);
    const LikePost = (e) => {
      if (!liked) {
        console.log("want to like ", id);
        likeTweet(id);
        setLiked(true);
      } else {
        alert("Post Already Liked By You");
      }
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span>
                  {verified && (
                    <img alt="verified" width="10%" src={verified_photo} />
                  )}{" "}
                  <span className="handle">@{username}</span>
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <div>
              {liked ? (
                <FavoriteIcon fontSize="small" onClick={LikePost} />
              ) : (
                <FavoriteBorderIcon fontSize="small" onClick={LikePost} />
              )}
              <span>{likes}</span>
            </div>
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default connect(null, { likeTweet })(Post);
