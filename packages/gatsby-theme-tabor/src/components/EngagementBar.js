import React from 'react';
import ShareIcons from './ShareIcons';
import NextPost from './NextPost';

const EngagementBar = ({ post }) => (
  <div
    id="engagement-bar"
    className="bar drop-in drop-in--from-bottom drop-in-style-2 drop-in--js drop-in--not-top"
  >
    <div className="container max-width flex justify-between">
      <ShareIcons />
      <NextPost post={post} />
    </div>
  </div>
);

export default EngagementBar;
