import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1613468437342486528"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="codeGhost"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/amanual.shibabaw.39"}
          options={{ text: "@university of gondar", via: "reactdevelopers" }}
        />
      </div>
    </div>
  );
}

export default Widgets;