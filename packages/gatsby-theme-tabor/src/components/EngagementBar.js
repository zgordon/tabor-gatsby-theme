import React, { useRef } from 'react';
import Headroom from 'react-headroom';
import ShareIcons from './ShareIcons';
import NextPost from './NextPost';

const EngagementBar = ({ post }) => {
  const barRef = useRef();
  const pinBar = () => barRef.current.classList.add('drop-in--pinned');
  const unpinBar = () =>
    barRef.current.classList.replace('drop-in--pinned', 'drop-in--unpinned');
  return (
    <Headroom disableInlineStyles={true} onPin={pinBar} onUnpin={unpinBar}>
      <div
        id="engagement-bar"
        ref={barRef}
        className="bar drop-in drop-in--from-bottom drop-in-style-2 drop-in--js drop-in--not-top "
      >
        <div className="container max-width flex justify-between">
          <ShareIcons post={post} />
          <NextPost post={post} />
        </div>
      </div>
    </Headroom>
  );
};

export default EngagementBar;
